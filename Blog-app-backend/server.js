import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser'
import { userApp } from './APIs/userApi.js'
import {adminApp} from './APIs/adminApi.js'
import {authorApp} from './APIs/authorApi.js'
import { commonApp } from './APIs/commonApi.js'
const app=exp()
config()

//add cookie parser middleware
app.use(cookieParser())

//add body parser
app.use(exp.json())

//path level middlewares
app.use("/user-api",userApp)
app.use("/author-api",authorApp)
app.use("/admin-api",adminApp)
app.use("/auth",commonApp)



const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("DB connected")
        //should connect after db connection
        const port=process.env.port||4000
        app.listen(port,()=>console.log(`server listening on ${port}...`))
    }
    catch(err){
        console.log("err in db connection",err)
    }
};

connectDB()

//to handle invalid path error
app.use((req,res,next)=>{
console.log(req.url)
res.status(404).json({message:"Invalid path"})
})

//error handling middleware
app.use((err,req,res,next)=>{
if(err.name==='ValidationError'){
    return res.status(400).json({message:"error occured",error:err.message})
}
if(err.name==='CastError'){
    return res.status(404).json({message:"error occured",error:err.message})
}
return res.status(500).json({message:"error occured",error:err.message})
})
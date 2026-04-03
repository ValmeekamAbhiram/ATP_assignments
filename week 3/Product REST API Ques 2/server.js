import exp from 'express'
import { connect } from 'mongoose'
import cookieParser from 'cookie-parser'
import { verifyToken } from './middlewares/verifyToken.js'
import { productApp } from './APIs/ProductAPI.js'
const app=exp()

//Add body parser
app.use(exp.json())

//Cookie parser
app.use(cookieParser())

//Forward request to ProductApp if path starts with /product-api
app.use("/product-api",productApp)

//Connect to DB Server
async function connectDB(){
    try{
        await connect("mongodb://127.0.0.1:27017/Database_one");
        console.log("DB Connection success")
        //Start server
        app.listen(4000,()=>console.log("Server listening on port 4000"))
    }catch(err){
        console.log("err in DB connection: ",err)
    }
}
connectDB();

app.use((err,req,res,next)=>{
    console.log(err.name)
    //console.log(err.code)

    //Validation Error
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"Error occurred", error:err.message})
    }

    //Cast Error
    if(err.name==='CastError'){
        return res.status(400).json({message:"Error occurred", error:err.message})
    }
    
    //Send Server Side Error
    res.status(500).json({message:"Error occurred", error:err.message})
})
import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { employeeApp } from './APIs/employeeApi.js'
import cors from 'cors'

config()
const app=exp()
//add cors
app.use(cors({
    origin:["http://localhost:5173"]
}))
 //add body parser
app.use(exp.json())

const port=process.env.PORT||4000
app.use("/employee-api",employeeApp)

async function connectDB() {
    try{
        await connect(process.env.DB_URL)
        console.log("DB connection sucessful")
        app.listen(port,()=>console.log(`server listening to ${port}...`))
    }
    catch(err)
    {
        console.log("err in Db connection:",err)
    }
}

connectDB()
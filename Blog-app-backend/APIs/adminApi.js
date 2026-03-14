import { userModel } from "../models/userModel.js"
import { verifyToken } from "../middlewares/verifyToken.js"
import exp from 'express'
import { articleModel } from "../models/articleModel.js"
import { authorApp } from "./authorApi.js"
export const adminApp=exp.Router()

//Read all users and Authors
adminApp.get('/users',verifyToken("admin"),async(req,res)=>{
    //get all users and authors
    const userList=await userModel.find()
    console.log(userList)
    //getting only email and role of the users
    const usersDetails=userList.map(user=>{
        return {email:user.email,role:user.role}
    })
    if(!userList){
        res.status(404).json({message:"Users or Author Not Found"})
    }
    res.status(200).json({message:"Users and Authors:",payload:usersDetails})
})

//Block a user or Author
adminApp.patch("/users",verifyToken("admin"),async(req,res)=>{
    //get user details from req
    const {email,isUserActive}=req.body
    console.log(isUserActive)
     //get user by email
    const user=await userModel.findOne({email:email})
    if(!user){
        res.status(404).json({message:"User or Author Not Found"})
    }
    //check status
    if(isUserActive===user.isUserActive){
        return res.status(200).json({message:"User is already in the same state"})
    }
    
    user.isUserActive=isUserActive
    await user.save()

    //send res
    res.status(200).json({message:"User modified",payload:user})
})
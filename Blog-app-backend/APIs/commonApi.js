import { userModel } from '../models/userModel.js'
import exp from 'express'
import { hash, compare } from 'bcryptjs'
import {config} from 'dotenv'
import jwt from "jsonwebtoken"
import { verifyToken } from '../middlewares/verifyToken.js'
const {sign} = jwt
export const commonApp=exp.Router()
config()


//Route for register
commonApp.post("/users",async(req,res)=>{
    //get user from body
    const newUser=req.body
    //hash password and replace plain with hashed one
    newUser.password=await hash(newUser.password,12)
    
    // if(!allowedRole.includes(newUser.role)){
    //     return res.status(400).json({message:"Invalid role"})
    // }

    if(newUser.role==="author"||newUser.role==='user'){
    //create New user document
    const newUserDoc=new userModel(newUser)
    //save document
    await newUserDoc.save()
    //send res
    res.status(201).json({message:"User Registered"})
    }
    else{
        res.status(400).json({message:"admin role cant be created"})
    }
})

//Route for Login
commonApp.post("/login",async(req,res)=>{
    //get user creds from body
    const {email,password}=req.body
    //find user by email
    const user=await userModel.findOne({email:email})
    if(!user){
        return res.status(400).json({message:"Invalid email"})
    }

    //compare password
    const isMatched=await compare(password,user.password)
    //if passwords not match
    if(!isMatched){
        return res.status(400).json({message:"Invalid password"})
    }
    //create jwt
    const signedToken=sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY)
    
    //set token to cookie header
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //delete password from userObj
    const userObj = user.toObject()
    delete userObj.password
    //send res
    res.status(200).json({message:"login Success",payload:userObj})

})

//Route for Logout user
commonApp.get("/logout", (req,res) => {
//delete token from cookie storage
res.clearCookie("token",{
    httpOnly:true,
    secure:false,
    sameSite:"lax"
})
//send res
res.status(200).json({message:"Logout success"})
})

//Change Password
commonApp.put("/password", verifyToken("user","author","admin"), async (req,res)=>{

    const { newPassword, currentPassword } = req.body
    const userId = req.user?.id

    // get user
    const userDetails = await userModel.findById(userId)
    console.log(userDetails)
    if(!userDetails){
        return res.status(404).json({message:"User not found"})
    }
    // check if new password is same as current password
    const isMatched = await compare(newPassword, userDetails.password)
    if(isMatched){
        return res.status(400).json({message:"New password cannot be same as current password"})
    }
    // verify current password
    const isVerified = await compare(currentPassword, userDetails.password)
    if(!isVerified){
        return res.status(403).json({message:"You are not Authorized"})
    }
    // hash new password
    const hashedPassword = await hash(newPassword,12)
    // update password
    userDetails.password = hashedPassword
    // save
    await userDetails.save()
    //send res
    res.status(200).json({message:"Password is changed"})
})
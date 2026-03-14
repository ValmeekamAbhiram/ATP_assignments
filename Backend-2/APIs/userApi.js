//create users api and define routes
import exp from 'express'
import { userModel } from '../models/userModel.js'
import { hash,compare } from 'bcryptjs';
import jwt from 'jsonwebtoken'
const {sign}=jwt //sign means encoding 
import { verifyToken } from '../middlewares/verifyToken.js';
export const userApp=exp.Router()
import {config} from 'dotenv'



//Define User Rest API routes
//User login
userApp.post('/auth',async(req,res)=>{
    //get user cred obj frm client
    const {email,password}=req.body;
    //verify email
    let user=await userModel.findOne({email:email})
    //if email not existed
    if(user===null)
    {
        return res.status(404).json({message:"Invalid mail id"})
    }
    //compare passwords
    let result=await compare(password,user.password)
    if(result===false)
    {
        return res.status(400).json({message:"Invalid password"})
    }
    //console.log(result)
    //if passwords match genrate a token
     const signedToken =sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"3d"})//sign is synchronous,the paramter of sign can either be an object or an string

   //  res.status(200).json({message:"Login sucess",token:signedToken})
     //store token A HTTP only cookie
     res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
     })
     res.status(200).json({message:"login Sucessful",payload:user})
});




//create a new User
userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser=req.body;
    //hash password
    const hashedpassword=await hash(newUser.password,10)
    //replace plain password with hashed password
    newUser.password=hashedpassword
    //create a new user document
    const newUserDocument=new userModel(newUser)
    //save
     const result = await newUserDocument.save()
     console.log(result)
    //send response
    res.status(201).json({message:"user created"});
});

//read all users(protected route)
userApp.get("/users",verifyToken,async(req,res)=>
{
   let usersList= await userModel.find()
   res.status(200).json({message:"users",payload:usersList})
});

//read user by id
userApp.get("/user",verifyToken,async(req,res)=>{
    //read 
    const emailOfUser = req.user?.email;
    console.log(emailOfUser)

    const uid=req.params.id
    const user=await userModel.findOne({email:emailOfUser}).populate("cart.product")
    //const userObj=await userModel.findByID(uid)
    if(!user)
        res.status(400).json({message:"User not found"})
    
    res.status(200).json({message:"User found",payload:user})
});

//update a user by id
userApp.put("/users/:id",async(req,res)=>{
    //get modified user from req
    const modifiedUser=req.body;
    const uid=req.params.id;
    //find users by id
    const updateUser = await userModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new: true,runValidators:true},);
    res.status(200).json({message:"User modified",payload:updateUser})
});

userApp.delete("/users/:id", verifyToken,async(req,res)=>{
    const uid=req.params.id
    const user=await userModel.deleteOne({_id:uid})
    res.status(200).json({message:"User deleted",payload:user})
});


//add product to cart
// userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
//   //get product id from url params
//   let productId=req.params.pid
//   //get current user details
//   const emailofUser=req.user?.email
//   console.log(emailofUser)
//   //add product to cart
//   const result= await userModel.findOneAndUpdate({email:emailofUser},{$push:{cart:{product:productId}}})
//   console.log(result)
//   if(!result){
//     return res.status(404).json({message:"User not found"})
//   }
//   res.status(200).json({message:"Added to Cart"})

// })

userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
  //get product id from url params
  let productId=req.params.pid
  //get current user details
  const emailofUser=req.user?.email
  console.log(emailofUser)
  //add product to 
  
//Before adding,first it should check that product is already in cart,
const user=await userModel.findOne({email:emailofUser})
console.log(user)
if(!user){
  return res.status(404).json({message:"User not found"})
}
const productInCart=user.cart.find((item)=>item.product.toString()===productId)
  console.log(productInCart)
  if(!productInCart){
    return res.status(404).json({message:"Product not found in cart"})
  }
  //if product is already in cart,then increase the quantity by 1
  productInCart.count+=1
  await user.save()

  res.status(200).json({message:"Added to Cart"})

})









//for the fields to be unique,your collection shld bbe new
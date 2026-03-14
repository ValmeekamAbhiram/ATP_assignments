//create mini-express application(Seperate Router)
import exp from "express"
//import userModel from model folder
import {productModel} from '../models/productModel.js'

export const productApp=exp.Router()

// create product
productApp.post("/product",async(req,res)=>{
    //get details from body
    const newProduct=req.body
    //create product document
    const newProductDocument=new productModel(newProduct)
    //save
    const result=await newProductDocument.save()
    //send response
    res.status(201).json({message:"Product created",payload:result})
})

//get all products
productApp.get("/product",async(req,res)=>{
    //get all products from database
    const productsList=await productModel.find()
    //send response
    res.status(200).json({message:"products:",payload:productsList})
})

//get product by productId
productApp.get("/product/:id",async(req,res)=>{
    //get id from req params
    const pid=req.params.id
    //find product by id in db
    const product=await productModel.findById(pid)
    //send response
    res.status(200).json({message:"product",payload:product})
})

//update product by id
productApp.put("/product/:id",async(req,res)=>{
    const updateProduct=req.body
    //get id from req params
    const pid=req.params.id
    //find product by id in db and update
    const updatedProduct=await productModel.findByIdAndUpdate(pid,{$set:{...updateProduct}},{new:true,runValidators:true})
    //send response
    res.status(200).json({message:"product",payload:updatedProduct})
})

//delete product by id
productApp.delete("/product/:id",async(req,res)=>{
    //get id from req params
    const pid=req.params.id
    //find product by id in db and delete
    const deletedProduct=await productModel.findByIdAndDelete(pid)
    //send response
    res.status(200).json({message:"product deleted",payload:deletedProduct})
})

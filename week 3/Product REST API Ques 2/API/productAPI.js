/*
     REST API with below operations
     a. Create product
     b. Read all products
     c. Read a product by productId
     d. Update a product by productId
     e. Delete a product by productId 
*/
import exp from 'express'
import {productModel} from '../models/ProductModel.js'     
export const productApp=exp.Router()

//Define product REST API routes

//Create new product
productApp.post("/products",async(req,res)=>{

    //Get new product object from req
    const newProduct=req.body
   
    //Create new product document
    const newProductDocument=new productModel(newProduct)

    //Save
    const result=await newProductDocument.save()
    console.log("Result: ",result)

    //Send response
    res.status(201).json({message:"Product created"})
})

//Read all products
productApp.get("/products",verifyToken,async(req,res)=>{
    
    //Read all products from DB
    let productsList=await productModel.find()
    //Send response
    res.status(200).json({message:"products",payload:productsList})
})

//Read a product by product ID
productApp.get("/products/:productId",verifyToken,async(req,res)=>{
    
    //Read object ID from req params
    const pid=Number(req.params.productId)
    
    //Find product by ID
    const productObj=await productModel.findOne({productId:pid})
    
    //If product not found
    if(!productObj){
        return res.status(404).json({message:"product not found"})
    }//Refinement for resource not found 
    
    //Send response
    res.status(200).json({message:"product",payload:productObj})
})

//Update a product by ID
productApp.put("/products/:productId",verifyToken,async(req,res)=>{
    
    //Get modified product from request
    const modifiedProduct=req.body
    const pid=Number(req.params.productId)
    
    //Find product by Id and update
    const updatedProduct=await productModel.findOneAndUpdate(
        {productId: pid},
        {$set:{...modifiedProduct}},
        {new: true, runValidators:true }
    )
    
    //Validators don't work automatically here

    //Hence, we force the validators to run by using runValidators:true
    
    //Send response
    res.status(200).json({message:"Modified product", payload:updatedProduct})
})

//Delete a product by ID
productApp.delete("/products/:productId",verifyToken,async(req,res)=>{
    
    //Get product Id from request
    const pid=Number(req.params.productId)
    
    //Find product and delete
    let deletedProduct=await productModel.findOneAndDelete({productId:pid})
    
    //If product is not found
    if(!deletedProduct){
        return res.status(404).json({message:"product not found"})
    }
    //Send response
    res.status(200).json({message:"product removed",payload:deletedProduct})
})
//create mini-express application
import exp from "express"
export const productApp=exp.Router()

 let products=[]
//Create API's
    
   //Get all Products
    productApp.get('/products',(req,res)=>{
        //Read all users from array
        res.json({message:"All Products:",payload:products})
    })
 
    //Get Products by brand
    productApp.get('/products/:brand',(req,res)=>{
        //get brand from parameter
        let urlBrand=req.params.brand
        //find the product
        let product=products.find(product=>product.brand===urlBrand)
        //if not found
           if(product===undefined){
            return res.json({message:"Product Not found"})
           }
        //send response to client
        res.json({message:"Product:",payload:product})   
    })

    productApp.post('/products',(req,res)=>{
        let newProduct=req.body
        //push the product into products arr
        products.push(newProduct)
        //send response to client
        res.json({message:"product added Successfully"})
    })

    productApp.put('/products',(req,res)=>{
        let modifiedProduct=req.body
        //get index of product
        let index=products.findIndex(product=>product.id===modifiedProduct.id)
        //if product not found
        if(index===-1)
            return res.json({message:"Product Not found"})
        //Update product
        products.splice(index,1,modifiedProduct)
        //send response to client
        res.json("Modified Succesfully")

    })

    productApp.delete('/products/:id',(req,res)=>{
       let urlId=Number(req.params.id)
       //get index of product
       let index=products.findIndex(product=>product.id===urlId)
       //if not found
       if(index===-1)
         return res.json({message:"Product Not Found"})
       //removing product
       products.splice(index,1)

       //send response to client
       res.json({message:"Product Removed Successfully"})

    })
import {model,Schema} from 'mongoose'

//Create product Schema(productID,productName,price,brand)
const productSchema=new Schema({
    productId:{
        type:Number,
        required:true,
        unique:[true,"Product exist with same id"]
    },
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:10000,
        max:50000
    },
    brand:{
        type:String,
        required:true
    }

},{versionKey:false,timestamps:true})


//Generate Product model
export const productModel=model("product",productSchema)
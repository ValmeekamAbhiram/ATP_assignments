/*
Create Product REST API with below features
Product document structure
     a.productId (required)
     b.productName(required)
     c.price(required, min price 10000 and max price 50000)
     d.brand(required)
*/
import {Schema,model} from "mongoose"

//Create Product Schema(productId,productName,price(min 10000 and max 50000),brand)
const productSchema=new Schema({
    
    //structure of Product resource
    productId:{
        type:Number,
        required:[true,"ProductId is required"],
    },
    productName:{
        type:String,
        required:[true,"ProductName is required"],
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[10000,"Minimum price is 10000"],
        max:[50000,"Maximum price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    }
},
{
    versionKey:false,
    timestamps:true,
}//By using this extra object, we can eliminate version key and enable timestamps
)

//Generate ProductModel
export const productModel=model("product",productSchema)
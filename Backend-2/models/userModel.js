import { model, Schema,Types } from "mongoose"
//create cart schema{product, count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"
    },
    count:{
        type: Number,
        default:1
    }
})
//Create User Schema (username,password,emaiil,age)
const userSchema=new Schema({
    //structure of User resource
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Minimum length of User name is 4"],
        maxLength:[6,"Username size should not exceed 6 Letters"],
        unique:[true,"Username already exists"]
    },

    password:{
        type:String,
        required:[true,"password is required"]
    },

    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"Email already exists"]
    },

    age:{
        type:Number
    },

    cart:[cartSchema]

},{
    versionKey:false,
    timestamps:true
})


//Generate Model

export const userModel= model("user",userSchema)
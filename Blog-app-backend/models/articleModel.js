import {model,Schema,Types} from 'mongoose'

const commentSchema=new Schema({
    comment:{
        type:String,
        required:[true,"Add comment"]
    },
    user:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"User Id is required"]
    }
})

const articleSchema=new Schema({
    author:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"Author ID is required"]
    },
    title:{
        type:String,
        required:[true,"title is required"],

    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    content:{
        type:String,
        required:[true,"Content is required"]
    },
    comments:[{type:commentSchema,default:[]}],
    isArticleActive:{
        type:Boolean,
        default:true
    }
},{versionKey:false,
    timestamps:true,
    strict:"throw"
})



//create article model
export const articleModel=model('article',articleSchema)
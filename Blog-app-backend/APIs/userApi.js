import { userModel } from "../models/userModel.js"
import { verifyToken } from "../middlewares/verifyToken.js"

import exp from 'express'
import { articleModel } from "../models/articleModel.js"
export const userApp=exp.Router()

// Read articles of all authors
userApp.get("/articles",verifyToken("user"),async(req,res)=>{
    //read articles
    const articleList=await articleModel.find()
    //send res
    res.status(200).json({message:"Articles: ",payload:articleList})
})

// Add comment
userApp.put("/articles",verifyToken("user"),async(req,res)=>{
    //get body from req
    const {articleId,comment}=req.body
    //check article is there or not
    const articleObj=await articleModel.findOne({_id:articleId,isArticleActive:true})
    if(!articleObj){
        res.status(404).json({message:"Article not found"})
    }
    //get user id
    const user=req.user?.id
    //add comment to comments array of article array
    articleObj.comments.push({user:user,comment:comment})
    //save
    await articleObj.save()
    //send res
    res.status(200).json({message:"Comment added successfully",payload:articleObj})
})
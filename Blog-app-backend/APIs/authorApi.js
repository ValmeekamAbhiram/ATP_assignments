import { userModel } from "../models/userModel.js"
import exp from 'express'
import { articleModel } from "../models/articleModel.js"
import { verifyToken } from "../middlewares/verifyToken.js"
export const authorApp=exp.Router()
//creates articles
authorApp.post("/article",verifyToken("author"),async(req,res)=>{
    //get articleObj from request
    const articleObj=req.body
    //verify author or not
    let user=req.user
    let author=await userModel.findById(articleObj.author)
    if(!author){
        return res.status(404).json({message:"Author not Found"})
    }
    if(user.email!=author.email){
        return res.status(403).json({message:"You are not Authorized"})
    }

    if(author.role === "author"){
       //create article Document
    const articleDoc=new articleModel(articleObj)
    //save
    await articleDoc.save()
    //send res
    res.status(201).json({message:"Article published succesfully"})
    }
    else{
        return res.status(403).json({message:"Only Author can Publish"})
    }
})
//reads articles
authorApp.get("/article",verifyToken("author"),async(req,res)=>{
    //read the author from the decodedToken
    const authorIdOfToken=req.user?.id
    //get articles by author id
    const articlesList=await articleModel.find({author:authorIdOfToken})
    res.status(200).json({message:"Articles",payload:articlesList})

})
//edits articles
authorApp.put("/article",verifyToken("author"),async(req,res)=>{
    //get modified article from req
    const {articleId,title,category,content}=req.body
   //read the author from the decodedToken
    const authorIdOfToken=req.user?.id
    const modifiedArticle=await articleModel.findOneAndUpdate({_id:articleId,author:authorIdOfToken},{$set:{title,category,content}},{new:true})
    if(!modifiedArticle){
        return res.status(403).json({message:"You are not Authorized"})
    }
    res.status(200).json({message:"Article is modified",payload:{modifiedArticle}})
})

//soft delete the articles
authorApp.patch("/article",verifyToken("author"),async(req,res)=>{
    //read the author from the decodedToken
    const authorIdOfToken=req.user?.id

    //get modified article from req
    const {articleId,isArticleActive}=req.body
    //get article by id
    const article=await articleModel.findOne({_id:articleId,author:authorIdOfToken})
    //check status
    if(isArticleActive===article.isArticleActive){
        return res.status(200).json({message:"Article is already in the same state"})
    }
    article.isArticleActive=isArticleActive
    await article.save()

    //send res
    res.status(200).json({message:"Article modified",payload:article})
    
})


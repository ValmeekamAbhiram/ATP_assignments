//create mini-express application
import exp from "express"
export const userApp=exp.Router()

let users=[]
//Create API(REST(Representational State Transfer) API)
   
    //Route to handle GET req of client(http://localhost:3000/users)
    userApp.get('/users',(req,res)=>{
        
        res.json({message:"all users",payload:users})
    })

    userApp.get('/users/:id',(req,res)=>{
        //get id of user from url parameter
        let urlId=Number(req.params.id)
        //Find index of user
        let userIndex=users.findIndex(userId=>userId.id===urlId)
        //If user not found
        if (userIndex===-1){
          return res.json({message:"User not found"})
        }


        res.json({message:"User:",payload:users[userIndex]})
    })

    //Route to handle PUT req of client
    userApp.put('/users',(req,res)=>{
        //get modified user from client
        let modifiedUser=req.body
        //get index of existing user in users array
        let index =users.findIndex(usersObj=>usersObj.id===modifiedUser.id)
        //if user not found
        if(index===-1){
            return res.json({message:"User not found"})
        }
        //update user with index
        users.splice(index,1,modifiedUser)
        //Send response to the client
        res.json({message:"User modified Successfully"})
    })

    //Route to handle POST req of client
    userApp.post('/users',(req,res)=>{
        //get new user from client
        const newUser=req.body
        //push user in user array
        users.push(newUser)
        //send response to the client
        res.json({message:"User created Successfully"})
    })

    //Route to handle DELETE req of client
    userApp.delete('/users/:id',(req,res)=>{// /:id is a parameter to catch url arguments
        //get id of user from url parameter
        let idOfUrl=Number(req.params.id)
        //find index of user
        let index=users.findIndex(userId=>userId.id===idOfUrl)
        //if user not found
        if(index===-1){
            return res.json({message:"User not found"})
        }

        //delete user from arr by index
        users.splice(index,1)

        //send respone to client
        res.json({message:"User deleted Successfully"})
    })
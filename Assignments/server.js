//Create HTTP server
import exp, { json } from 'express'
const app=exp()//Express application contains HTTP server internally
import {userApp} from "./APIs/userApi.js"
import {productApp} from "./APIs/productApi.js"

//We have to call the middleware functions before the routes because when we already getting response from routes what is the need of middleware 
app.use(middleware1)
app.use(middleware2)

app.use('/user-api',userApp)
app.use('/product-api',productApp)

//use body parser middleware
app.use(exp.json())//Inbuilt middleware

//Create custom middleware
//middleware is simply a function
function middleware1(req,res,next){
    //send res from middleware before route
    //res.json({message:"This is response from middleware1"})
    //forwared req to next
    console.log("middleware1 executed")
    next()
}

function middleware2(req,res,next){
    //send res from middleware before route
    //res.json({message:"This is response from middleware2"})
    //forwared req to next
    console.log("middleware2 executed")
    next()
}

//use method is used on app varaible which is express varaible to use middlewares


//set a port number
const port=3000

//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening to the port ${port}...`))


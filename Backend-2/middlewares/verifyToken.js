import jwt from "jsonwebtoken"
const {verify} =jwt 

export function verifyToken(req,res,next){
    //token verification logic
   const token=req.cookies?.token
   //If unauthorized person logins
   if(!token)
   {
    return res.status(401).json({message:"plz login "})
   }
   try{
    const decodedToken= verify(token,'abcdef');//verify function returns error if the token is not valid 
    console.log(decodedToken);

    req.user=decodedToken
    //call next
    next()
   }
   catch(err)
   {
    res.status(401).json({message:"Session expired.Plz login"})
   }
}
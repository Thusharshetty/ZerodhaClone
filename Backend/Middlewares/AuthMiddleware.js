const User=require("../models/UserModel");
require("dotenv").config();
const jwt=require("jsonwebtoken");

module.exports.userVerification=async(req,res)=>{
    const token=req.cookies.token||req.headers.authorization?.split(" ")[1]; // "Bearer TOKEN"
    if(!token){
        return res.status(401).json({ status: false });
    }
    jwt.verify(token,process.env.TOKEN_KEY, async (err,data)=>{
        if(err){
            return res.status(401).json({ status: false });
        }else{
            const user=await User.findById(data.id);
            if(!user){
                return res.status(401).json({ status: false });
            }else{
                return res.json({ status: true, user: user.username })
            }
        }
    });
}
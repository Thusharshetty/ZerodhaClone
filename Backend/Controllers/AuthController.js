const User=require("../models/UserModel");
const {createSecretToken}=require("../util/SecretToken");
const bcrypt=require("bcrypt");

module.exports.Signup=async(req,res)=>{
    try{
        const {email,username,password}=req.body;
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const user=new User({email,username,password});
        await user.save();
        const token=createSecretToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            sameSite: "none",
           secure: true,
        });

        res.status(201).json({ message: "User signed in successfully", success: true, user });
    }catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};


module.exports.Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:'All fields are required'});
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const auth=await bcrypt.compare(password,user.password);
        if(!auth){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token=createSecretToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            sameSite: "none",
             secure: true,
        });
        res.status(200).json({ message: "User logged in successfully", success: true, user,  token });
    }catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
}
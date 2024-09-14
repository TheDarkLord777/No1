const {Router}=require("express")
const User=require("../models/User")
const bcrypt=require("bcryptjs")
const config=require("config")
const {check,validationResult}=require("express-validator")
const jwt=require("jsonwebtoken")
const router=Router()
// /api/auth/register
router.post(
    "/register",
    [
        check("email","Notogri email").isEmail(),
        check("password","Minimal uzunlik 8ta belgi").isLength({min:8})
    ],

async (req,res)=>{
    try{
        const errors=validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array,message:"Notogri malumotlar kiritilgan"
            })
        }
        const {email,password}=req.body
        const candidate=await User.findOne({email})
        if (candidate){
            return res.status(400).json({message:"Bunaqa username mavjud"})
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const user=new User({email,password:hashedPassword})
        await user.save()
        res.status(201).json({message:"User yaratildi"})
    }
    catch (e){
        res.status(500).json({message:"Nimadir notori ketti"})
    }

})
// /api/auth/login
router.post("/login",
[
    check("email","Togri email ni yozing").normalizeEmail().isEmail(),
    check("password","Parolni kiriting").exists()
],
async (req,res)=>{

    try{
        const errors=validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array,message:"Notogri malumotlar kiritilgan"
            })
        }

        const {email,password}=req.body
        const user=await User.findOne({email})

        if(!user){
            return res.status(400).json({message:"User topilmadi"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).json({message:"Notogri parol kiritilgan"})
        }
        const token=jwt.sign({ userId:user.id },config.get("jwtSecret"),{expiresIn:"1h"})
        res.json({token,userId:user.id})
    }
    catch (e){
        res.status(500).json({message:"Nimadir notori ketti"})
    }
    
})

module.exports=router
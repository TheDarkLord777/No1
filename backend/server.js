const express=require("express")
const PORT=process.env.PORT || 10000
const cors = require('cors');
const app=express()

app.use(cors({
    origin: 'https://no1-chi.vercel.app'  
  }));

app.listen(PORT,()=>{console.log(`Server starting on ${PORT}`)})
app.get("/api",(req,res)=>{
    res.json({
        message:"Hello there how are u?"
    })
})
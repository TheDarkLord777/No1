const express=require("express")
const PORT=process.env.PORT || 3001
const cors = require('cors');
const app=express()

app.use(cors());

app.listen(PORT,()=>{console.log(`Server starting on ${PORT}`)})
app.get("/api",(req,res)=>{
    res.json({
        message:"Hello there how are u?"
    })
})
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const config=require("config")
const mongoose=require("mongoose")
const PORT = config.get("port") || 5000;
const app = express();


// CORS sozlamalari
app.use(cors({
  origin: 'https://no1-chi.vercel.app'  
}));



async function start(){
  try{
    await mongoose.connect(config.get("mongoURL"))
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server starting on ${PORT}`);
    });
  }
  catch (e){
    console.log("Server Error",e.message)
    process.exit(1)

  }
}
start()
// Statik fayllar uchun to'g'ri yo'lni ko'rsatamiz
app.use("/assets", express.static("assets"));
app.use("/api/auth",require("./routes/auth.routes"))





// Oddiy API marshruti
app.get("/api", (req, res) => {
  res.json({
    message: "Hello there, how are you?"
  });
});

// Media URL qaytarish marshruti
app.get("/api/media", (req, res) => {
  // Faylni to'g'ri URL bilan qaytarish
  const mediaUrl = `http://${req.get("host")}/assets/1.mp4`;
  res.json({
    url: mediaUrl
  });
});

// Barcha fayllarni qaytarish uchun marshrut
app.get("/api/all", (req, res) => {
  const directoryPath = path.join(__dirname, 'assets');
  
  // 'assets' papkasidagi fayllarni o'qiymiz
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to load media files."
      });
    }

    // Har bir fayl uchun to'liq URL yaratamiz
    const fileUrls = files.map(file => {
      return `${req.protocol}://${req.get("host")}/assets/${file}`;
    });

    // Fayllarning URL-larini JSON formatida qaytaramiz
    res.json({
      files: fileUrls
    });
  });
});

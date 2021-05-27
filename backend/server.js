require("dotenv").config();
// const path = require("path");
const express = require("express");
const Contact = require("./models/Contact")
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");



const app = express();

app.use(express.json());

connectDB();

app.get("/contact", (req, res) => {
  res.json({ message: "This is the contact page" });
});

app.post("/contact", (req, res) => {
  const { fullName, email, message, city } = req.body;
  let newContact = new Contact({ 
    fullName, email,message, city
  })
  newContact.save();
  console.log("newContact has been saved")
  
});


app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '/frontend/build')));
//   app.get("*", (req, res)=>{
//    res.sendFile(path.join(__dirname, 'frontend',"build","index.html"));
//   })
// }else{
//   app.get("/", (req,res)=>{
//     res.send("Hey There , Greetings From The Server. Have a Good Day :)")
//   })
// }


// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log("serve at http://localhost:5000"));\

// Package .json 
// "start": "node server.js",
//     "start:dev": "nodemon server.js",
//     "data:import": "node backend/seederScript"
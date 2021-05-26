require("dotenv").config();
const express = require("express");
const Contact = require("./models/Contact")
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

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

require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY)
const Contact = require("./backend/models/Contact")
const productRoutes = require("./backend/routes/productRoutes");
const connectDB = require("./backend/config/db");

// Initializing APP
const app = express();

// Midlewares
app.use(express.json());
app.use(cors())

// Database Connection
connectDB();

// Contacts Route
app.get("/contact", (req, res) => {
  res.json({ message: "This is the contact page" });
});

app.post("/contact", (req, res) => {
  const { fullName, email, message, city } = req.body;
  let newContact = new Contact({
    fullName, email, message, city
  })
  newContact.save();
  console.log("newContact has been saved")

});

// Stripe Integration Route
app.post("/payment", (req, res) => {
  // Getting Product details and token from the client side
  const { product, token, price } = req.body;

  console.log(`Payment of ${price} is successfully Completed !!!` );
 

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then((customer) => {

    stripe.charges.create({
      amount: price * 100 ,
      currency: "INR",
      customer: customer.id,
      receipt_email: token.email,
      description: "Processing Payment",

    })
  }).then(result => res.status(200).json(result)).catch(err => console.log(err))

})


app.use("/api/products", productRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get("*", (req, res)=>{
   res.sendFile(path.join(__dirname, 'frontend',"build","index.html"));
  })
}else{
  app.get("/", (req,res)=>{
    res.send("Hey There , Greetings From The Server. Have a Good Day :)")
  })
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));

// Package .json 
// "start": "node server.js",
//     "start:dev": "nodemon server.js",
//     "data:import": "node backend/seederScript"
const express = require("express");
const connectDB = require("./config/db");
const dotenv= require("dotenv").config()
const router = require("./routes/bookRoutes");
const PORT= 8080
const app = express();
connectDB();

app.use(express.json());
app.use("/",router)

app.listen(PORT,() => {
  console.log(`server running at Port: ${PORT}`);
});

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

require('dotenv').config(); 

mongoose.connect(process.env.MONGODB_URI); 


app.listen(process.env.PORT, () => {
  console.log("Server started 🚀 ");
});
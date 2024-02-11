const mongoose = require("mongoose");


// const URL = "mongodb://127.0.0.1:27017/mern_admin";

// const URL = process.env.MONGODB_URI;

const URL =
  "mongodb://localhost:27017/mern_admin";

// mongoose.connect(URL);

const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection Failed");
    process.exit(0);
  }
};

module.exports = connectDb;

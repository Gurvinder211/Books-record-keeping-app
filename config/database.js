const mongoose = require('mongoose');

const dotenv = require("dotenv");

dotenv.config();

const dbport = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(dbport, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
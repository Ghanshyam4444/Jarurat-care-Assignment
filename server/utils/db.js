const mongoose = require("mongoose");
// mongodb+srv://ghanshyam:mangla@cluster0.se0fs.mongodb.net/jarurat_care?retryWrites=true&w=majority&appName=Cluster0
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};
module.exports = connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Db connected!");
  } catch (error) {
    console.log("error in connecting mongoDB", error);
  }
};

export default connectDB;

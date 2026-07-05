import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);

    console.log("Database connected");
    console.log("DB Name:", mongoose.connection.db.databaseName);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
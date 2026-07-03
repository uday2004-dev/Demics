import mongoose from "mongoose";
import { Service } from "../models/servicesSchema.js";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL)
        if (connection) {
            console.log("database is connected")
              console.log("DB Name:", mongoose.connection.db.databaseName);
              const indexes = await Service.collection.indexes();
console.log(indexes);

await Service.collection.dropIndex("slug_1");

console.log("slug_1 index deleted");
        }
    } catch (error) {
        console.log(error)

    }
}

export default connectDB
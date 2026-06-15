import mongoose, { Schema } from "mongoose";

const blogsSchema = mongoose.Schema({
    picture: {
        type: String,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    services: {
        type: Schema.Types.ObjectId,
        ref: "Services",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    }
)

export const Blogs=mongoose.model("Blogs",blogsSchema)
import mongoose from "mongoose"

const testimonialSchema = mongoose.Schema(
    {
        testimonial: {
            type: String,
            required: true,
        },
        review: {
            type: String,
            required: true
        }, name: {
            type: String,
            required: true,

        },
        position: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

export const Testimonial = mongoose.model("Testimonial", testimonialSchema)
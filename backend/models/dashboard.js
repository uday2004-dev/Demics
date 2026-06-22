import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    // formType: {
    //   type: String,
    //   enum: ["contact", "workingTogether"],
    //   required: true,
    // },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "converted"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry = mongoose.model("Inquiry", inquirySchema);
import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    photo: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least one photo is required",
      },
    },

    liveProject: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)/.test(v);
        },
        message: "Live project must be a valid URL",
      },
    },

    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
      index: true, 
    },

    testimonial: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);




export const Project = mongoose.model("Project", projectSchema);
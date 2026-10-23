// import mongoose, { Schema } from "mongoose";

// const blogsSchema = mongoose.Schema({
//     picture: {
//         type: [String],
//     },
//     title: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     services: {
//         type: Schema.Types.ObjectId,
//         ref: "Service",
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     heading: {
//         type: String,
//         required: true,
//     },

//     slug: {
//         type: String,
//         required: true,
//         unique: true,
//     }
// },
//     {
//         timestamps: true,
//     }
// )

// export const Blogs = mongoose.model("Blogs", blogsSchema)


// import mongoose, { Schema } from "mongoose";

// const sectionSchema = new Schema(
//   {
//     heading: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     // is section ki apni pictures (optional, jitni chaho)
//     pictures: {
//       type: [String],
//       default: [],
//     },
//   },
//   { _id: true }
// );

// const blogsSchema = new Schema(
//   {
//     // cover / main pictures
//     picture: {
//       type: [String],
//       default: [],
//     },
//     title: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     slug: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },
//     services: {
//       type: Schema.Types.ObjectId,
//       ref: "Service",
//       required: true,
//     },
//     // intro description (blog ke top pe)
//     description: {
//       type: String,
//       required: true,
//     },
//     // multiple heading + description + pictures
//     sections: {
//       type: [sectionSchema],
//       default: [],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export const Blogs = mongoose.model("Blogs", blogsSchema);


import mongoose, { Schema } from "mongoose";

const sectionSchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    // is section ki apni pictures (optional, jitni chaho, ya koi bhi nahi)
    pictures: {
      type: [String],
      required: false,
      default: [],
    },
  },
  { _id: true }
);

const blogsSchema = new Schema(
  {
    // cover / main pictures
    picture: {
      type: [String],
      default: [],
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // blog ka main heading (listing card + blog page pe dikhta hai)
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    services: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    // intro description (blog ke top pe)
    description: {
      type: String,
      required: true,
    },
    // multiple heading + description + (optional) pictures
    sections: {
      type: [sectionSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const Blogs = mongoose.model("Blogs", blogsSchema);
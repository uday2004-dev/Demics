import mongoose from "mongoose";
import { Service } from "../models/servicesSchema.js";
import { Blogs } from "../models/blogsSchema.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";


export const createBlog = async (req, res) => {
    console.log("BODY =>", req.body);
    console.log("FILE =>", req.file);
    try {
        const {
            title,
            description,
            heading,
            services,

        } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Picture is required",
            });
        }

        if (
            [title, description, heading, services].some(
                (f) => !f
            )
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        if (!mongoose.Types.ObjectId.isValid(services)) {
            return res.status(400).json({
                success: false,
                message: "Invalid service ID",
            });
        }

        const serviceExists = await Service.findById(services);

        if (!serviceExists) {
            return res.status(404).json({
                success: false,
                message: "Service not found",
            });
        }

        const result = await uploadOnCloudinary(
            req.file.buffer,
            "blogs"
        );
        console.log(result)
        const newBlogs = await Blogs.create({
            title,
            description,
            picture: [result.secure_url],
            heading,
            services,

        });

        return res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog: newBlogs,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find()
      .populate("services", "name photo")
      .lean();

    return res.status(200).json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch blogs",
    });
  }
};



export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID",
      });
    }

    const blog = await Blogs.findById(id)
      .populate("services", "name photo")
      .lean();

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch blogs",
    });
  }
};


export const deleteBlogs = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blogs.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    await Blogs.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete blog",
    });
  }
};
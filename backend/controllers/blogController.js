import mongoose from "mongoose";
import { Service } from "../models/servicesSchema.js";
import { Blogs } from "../models/blogsSchema.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";




// export const createBlog = async (req, res) => {
//   try {
//     const { title, description, services } = req.body;

//     // files ko fieldname se alag karo
//     const files = req.files || [];
//     const coverFile = files.find((f) => f.fieldname === "picture");

//     if (!coverFile) {
//       return res.status(400).json({ success: false, message: "Picture is required" });
//     }

//     if ([title, description, services].some((f) => !f)) {
//       return res.status(400).json({ success: false, message: "Please fill all required fields" });
//     }

//     if (!mongoose.Types.ObjectId.isValid(services)) {
//       return res.status(400).json({ success: false, message: "Invalid service ID" });
//     }

//     const serviceExists = await Service.findById(services);
//     if (!serviceExists) {
//       return res.status(404).json({ success: false, message: "Service not found" });
//     }

//     // sections parse
//     let sections = [];
//     try {
//       sections = JSON.parse(req.body.sections || "[]");
//     } catch (err) {
//       return res.status(400).json({ success: false, message: "Invalid sections format" });
//     }

//     // index yaad rakhne ke liye filter se pehle files map karo
//     sections = sections
//       .map((s, i) => ({ ...s, _index: i }))
//       .filter((s) => s.heading?.trim() && s.description?.trim());

//     if (sections.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Add at least one heading with description",
//       });
//     }

//     // cover upload
//     const coverResult = await uploadOnCloudinary(coverFile.buffer, "blogs");

//     // har section ki pictures upload
//     const finalSections = [];
//     for (const s of sections) {
//       const sectionFiles = files.filter(
//         (f) => f.fieldname === `sectionPictures_${s._index}`
//       );

//       const urls = [];
//       for (const file of sectionFiles) {
//         const r = await uploadOnCloudinary(file.buffer, "blogs/sections");
//         urls.push(r.secure_url);
//       }

//       finalSections.push({
//         heading: s.heading.trim(),
//         description: s.description,
//         pictures: urls,
//       });
//     }

//     // slug
//     const baseSlug = (req.body.slug || title)
//       .toLowerCase()
//       .trim()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)/g, "");
//     const exists = await Blogs.findOne({ slug: baseSlug });
//     const slug = exists ? `${baseSlug}-${Date.now()}` : baseSlug;

//     const newBlog = await Blogs.create({
//       title,
//       slug,
//       description,
//       picture: [coverResult.secure_url],
//       sections: finalSections,
//       services,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Blog created successfully",
//       blog: newBlog,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false, message: error.message });
//   }
// };


export const createBlog = async (req, res) => {
  try {
    const { title, heading, description, services } = req.body;

    // files ko fieldname se alag karo
    const files = req.files || [];
    const coverFile = files.find((f) => f.fieldname === "picture");

    if (!coverFile) {
      return res.status(400).json({ success: false, message: "Picture is required" });
    }

    if ([title, heading, description, services].some((f) => !f?.trim())) {
      return res.status(400).json({ success: false, message: "Please fill all required fields" });
    }

    if (!mongoose.Types.ObjectId.isValid(services)) {
      return res.status(400).json({ success: false, message: "Invalid service ID" });
    }

    const serviceExists = await Service.findById(services);
    if (!serviceExists) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }

    // sections parse
    let sections = [];
    try {
      sections = JSON.parse(req.body.sections || "[]");
    } catch (err) {
      return res.status(400).json({ success: false, message: "Invalid sections format" });
    }

    // index yaad rakhne ke liye filter se pehle files map karo
    sections = sections
      .map((s, i) => ({ ...s, _index: i }))
      .filter((s) => s.heading?.trim() && s.description?.trim());

    if (sections.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Add at least one heading with description",
      });
    }

    // cover upload
    const coverResult = await uploadOnCloudinary(coverFile.buffer, "blogs");

    // har section ki pictures upload (optional, na ho to pictures: [])
    const finalSections = [];
    for (const s of sections) {
      const sectionFiles = files.filter(
        (f) => f.fieldname === `sectionPictures_${s._index}`
      );

      const urls = [];
      for (const file of sectionFiles) {
        const r = await uploadOnCloudinary(file.buffer, "blogs/sections");
        urls.push(r.secure_url);
      }

      finalSections.push({
        heading: s.heading.trim(),
        description: s.description,
        pictures: urls,
      });
    }

    // slug
    const baseSlug = (req.body.slug || title)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const exists = await Blogs.findOne({ slug: baseSlug });
    const slug = exists ? `${baseSlug}-${Date.now()}` : baseSlug;

    const newBlog = await Blogs.create({
      title: title.trim(),
      heading: heading.trim(),
      slug,
      description,
      picture: [coverResult.secure_url],
      sections: finalSections,
      services,
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find()
      .populate("services", "name photo")
      .sort({ createdAt: -1 })
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

// export const getBlogs = async (req, res) => {
//   try {
//     const blogs = await Blogs.find()
//       .populate("services", "name photo")
//       .lean();

//     return res.status(200).json({
//       success: true,
//       count: blogs.length,
//       blogs,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Unable to fetch blogs",
//     });
//   }
// };



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



// export const editBlogs = async (req, res) => {
//   try {
//     console.log("ID:", req.params.id);
//     console.log("BODY:", req.body);
//     const { id } = req.params;
//     const updateData = req.body;

//     const updatedBlogs = await Blogs.findByIdAndUpdate(
//       id,
//       updateData,
//       { new: true, runValidators: true }
//       ,
   

//     );

//     if (!updatedBlogs) {
//       return res.status(404).json({
//         success: false,
//         message: "Service not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Service updated successfully",
//       data: updatedBlogs,
//     });

//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update service",
//     });
//   }
// };


export const editBlogs = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("ID:", id);
    console.log("BODY:", req.body);

    const updatedBlogs = await Blogs.findByIdAndUpdate(
      id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );
    if (!updatedBlogs) {
  return res.status(404).json({
    success: false,
    message: "Blog not found",
  });
}

    console.log("UPDATED:", updatedBlogs);

    const check = await Blogs.findById(id);
    console.log("AFTER UPDATE:", check);

    return res.status(200).json({
      success: true,
      data: updatedBlogs,
    });
//   } catch (error) {
//     console.log(error);
//   }
// };

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
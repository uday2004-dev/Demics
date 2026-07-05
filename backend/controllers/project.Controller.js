import mongoose from "mongoose";
import { Project } from "../models/projectSchema.js";
import { Service } from "../models/servicesSchema.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";

export const createProject = async (req, res) => {
  console.log("BODY =>", req.body);
  console.log("FILE =>", req.file);
  try {
    const {
      title,
      description,
      liveProject,
      service,
      testimonial,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Photo is required",
      });
    }

    if (
      [title, description, liveProject, service].some(
        (f) => !f
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(service)) {
      return res.status(400).json({
        success: false,
        message: "Invalid service ID",
      });
    }

    const serviceExists = await Service.findById(service);

    if (!serviceExists) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const result = await uploadOnCloudinary(
      req.file.buffer, "projects"
    );
    console.log(result)
    const newProject = await Project.create({
      title,
      description,
      photo: result.secure_url,
      liveProject,
      service,
      testimonial,
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      project: newProject,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("service", "name photo")
      .lean();

    return res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch projects",
    });
  }
};


export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id)
      .populate("service", "name photo")
      .lean();

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// export const getProjectById = async (req, res) => {
//   try {
//     const { id } = req.params;


//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid project ID",
//       });
//     }

//     const project = await Project.findById(id)
//       .populate("service", "name photo")
//       .lean();

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       project,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Unable to fetch project",
//     });
//   }
// };


export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params


    const project = await Project.findById(id)
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Is is not found"
      })
    }

    await Project.findByIdAndDelete(id)
    return res.status(200).json({
      success: true,
      mmessage: "Project deleted success fully"
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      message: "Id is not matching"
    })
  }

}

// export const getProjectsByService = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid service ID",
//       });
//     }

//     const projects = await Project.find({ service: id })
//       .populate("service", "name photo")
//       .lean();

//     return res.status(200).json({
//       success: true,
//       count: projects.length,
//       projects,
//     });
//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       success: false,
//       message: "Unable to fetch projects",
//     });
//   }
// };

// export const getProjectsByService = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid service ID",
//       });
//     }

//     const projects = await Project.find({
//       service: id,
//     })
//       .populate("service", "title photo")
//       .lean();

//     return res.status(200).json({
//       success: true,
//       projects,
//     });
//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


export const getProjectsByService = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Service ID:", id);

    const projects = await Project.find({ service: id }).populate(
      "service",
      "name photo"
    );

    console.log(
      projects.map((p) => ({
        title: p.title,
        service: p.service?.name,
        serviceId: p.service?._id,
      }))
    );

    return res.json({
      success: true,
      projects,
    });
  } catch (error) {
    console.log(error);
  }
};
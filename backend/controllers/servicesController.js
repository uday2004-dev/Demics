

import { Service } from "../models/servicesSchema.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";
import { Project } from "../models/projectSchema.js";

// Create Service
export const createService = async (req, res) => {
  try {
    const { name,description } = req.body;

    if (!name ||!description|| !req.file) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }
    console.log(req.body);
    console.log(req.file);

    const existingService = await Service.findOne({ name });

    if (existingService) {
      return res.status(400).json({
        success: false,
        message: "Service already exists",
      });
    }

    const result = await uploadOnCloudinary(
      req.file.buffer,
      "services"
    );

    const newService = await Service.create({
      name,
      description,
      photo: result.secure_url,
    });

   

  return res.status(201).json({
    success: true,
    message: "Service created successfully",
    service: newService,
  });
} catch (error) {
  console.log(error);

  return res.status(500).json({
    success: false,
    message: "Service creation failed",
  });
}
};

// Get All Services
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();

    return res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

// Get Service By Id
export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    return res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};


export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // Pehle related projects delete karo
    await Project.deleteMany({
      service: id,
    });

    // Fir service delete karo
    await Service.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Service and related projects deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete service",
    });
  }
};


// export const editServices = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body;

    
//     if (updateData.name) {
//       updateData.slug = updateData.name
//         .toLowerCase()
//         .trim()
//         .replace(/ /g, "-")
//         .replace(/[^\w-]+/g, "");
//     }

//     const updatedService = await Service.findByIdAndUpdate(
//       id,
//       updateData,
//       { new: true, runValidators: true }
//     );

//     if (!updatedService) {
//       return res.status(404).json({
//         success: false,
//         message: "Service not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Service updated successfully",
//       data: updatedService,
//     });

//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update service",
//     });
//   }
// };

// export const editServices = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, description } = req.body;

//     console.log("ID:", id);
//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);

//     const service = await Service.findById(id);

//     if (!service) {
//       return res.status(404).json({
//         success: false,
//         message: "Service not found",
//       });
//     }

//     // Update name
//     if (name !== undefined) {
//       service.name = name;

//       service.slug = name
//         .toLowerCase()
//         .trim()
//         .replace(/\s+/g, "-")
//         .replace(/[^\w-]+/g, "");
//     }

//     // Update description
//     if (description !== undefined) {
//       service.description = description;
//     }

//     // Update image only if new image is selected
//     if (req.file) {
//       const result = await uploadOnCloudinary(
//         req.file.buffer,
//         "services"
//       );

//       console.log("Cloudinary result:", result);

//       if (!result?.secure_url) {
//         return res.status(500).json({
//           success: false,
//           message: "Image upload failed",
//         });
//       }

//       service.photo = result.secure_url;
//     }

//     const updatedService = await service.save();

//     return res.status(200).json({
//       success: true,
//       message: "Service updated successfully",
//       service: updatedService,
//     });

//   } catch (error) {
//     console.log("UPDATE SERVICE ERROR:", error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const editServices = async (req, res) => {
  try {
    console.log("========== UPDATE SERVICE ==========");

    console.log("ID:", req.params.id);
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { id } = req.params;
    const { name, description } = req.body;

    const service = await Service.findById(id);

    console.log("SERVICE:", service);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    if (name !== undefined) {
      service.name = name;

      service.slug = name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
    }

    if (description !== undefined) {
      service.description = description;
    }

    if (req.file) {
      console.log("Uploading new image...");

      const result = await uploadOnCloudinary(
        req.file.buffer,
        "services"
      );

      console.log("CLOUDINARY RESULT:", result);

      service.photo = result.secure_url;
    }

    const updatedService = await service.save();

    console.log("UPDATED SERVICE:", updatedService);

    return res.status(200).json({
      success: true,
      message: "Service updated successfully",
      service: updatedService,
    });

  } catch (error) {
    console.log("🔥 UPDATE SERVICE ERROR 🔥");
    console.log(error);
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getServiceDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const projects = await Project.find({ service: id });

    return res.status(200).json({
      success: true,
      service,
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
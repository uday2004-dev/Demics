

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


export const editServices = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // 🔥 if name updated → regenerate slug
    if (updateData.name) {
      updateData.slug = updateData.name
        .toLowerCase()
        .trim()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }

    const updatedService = await Service.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: updatedService,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update service",
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
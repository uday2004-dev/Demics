import Team from "../models/team.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";

// Create Team Member
export const createTeam = async (req, res) => {
  try {
    console.log("BODY =>", req.body);
    console.log("FILE =>", req.file);

    const { name, designation, profileLink } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    if (
      [name, designation, profileLink].some(
        (field) => !field?.trim()
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Cloudinary Upload
    const uploadedImage = await uploadOnCloudinary(
      req.file.buffer,
      "team"
    );

    if (!uploadedImage) {
      return res.status(400).json({
        success: false,
        message: "Image upload failed",
      });
    }

    const team = await Team.create({
      name,
      designation,
      profileLink,
      photo: uploadedImage.secure_url,
    });

    return res.status(201).json({
      success: true,
      message: "Team member created successfully",
      team,
    });
  } catch (error) {
    console.error("CREATE TEAM ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: "Error while creating team member",
      error: error.message,
    });
  }
};
// Get All Team Members
export const getTeam = async (req, res) => {
  try {
    const teams = await Team.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: teams.length,
      teams,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch team members",
      error: error.message,
    });
  }
};

// Get Single Team Member
export const getSingleTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    return res.status(200).json({
      success: true,
      team,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch team member",
      error: error.message,
    });
  }
};

// Delete Team Member
export const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    await Team.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Team member deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to delete team member",
      error: error.message,
    });
  }
};
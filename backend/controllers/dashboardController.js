import { Inquiry } from "../models/dashboard.js";

// Create Inquiry
export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Required fields
    if (
      // !formType?.trim() ||
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim()||
      !phone?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // Form type validation
    // if (
    //   formType !== "contact" &&
    //   formType !== "workingTogether"
    // ) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid form type",
    //   });
    // }

    // Contact form requires phone
    // if (formType === "contact" && !phone?.trim()) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Phone number is required",
    //   });
    // }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    const inquiry = await Inquiry.create({
      // formType,
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      message: message.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      inquiry,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit inquiry",
      error: error.message,
    });
  }
};

// Get All Inquiries
export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch inquiries",
      error: error.message,
    });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const totalInquiries = await Inquiry.countDocuments();

    const convertedInquiries =
      await Inquiry.countDocuments({
        status: "converted",
      });

    const conversion =
      totalInquiries > 0
        ? Math.round(
            (convertedInquiries / totalInquiries) * 100
          )
        : 0;

    return res.status(200).json({
      success: true,
      totalVisits: 0,
      totalInquiries,
      conversion,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Inquiry
export const getSingleInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch inquiry",
      error: error.message,
    });
  }
};

// Mark Inquiry as Converted
export const convertInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    inquiry.status = "converted";

    await inquiry.save();

    return res.status(200).json({
      success: true,
      message: "Inquiry converted successfully",
      inquiry,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to convert inquiry",
      error: error.message,
    });
  }
};

// Delete Inquiry
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    await Inquiry.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Inquiry deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete inquiry",
      error: error.message,
    });
  }
};
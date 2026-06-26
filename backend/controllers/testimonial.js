import express from "express"
import { Testimonial } from "../models/testimonial.js"
import mongoose from "mongoose"



export const createTestimonial = async (req, res) => {

    try {
          const { testimonial, review, name, position } = req.body
    if (!testimonial || !review || !name || !position) {
        return res.status(400).json({
            success: false,
            message: "All field are required"
        })
    }
    const newTestimonial = await Testimonial.create({
        testimonial,
        review,
        name,
        position
    })
    return res.status(200).json({
        success: true,
        message: "Testimonial is created"
    })
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            success:false,
            message:"Not created"
        })
        
    }
  
}
export const getTestimonial = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      testimonials,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getTestimonialById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid testimonial ID",
      });
    }

    const testimonial = await Testimonial.findById(id).lean();

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    return res.status(200).json({
      success: true,
      testimonial,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch testimonial",
    });
  }
};
import api from "./axios";

export const createTestimonial = (data) => {
  return api.post("/testimonial/createTestimonial", data);
};

export const getTestimonial = () => {
  return api.get("/testimonial/allTestimonial");
};
import api from "./axios";

export const getBlogs = () => {
  return api.get("/blog/getAllBlogs");
};

export const getBlogById = (id) => {
  return api.get(`/blog/${id}`);
};

export const createBlog = (formData) => {
  return api.post("/blog/create", formData);
};

export const updateBlog = (id, formData) => {
  return api.patch(`/blog/${id}`, formData);
};

export const deleteBlog = (id) => {
  return api.delete(`/blog/${id}`);
};
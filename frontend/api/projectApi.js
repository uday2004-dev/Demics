import api from "./axios";

export const getProjects = () => {
  return api.get("/projects");
};

export const createProject = (formData) => {
  return api.post("/projects/create", formData);
};

export const updateProject = (id, formData) => {
  return api.put(`/projects/${id}`, formData);
};

export const deleteProject = (id) => {
  return api.delete(`/projects/${id}`);
};
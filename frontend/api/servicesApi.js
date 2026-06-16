import api from "./axios";

export const getServices = () => {
  return api.get("/services");
};

export const createService = (data) => {
  return api.post("/services/create", data);
};

export const updateService = (id, data) => {
  return api.put(`/services/${id}`, data);
};

export const deleteService = (id) => {
  return api.delete(`/services/${id}`);
};
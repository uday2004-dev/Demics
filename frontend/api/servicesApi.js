import api from "./axios";

export const getServices = () => {
  return api.get("/services/getAllServices");
};

export const createService = (data) => {
  return api.post("/services/create-service", data);
};

export const updateService = (id, data) => {
  return api.patch(`/services/${id}`, data);
};

export const deleteService = (id) => {
  return api.delete(`/services/${id}`);
};
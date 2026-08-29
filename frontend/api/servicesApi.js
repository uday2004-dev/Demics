

// import api from "./axios";

// export const getServices = () => {
//   return api.get("/api/services/getAllServices");
// };

// export const createService = (data) => {
//   return api.post("/api/services/create-service", data);
// };

// export const updateService = (id, data) => {
//   return api.patch(`/api/services/${id}`, data);
// };

// export const deleteService = (id) => {
//   return api.delete(`/api/services/${id}`);
// };

// import api from "./api";

// export const getServices = () => {
//   return api.get("/api/services");
// };

// export const getService = (id) => {
//   return api.get(`/api/services/${id}`);
// };

// export const updateService = (id, data) => {
//   return api.patch(`/api/services/${id}`, data);
// };

// export const deleteService = (id) => {
//   return api.delete(`/api/services/${id}`);
// };

import api from "./axios";

// CREATE SERVICE
export const createService = (data) => {
  return api.post("/api/services/create-service", data);
};

// GET ALL SERVICES
export const getServices = () => {
  return api.get("/api/services/getAllServices");
};

// GET SINGLE SERVICE
export const getService = (id) => {
  return api.get(`/api/services/${id}`);
};

// UPDATE SERVICE
export const updateService = (id, data) => {
  return api.patch(`/api/services/${id}`, data);
};

// DELETE SERVICE
export const deleteService = (id) => {
  return api.delete(`/api/services/${id}`);
};
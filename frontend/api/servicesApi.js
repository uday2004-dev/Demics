// import api from "./axios";

// export const getServices = () => {
//   return api.get("/services/getAllServices");
// };

// export const createService = (data) => {
//   return api.post("/services/create-service", data);
// };

// export const updateService = (id, data) => {
//   return api.patch(`/services/${id}`, data);
// };

// export const deleteService = (id) => {
//   return api.delete(`/services/${id}`);
// };

import api from "./axios";

export const getServices = () => {
  return api.get("/api/services/getAllServices");
};

export const createService = (data) => {
  return api.post("/api/services/create-service", data);
};

export const updateService = (id, data) => {
  return api.patch(`/api/services/${id}`, data);
};

export const deleteService = (id) => {
  return api.delete(`/api/services/${id}`);
};
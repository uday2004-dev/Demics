// import api from "./axios";

// // Dashboard Stats
// export const getDashboardStats = () => {
//   return api.get("/inquery/stats");
// };

// // Get All Inquiries
// export const getInquiries = () => {
//   return api.get("/inquery");
// };

// // Get Single Inquiry
// export const getSingleInquiry = (id) => {
//   return api.get(`/inquery/${id}`);
// };

// // Convert Inquiry
// export const convertInquiry = (id) => {
//   return api.put(`/inquery/convert/${id}`);
// };

// // Delete Inquiry
// export const deleteInquiry = (id) => {
//   return api.delete(`/inquery/${id}`);
// };

// // Create Inquiry (Client Website)
// export const createInquiry = (data) => {
//   return api.post("/inquery/create", data);
// };


import api from "./axios";

// Dashboard Stats
export const getDashboardStats = () => {
  return api.get("/api/inquery/stats");
};

// Get All Inquiries
export const getInquiries = () => {
  return api.get("/api/inquery");
};

// Get Single Inquiry
export const getSingleInquiry = (id) => {
  return api.get(`/api/inquery/${id}`);
};

// Convert Inquiry
export const convertInquiry = (id) => {
  return api.put(`/api/inquery/convert/${id}`);
};

// Delete Inquiry
export const deleteInquiry = (id) => {
  return api.delete(`/api/inquery/${id}`);
};

// Create Inquiry (Client Website)
export const createInquiry = (data) => {
  return api.post("/api/inquery/create", data);
};
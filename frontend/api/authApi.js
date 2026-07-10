// import axios from "axios";
// import api from "./axios";

// export const loginAdmin=(data)=>{
//     return api.post("/api/admin/adminLogin",data)

// }


// export const logoutAdmin = () => {
//   return api.post("/api/admin/logout");
// };  

import api from "./axios";

export const loginAdmin = (data) => {
  return api.post("/api/admin/adminLogin", data);
};

export const logoutAdmin = () => {
  return api.post("/api/admin/adminLogout");
};
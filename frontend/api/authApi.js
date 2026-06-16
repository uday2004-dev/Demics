import axios from "axios";

export const loginAdmin=(data)=>{
    return api.post("/admin/adminLogin",data)

}


export const logoutAdmin = () => {
  return api.post("/admin/logout");
};  
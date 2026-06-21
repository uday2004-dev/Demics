import api from "./axios";

export const createTeam=(data)=>{
    return api.post("/team/createTeam",data)
}

export const getTeam=(data)=>{
    return api.get("/team/")
}
import axios from "axios"

const baseURL="http://localhost:8080/student";

export const CreateStudDetails=(studDetails)=>axios.post(baseURL+"/insertProcess",studDetails)

export const getStudDetailsById=(studId)=>axios.get(baseURL+"/select/"+studId);

export const UpdateStudDetailsById=(studId,studDetails)=>axios.put(baseURL+"/update/"+studId,studDetails)

export const DeleteStudDetailsById=(studId)=>axios.delete(baseURL+"/delete/"+studId);
import axios from "axios";


const DEPARTMENT_BASE_URL = "http://localhost:8080/api/departments"

export const getAllDepartments = () => axios.get(DEPARTMENT_BASE_URL);
export const createDepartmnet = (department) => axios.post(DEPARTMENT_BASE_URL, department)
export const getDepartmentByid = (departmentid) => axios.get(DEPARTMENT_BASE_URL + '/' + departmentid);

export const updateDepartment = (departmentid, department) => axios.put(DEPARTMENT_BASE_URL + '/' + departmentid, department);

export const deleteDepartmentAxios = (departmentid) => axios.delete(DEPARTMENT_BASE_URL + '/' + departmentid);
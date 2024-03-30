import axios from "axios";
import { getToken } from "./AuthService";


const BASE_API_URL = 'http://localhost:8080/api/todos';




axios.interceptors.request.use(function (config) {

    config.headers['Authorization'] = getToken();
    return config;


}, function (error) { return Promise.reject(error); });

export const getAllTodos = () => axios.get(BASE_API_URL);
export const postTodo = (todo) => axios.post(BASE_API_URL, todo);

export const getTodo = (id) => axios.get(BASE_API_URL + '/' + id);

export const update = (id, todo) => axios.put(BASE_API_URL + '/' + id, todo);


export const deleteTodo = (id) => axios.delete(BASE_API_URL + '/' + id);

export const incompleteTodo = (id) => axios.patch(BASE_API_URL + '/' + id + '/incomplete');

export const completeTodo = (id) => axios.patch(BASE_API_URL + '/' + id + '/complete');



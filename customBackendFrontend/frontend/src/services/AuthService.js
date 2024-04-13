import axios from "axios";


const AUTH_BASE_URL = "http://localhost:8080/auth/"


export const registerApi = (register) => axios.post(AUTH_BASE_URL + 'register', register);

export const loginApi = (name, password) => axios.post(AUTH_BASE_URL + 'login', { name, password });


export const storeToken = (token) => localStorage.setItem("token", token);


export const getToken = () => localStorage.getItem("token");

export const SavedLoggedInUSer = (username, role) => {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", role);
}


export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    if (username == null) return false;
    else return true;
}


export const getUsername = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username;
}

export const logOut = () => {


    localStorage.clear();
    sessionStorage.clear();

}


export const isAdmin = () => {


    let role = sessionStorage.getItem("role");

    if (role != null && role == "ROLE_ADMIN") return true;
    else return false;



}
import axios from "axios";

const AUTH_APi_BASE_URL = "http://localhost:8080/api/auth"

export const registerAPICall = (register) => axios.post(AUTH_APi_BASE_URL + '/register', register);

export const loginAPIcall = (usernameOrEmail, password) => axios.post(AUTH_APi_BASE_URL + '/login', { usernameOrEmail, password });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const savedLogedinuser = (username) => { sessionStorage.setItem("authenticatedUser", username); }


export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");

    if (username == null) return false;
    else return true;
}


export const getLoggedUser = () => {
    const username = sessionStorage.getItem("authenticatedUser");

    return username;

}

export const logout = () => {

    localStorage.clear();
    sessionStorage.clear();


}
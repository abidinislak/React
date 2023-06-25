import React, {useState, useEffect} from 'react'

export default function useAuth() {
    const [token,setToken] = useState(localStorage.getItem("token"));

    const saveToken = (token) =>{
        localStorage.setItem("token",token);
        setToken(token);
    }

    useEffect(()=> {
        const updateToken = () => {
            setToken(localStorage.getItem("token"));
        }

        window.addEventListener("storage", updateToken);

        return ()=> {
            window.removeEventListener("storage",updateToken)
        }
    });

  return {token, saveToken};
}

import React from 'react'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const {saveToken} = useAuth();

    function login(){
        saveToken("asdasd");
        navigate("/");
    }

  return (
    <div><button onClick={login}>Giriş Yap</button></div>
  )
}

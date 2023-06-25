import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()
     function girisYap(){
        navigate("/")
     }
  return (
    <>
    <h1>Login Page</h1>
    <input type='text'></input>
    <button className='btn btn-light-success' onClick={girisYap}>Login</button>
    <button className='btn btn-light-danger'>Temizle</button>
    </>
  )
}

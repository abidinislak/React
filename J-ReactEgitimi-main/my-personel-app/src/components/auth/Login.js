import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

export default function Login() {
  const navigate = useNavigate();
  const saveToken = useAuth().saveToken;

  const [inputs, setInputs] = useState({});
  const eyeRef = useRef();
  const passwordRef = useRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(p => ({ ...p, [name]: value }))

    if (!e.target.validity.valid) {
      e.target.classList.add("is-invalid");
      e.target.classList.remove("is-valid");
      return;
    } else {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    }
  }

  function login(e) {
    e.preventDefault();
    //console.log(inputs); return;
    if (inputs["email"] === "tanersaydam@gmail.com" && inputs["password"] === "1234") {
      saveToken("Token");
      navigate("/");
    } else {
      alert("Kullanıcı adı ya da şifreniz yanlış!")
    }
  }

  function showOrHidePassword(){
    // console.log(e.target.className === "fa fa-eye")
    if(eyeRef.current.className !== "fa fa-eye"){
      eyeRef.current.className="fa fa-eye"
      passwordRef.current.type= "password"
      
    }else{
      eyeRef.current.className="fa fa-eye-slash"
      passwordRef.current.type= "text"
    }    
  }

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <div className='card-header'>
              <h1>Login Page</h1>
            </div>            
            <div id="card" className='card-body'>
              <form onSubmit={login}>
                <div className='form-group'>
                  Email
                  <input type="email" required
                    name="email" onChange={handleChange} className='form-control' />
                  <div className='invalid-feedback'>
                    Geçerli bir mail adresini girin!
                  </div>
                </div>
                <div className='form-group mt-2'>
                  Password
                  <div className="input-group flex-nowrap">
                    <input 
                      type="password" 
                      className="form-control" 
                      required 
                      ref={passwordRef}
                      minLength={3}
                      name="password" 
                      onChange={handleChange} />                      
                    <span onClick={showOrHidePassword} style={{cursor:"pointer"}} className="input-group-text" id="addon-wrapping">
                      <i ref={eyeRef} className='fa fa-eye'></i>                      
                    </span>
                  </div>                  
                  
                </div>
                <div className='form-group mt-2'>
                  <button className='btn btn-success w-100'>
                    Giriş Yap
                    </button>  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

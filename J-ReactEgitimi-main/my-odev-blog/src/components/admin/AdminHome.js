import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    checkAuthorize();

  function checkAuthorize(){
    let token = localStorage.getItem("accessToken");

    if(token === null){
      navigate("/login");
    }
  }

  return (
    <div>
      <button onClick={()=> setCount(c=> c+1)}>+</button>
    </div>
  )
}

export default AdminHome;

import React from 'react'
import {useNavigate, Link, Outlet} from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem("token");  
    navigate("/login") ;
  }
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/add-user">Kullanıcı Ekle</Link>
          <Link to="/report">Raporlar</Link>
          <button onClick={logout}>Çıkış Yap</button>
        </li>
      </ul>
    </nav>

    <Outlet/>
    </>
  )
}

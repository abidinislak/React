import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import TanerLink from '../../TanerLink';

const Layout = () => {
  return (
    <>
        <nav>
            <h1>Logo</h1>
            <ul>
                <li>
                    <Link to="/">Ana Sayfa</Link>
                </li>
                <li>
                    <Link to="/about">Hakkımda</Link>
                </li>
                <li>
                    <Link to="/contact">İletişim</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout;

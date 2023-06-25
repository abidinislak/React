import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <ul>
        <li>
            <Link to="/">Ana Sayfa</Link>
        </li>
        <li>
            <Link to="/about">Hakkımda</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
    </ul>
    <Outlet/>
    </>
  )
}

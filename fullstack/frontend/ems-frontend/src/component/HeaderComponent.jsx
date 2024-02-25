import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="www.google.com.tr">Employee Management System</a>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">

                            <NavLink className='nav-link' to='/employees' >Employess</NavLink>


                        </li>
                        <li className="nav-item ">
                            <NavLink className='nav-link' to='/departments' >Departments</NavLink>
         

                        </li>

                    </ul>
                </div>



            </nav>

        </>
    )
}

export default HeaderComponent

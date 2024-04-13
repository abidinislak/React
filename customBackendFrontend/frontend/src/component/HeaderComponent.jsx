import React from 'react'
import { getUsername, isAdmin, isUserLoggedIn, logOut } from '../services/AuthService'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const HeaderComponent = () => {




    const isAuth = isUserLoggedIn();


    const isAdmn = isAdmin();

    const navigator = useNavigate();

    function handleLogout() {
        logOut();
        // navigator('/login')
    }





    console.log("************************* Header Strarrting *************************")
    console.log(isAuth);
    console.log(getUsername());
    console.log(isAdmn + " is admin ?????");






    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">Ana SAyfa</a>

                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCenteredExample"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">

                            {
                                isAuth && isAdmn &&



                                <li className="nav-item">
                                    <NavLink to="/admin" className="nav-link">Admin panel</NavLink>

                                </li>
                            }

                            {isAuth && <li className='nav-item' >

                                <NavLink to="/user" className="nav-link"  >USer Page</NavLink>


                            </li>


                            }

                        </ul>



                    </div>
                    <ul className="nav navbar-nav navbar-right">

                        {


                            !isAuth &&
                            <li className='nav-item ml-auto' >

                                <NavLink className="nav-link" to="/register"  >  Register</NavLink>

                            </li>

                        }


                        {

                            !isAuth &&
                            <li className='nav-item ml-auto' >


                                <NavLink className="nav-link" to="/login"   > Login</NavLink>

                            </li>

                        }



                        {

                            isAuth && <li className='nav-item ml-auto' >
                                <NavLink className="nav-link" onClick={handleLogout}    >   Log out </NavLink></li>

                        }



                    </ul>
                </div>
            </nav>




        </>
    )
}

export default HeaderComponent

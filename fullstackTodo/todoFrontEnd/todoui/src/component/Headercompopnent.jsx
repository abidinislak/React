import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'

const Headercompopnent = () => {


    const isAuth = isUserLoggedIn();

    const navigator = useNavigate();

    function handleLogout() {
        logout();
        // navigator('/login')
    }


    console.log(isAuth);
    console.log("test ankara");

    return (
        <>

            <header>
                <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                    <div >
                        <a className="navbar-brand" href="http://localhost:3000">Ana SAyfa</a>
                    </div>
                    <div className='collapse navbar-collapse'>

                        <ul className='navbar-nav' >

                            {
                                isAuth &&
                                <li className='nav-item'>
                                    <NavLink to="/todos" className="nav-link">Todos</NavLink>
                                </li>
                            }

                        </ul>

                    </div>


                    <ul className='navbar-nav'>


                        {


                            !isAuth && <li className='nav-item'>
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </li>

                        }

                        {


                            !isAuth &&

                            <li className='nav-item'>
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>



                        }

                        {

                            isAuth && <li className='nav-item'>
                                <NavLink to="/login" onClick={handleLogout} className="nav-link">Logout</NavLink>
                            </li>

                        }


                    </ul>




                </nav>



            </header>


        </>
    )
}

export default Headercompopnent

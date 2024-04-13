import React, { useState } from 'react'
import { registerApi } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {




    const [username, setUsernmae] = useState("");
    const [password, setPassword] = useState("");


    const navigator = useNavigate();

    const handleRegister = (e) => {


        console.log(username + ", " + password);
        let register = {
            "name": username, "password": password, "role": 1



        }

        registerApi(register).then((res) => {


            console.log(res.data);
            navigator("/login");

        }).catch((err) => {


            console.error(err);
        });





    }

    return (
        <>

            <div className="container">


                <div className='main' >
                    <h1>spring boot & React Appll</h1>
                    <h3>Enter Profile</h3>

                    <div className="form-group">

                        <label >
                            Username:
                        </label>

                        <input type="text"
                            id="first"
                            name="first"
                            onChange={(e) => setUsernmae(e.target.value)}
                            value={username}
                            placeholder="Enter your Username" required />
                    </div>

                    <div className="form-group">
                        <label >
                            Password:
                        </label>
                        <input type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}


                            value={password}
                            placeholder="Enter your Password" required />
                    </div>
                    <button type="submit"
                        onClick={(e) => handleRegister(e)}>
                        Submit
                    </button>

                </div>
            </div>

        </>
    )
}






export default RegisterComponent
import React, { useState } from 'react'
import { loginAPIcall, savedLogedinuser, storeToken } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {


    const [username, setUsername] = useState('')
    const [password, setPaaword] = useState('')

    const navigator = useNavigate();

    async function handleLogin(e) {


        e.preventDefault();

        const login = { username, password }
        console.log(login)


        await loginAPIcall(username, password).then((response) => {
            console.log(response);

            const token = 'Basic ' + window.btoa(username + ":" + password);

            savedLogedinuser(username);
            storeToken(token);
            navigator("/todos");
            window.location.reload(false);
        }).catch((error) => console.error(error));


    }


    return (
        <div className='container'>

            <br /><br />
            <div className='row' >


                <div className="col-md-6 offset-md-3 " >

                    <div className="card">


                        <div className="card-header">

                            <h2 className='text-center'>LOGIN Form</h2>

                        </div>

                        <div className="card-body">

                            <form >

                                <div className="row mb-3">

                                    <label className='col-md-3 control-label'>userName</label>

                                    <div className="col-md-9">

                                        <input type="text" name='username' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>



                                <div className="row mb-3">

                                    <label className='col-md-3 control-label'>password</label>

                                    <div className="col-md-9">

                                        <input type="password" name='password' className='form-control' value={password} onChange={(e) => setPaaword(e.target.value)} />
                                    </div>
                                </div>


                                <div className="form-group mb-3 text-center">


                                    <button className='btn-primary btn' onClick={(e) => handleLogin(e)} > login</button>
                                </div>

                            </form>




                        </div>
                    </div>


                </div>
            </div>



        </div>


    )
}

export default LoginComponent

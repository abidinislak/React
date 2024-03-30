import React, { useState } from 'react'
import { registerAPICall } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const RegisterComponent = () => {


    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate();


    function handleRegistarionform(e) {

        e.preventDefault();


        const register = { name, username, email, password };


        registerAPICall(register).then((response) => {
            debugger;
            console.log(response);
        }).catch((error) => console.error(error));

    }

    return (
        <div className='container'>

            <br /><br />
            <div className='row' >


                <div className="col-md-6 offset-md-3 " >

                    <div className="card">


                        <div className="card-header">

                            <h2 className='text-center'>User Registration</h2>

                        </div>

                        <div className="card-body">

                            <form >

                                <div className="row mb-3">

                                    <label className='col-md-3 control-label'>Name</label>

                                    <div className="col-md-9">

                                        <input type="text" name='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row mb-3">

                                    <label className='col-md-3 control-label'>user name</label>

                                    <div className="col-md-9">

                                        <input type="text" name='username' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>



                                <div className="row mb-3">

                                    <label className='col-md-3 control-label'>email</label>

                                    <div className="col-md-9">

                                        <input type="text" name='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>


                                <div className="row mb-3">

                                    <label className='col-md-3 control-label'>password</label>

                                    <div className="col-md-9">

                                        <input type="password" name='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>


                                <div className="form-group mb-3 text-center">


                                    <button className='btn-primary btn' onClick={(e) => handleRegistarionform(e)} > save</button>
                                </div>

                            </form>




                        </div>
                    </div>


                </div>
            </div>



        </div>
    )
}

export default RegisterComponent

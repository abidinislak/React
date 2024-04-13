import React, { useState } from 'react'
import { SavedLoggedInUSer, loginApi, storeToken } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
const LoginCommponent = () => {

    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const navigator = useNavigate();

    async function handleLogin(e) {

        e.preventDefault();
        console.log(name);
        console.log(password);




        await loginApi(name, password).then((response) => {

            debugger;
            console.log(response.data);

            const token = 'Bearer ' + response.data.accessToken;
            const role = response.data.role;
            SavedLoggedInUSer(name, role);
            storeToken(token);


            navigator('/home');



        }).catch((err) => {

            console.log(err);

        });





    }


    return (
        <>



            <div className='container' >


                <div className="form-group">
                    <label >username</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setUsername(e.target.value)} id="username" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary text-center" onClick={(e) => handleLogin(e)} >LOGIN</button>

            </div>



        </>
    )
}

export default LoginCommponent

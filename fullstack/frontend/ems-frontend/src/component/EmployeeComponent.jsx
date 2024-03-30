
import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../service/EmployeService';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllDepartments } from '../service/DepatmentService';
const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [departmentid, serDepartmentid] = useState('');

    const [deparments, setDepartmenst] = useState([]);





    const { id } = useParams();


    const [errors, setErrors] = useState({

        firstName: '',
        lastName: '',
        email: '',
        departmnet: ''
    });
    const navigator = useNavigate();



    useEffect(() => {

        getAllDepartments().then((res) => {

            setDepartmenst(res.data);

        }).catch(err => console.log(err));


    }, [])

    useEffect(() => {



        if (id) {


            getEmployee(id).then((response) => {


                debugger;
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                serDepartmentid(response.data.department_id
                );
            }).catch((error) => {


                console.error(error);
            });
        }

    }, [id])


    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validateForm()) {


            const employee = { firstName, lastName, email, department_id }
            console.log(employee)

            if (id) {

                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch((error) => {

                    console.error(error);

                });
            }

            else {

                createEmployee(employee).then((response) => {


                    console.log(response.data);
                    navigator('/employees')
                }).catch((error) => {

                    console.error(error);

                });

            }




        }



    }



    function pagetitle() {


        if (id) {

            return <h2 className='text-center' >Update Employee</h2>
        }
        else {
            return <h2 className='text-center' >Add Employee</h2>

        }
    }
    function validateForm() {

        let valid = true;
        const errorsCopy = { ...errors }



        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {

            errorsCopy.firstName = 'First name is rewuired';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'LAst name is requreid';
            valid = false;
        }

        if (email.trim()) {


            errorsCopy.email = '';

        }
        else {
            errorsCopy.email = 'ema il is reuwired';
            valid = false;

        }
        if (departmentid.trim()) {


            errorsCopy.departmnet = '';

        }
        else {
            errorsCopy.departmnetl = 'departmnet is reuwired';
            valid = false;

        }

        setErrors(errorsCopy);

        return valid;






    }
    return (
        <div className='container'>

            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {


                        pagetitle()
                    }
                    <div className='card-body' >

                        <form action="">

                            <div className='form-group mb-2'>

                                <label htmlFor="firstName" className='form-label' >First name</label>
                                <input type="text" id='firstName' name='firstName' value={firstName} className={`form-control ${errors.firstName ? 'is-invalid' : ''} `} onChange={(e) => setFirstName(e.target.value)} />
                                {errors.firstName && <div className='invalid-feedback' > {errors.firstName}</div>}

                            </div>
                            <div className='form-group mb-2'>

                                <label htmlFor="lastName" className='form-label' >Last name</label>
                                <input type="text" id='lastName' name='lastName' value={lastName} className={`form-control ${errors.lastName ? 'is-invalid' : ''} `} onChange={(e) => setLastName(e.target.value)} />
                                {errors.lastName && <div className='invalid-feedback' > {errors.lastName}</div>}


                            </div>

                            <div className='form-group mb-2'>

                                <label htmlFor="email" className='form-label' >Email</label>
                                <input type="text" id='email' name='email' value={email} className={`form-control ${errors.email ? 'is-invalid' : ''} `} onChange={(e) => setEmail(e.target.value)} />
                                {errors.email && <div className='invalid-feedback' > {errors.email}</div>}


                            </div>
                            <div className='form-group mb-2'>

                                <label htmlFor="email" className='form-label' >Select Department</label>

                                <select value={departmentid} onChange={(e) => serDepartmentid(e.target.value)} className={`form-control ${errors.departmnet ? 'is-invalid' : ''} `} >

                                    <option value="selectg departmne"> Select departmnet</option>

                                    {

                                        deparments.map(d =>

                                            <option key={d.id} value={d.id} >  {d.departmentName}</option>
                                        )

                                    }


                                </select>

                                {errors.email && <div className='invalid-feedback' > {errors.email}</div>}


                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}  >Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>)
}

export default EmployeeComponent

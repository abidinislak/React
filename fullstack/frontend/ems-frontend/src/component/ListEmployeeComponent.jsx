import React, { useEffect, useState } from 'react'
import { listEmployees, deleteEmployee } from '../service/EmployeService';

import { useNavigate } from 'react-router-dom';

export const ListEmployeeComponent = () => {


    const [employes, setEmployess] = useState([]);


    const navigator = useNavigate();

    useEffect(() => {

        getAllEmployees();
    }, [])


    function getAllEmployees() {

        listEmployees().then((reponse) => {

            debugger;
            setEmployess(reponse.data);

        }).catch(error => {
            console.error(error)
        })



    }
    function addNewemployee() {

        navigator('/add-employee')

    }


    function deleteemployee(id) {

        deleteEmployee(id).then((response) => {
            getAllEmployees();

            console.log(response.data);
        }).catch((error) => {

            console.error(error);
        });
        navigator('/employees');

    }

    function updateemployee(id) {

        navigator(`/updateemployee/${id}`)

    }

    return (
        <div className='container'>

            <h2>List Of Employess List</h2>

            <button className='btn btn-primary mb-2' onClick={addNewemployee} > Add Employee</button>
            <table className='table table-striped table-bordered'  >
                <thead>
                    <tr>
                        <th>Employee İd</th>
                        <th>Employee Firat name</th>
                        <th>Employee LAst name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        employes.map(employee =>
                            <tr key={employee.id} >
                                <td> {employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button style={{marginLeft:'30px'}}  className='btn btn-info' onClick={() => updateemployee(employee.id)} >update</button>
                                    <button className='btn btn-danger' onClick={() => deleteemployee(employee.id)} style={{ marginLeft: '10px' }} >delete</button>
                                </td>


                            </tr>

                        )


                    }
                </tbody>
            </table>

        </div>
    )
}

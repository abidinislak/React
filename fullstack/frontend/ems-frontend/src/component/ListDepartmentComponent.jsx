import React, { useEffect, useState } from 'react'


import { getAllDepartments, deleteDepartmentAxios } from '../service/DepatmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {







    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        debugger;
        listOfDepartments();
    }, [])


    listOfDepartments();

    function updateButton(id) {


        navigator(`/updateButton/${id}`);



    }

    function deleteDepartment(id) {

        debugger;

        deleteDepartmentAxios(id).then((res) => {

            console.log(res.data);
            listOfDepartments();
        }).catch(er => console.log(er));




    }
    function listOfDepartments() {
        getAllDepartments().then((response) => {
            debugger;
            console.log(response.data);
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        }) 
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Departments</h2>
            <Link to={'/addDepartment'} className='btn btn-primary' >Add Department</Link>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map(department =>
                        <tr key={department.id}>
                            <td> {department.id} </td>
                            <td> {department.departmentName} </td>
                            <td> {department.departmentDescription} </td>
                            <td><button className='btn btn-info' onClick={() => updateButton(department.id)}  >Update</button>

                                <button className='btn btn-danger' style={{ marginLeft: '10px' }} onClick={() => deleteDepartment(department.id)} >delete</button>
                            </td>

                        </tr>
                    )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListDepartmentComponent
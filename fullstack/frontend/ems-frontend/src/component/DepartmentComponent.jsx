import React, { useState, useEffect } from 'react'
import { createDepartmnet, getDepartmentByid, updateDepartment } from '../service/DepatmentService';
import { useNavigate, useParams } from 'react-router-dom';
const DepartmentComponent = () => {


    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDescription] = useState('');
    const navigator = useNavigate();
    const { id } = useParams();




    useEffect(() => {



        getDepartmentByid(id).then((response) => {

            setDepartmentName(response.data.departmentName);
            setDescription(response.data.departmentDescription);


        }).catch(error => {
            console.error(error);
        })





    }, [id]);
    function saveorUpdateDepartment(e) {



        e.preventDefault();

        const depart = { departmentName, departmentDescription };

        console.error(depart);



        if (id) {


            updateDepartment(id, depart).then((response) => {


                console.log(response.data);

            }).catch(error => { console.error(error) });


            navigator('/departments');

        }

        else {

            createDepartmnet(depart).then((response) => {


                console.log(response.data);
                navigator('/departments');

            }).catch((error) => {


                console.error(error);
            });



        }


    }





    function pagetitle() {

        if (id) {

            return <h2 className='text-center' >Update Department</h2>


        }
        else {

            return <h2 className='text-center' >Add Departmnet</h2>

        }


    }
    return (
        <div className='container' >
            <br />
            <br />
            <br />
            <br />
            <div className="row">



                <div className="card col-md-6 offset-md-3 offset-md-3">

                    {
                        pagetitle()


                    }

                    <div className="card-body">


                        <form action="">

                            <div className="form-group mb-2">


                                <label htmlFor="" className="form-label">Deaprtment Name:</label>
                                <input type="text" name='deaprtmentname' value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} className='form-control' />
                            </div>
                            <div className="form-group mb-2">

                                <label htmlFor="" className="form-label">Departmentn  Description</label>
                                <input type="text" className="form-control" name='departmentDescription' value={departmentDescription} onChange={(e) => setDescription(e.target.value)} />
                            </div>

                            <button onClick={(e) => saveorUpdateDepartment(e)} className='btn btn-success' >Submit</button>
                        </form>

                    </div>




                </div>
            </div>


        </div>
    )
}

export default DepartmentComponent

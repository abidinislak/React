import React, { useEffect, useState } from 'react'
import { getTodo, postTodo, update } from '../services/TodoServices';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const TodoComponent = () => {



    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [copmleted, setCompleted] = useState('');


    const { id } = useParams();

    const navigate = useNavigate();
    function saveupdateorTodo(e) {


        e.preventDefault();

        debugger;

        if (id) {

            update(id, { "title": title, "description": description, "process": copmleted }).then((res) => {
                console.log(res.data);
                navigate('/todos');
            })

        }
        else {
            postTodo({ "title": title, "description": description, "process": copmleted }).then((res) => {
                console.log(res.data)
                navigate('/todos')
            }).catch(err => console.error(err));


        }









    }



    useEffect(() => {



        if (id) {


            getTodo(id).then(res => {

                console.log(res.data);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setCompleted(res.data.process);

            })

        }


    }, [id]);


    function pageTitle() {


        if (id) {
            return <h2 className='text-center' >update</h2>

        }

        else {
            return <h2 className='text-center' >Add</h2>



        }


    }

    return (
        <>
            <div className="container">

                <div className="row">




                    <div className="card col-md-6 offset-md-3 offset-md-3">


                        {

                            pageTitle()
                        }




                        <div className="card-body">


                            <form >



                                <div className="form-group mb-2">



                                    <label className="form-label">todo title:</label>
                                    <input className='form-control' type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />

                                </div>

                                <div className="form-group mb-2">



                                    <label className="form-label">todo description:</label>
                                    <input type="text" name='description' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />

                                </div>


                                <div className="form-group mb-2">



                                    <label className="form-label">todo title:</label>
                                    <select value={copmleted} className='form-control' onChange={(e) => setCompleted(e.target.value)}   >
                                        <option value={'false'} >No</option>
                                        <option value={'true'} >YES</option>


                                    </select>                                </div>




                                <button className='btn btn-primary' onClick={(e) => saveupdateorTodo(e)}   > Add</button>


                            </form>


                        </div>


                    </div>




                </div>







            </div>       </>
    )
}

export default TodoComponent

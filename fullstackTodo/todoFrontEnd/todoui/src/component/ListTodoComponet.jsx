import React, { useEffect, useState } from 'react'
import { deleteTodo, getAllTodos, completeTodo, incompleteTodo } from '../services/TodoServices';
import { useNavigate } from 'react-router-dom';
const ListTodoComponet = () => {
    const navigate = useNavigate();


    const [todos, setTodos] = useState([]);


    useEffect(() => {


        getList();

    }, [])



    function getList() {


        getAllTodos().then(res => {


            setTodos(res.data);
        }).catch(error => console.error(error));


    }


    function addTodo() {


        navigate('/add-todo');


    }

    function markCopmlete(id) {




        completeTodo(id).then(res => {


            console.log(res)
            getList();
        })
            .catch(error => console.error(error));



    }
    function markinCopmlete(id) {




        incompleteTodo(id).then(res => {


            console.log(res)
            getList();
        })
            .catch(error => console.error(error));



    }

    function updateTodo(id) {


        console.error(id);



        navigate(`/update-todo/${id}`);

    }

    function removeTodo(id) {


        deleteTodo(id).then((res) => {

            getList();


        }).catch((error => console.error(error)));



    }


    function multpile(value) {



        if (value) {
            markCopmlete(value);

        }
        else {
            markinCopmlete(value)

        }
    }



    return (
        <div className='container' >


            <h2 className='text-center'>List TODOS</h2>

            <button className='btn btn-primary mb-2' onClick={addTodo} > New Todo </button>
            <div>

                <table className='table table-bordered table-striped' >

                    <thead>

                        <tr>

                            <td>Title</td>
                            <td>Description</td>
                            <td>Completed</td>
                            <td>Actions</td>
                        </tr>

                    </thead>

                    <tbody>





                        {

                            todos.map(t =>
                                <tr key={t.id}>


                                    <td>{t.title}</td>
                                    <td>{t.description}</td>
                                    <td>{t.process ? 'YES' : 'NO'}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => updateTodo(t.id)} >update</button>
                                        <button className='btn btn-danger' style={{ marginLeft: "10px" }} onClick={() => removeTodo(t.id)} >Delete</button>


                                        <button className={t.process ? 'btn btn-success' : 'btn btn-primary'}


                                            onClick={() => {

                                                debugger;
                                                if (t.process) {
                                                    markinCopmlete(t.id)
                                                } else {

                                                    markCopmlete(t.id)
                                                }
                                            }}



                                        >  {t.process ? 'undone' : 'done'}</button>



                                        {/* <button className="btn btn-success" onClick={() => markCopmlete(t.id)} >Complete</button>
                                        <button className="btn btn-primary" onClick={() => markinCopmlete(t.id)} >inComplete</button> */}
                                    </td>
                                </tr>
                            )

                        }


                    </tbody>


                </table>
            </div>

        </div>
    )
}

export default ListTodoComponet





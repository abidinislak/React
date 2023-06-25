import axios from "axios";
import { get } from "mongoose";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);

  const [updateWork, setUpdateWork] = useState({});

  const elRefs = useRef([]);

  function getAll(){
    fetch("/api/get")
    .then(res=> res.json())
    .then(data => {
      setTodos(data);
    });
  }

  useEffect(()=> {
    getAll();
  },[])


  const handleChange = (e) => {
    setWork(e.target.value);

    if (!e.target.validity.valid) {
      e.target.className = "form-control is-invalid";
      //elRefs.current["save"].setAttribute("disabled", "disabled")
    }
    else {
      e.target.className = "form-control is-valid";
      //elRefs.current["save"].removeAttribute("disabled");
      //elRefs.current["save"].addEventListener("click", save);
    }
  }

  function save(){
    let data = {
      work: work,
      isCompleted : false
    }

    axios.post("/api/add", data)
    .then(res=> {
      console.log(res.data);
      getAll();
      setWork("");
    })

  }

  async function remove(todo){
    let isConfirm = confirm("Kaydı silmek istiyor musunuz?")
    if(isConfirm){
      let result = await axios.post("/api/remove", todo);

      getAll();
    }    
  }

  function get(todo){
    setUpdateWork(todo);
    setWork(todo.work);

    elRefs.current["update-div"].removeAttribute("hidden");
    elRefs.current["add-div"].setAttribute("hidden","hidden");
  }

  function cancel(){
    setWork("");
    setUpdateWork({});

    elRefs.current["update-div"].setAttribute("hidden","hidden");
    elRefs.current["add-div"].removeAttribute("hidden");
  }

  async function update(){
    let todo = updateWork;
    todo.work = work;

    let result = await axios.post("/api/update", todo);

    getAll();
    cancel();
  }
  


  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>

      <div className="d-flex justify-content-center mt-4">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="work">Yapılacak iş</label>
            <input
              type="text"
              id="work"
              autoComplete="off"
              className="form-control"
              required
              value={work}
              onChange={handleChange}
              minLength={3}
              ref={(ref) => elRefs.current["work"] = ref} />
            <div className="invalid-feedback">
              En az 3 karakter yazmalısınız!
            </div>
          </div>
          <div 
          ref={(ref)=> elRefs.current["add-div"] = ref}
          className="form-group mt-2">
            <button              
              onClick={save}
              className="btn btn-primary w-100"
              ref={(ref) => elRefs.current["save"] = ref}>
              Kaydet
            </button>
          </div>
          <div 
            ref={(ref)=> elRefs.current["update-div"] = ref} 
            className="form-group mt-2"
            hidden>
          <button              
              onClick={update}
              className="btn btn-warning w-100">
              <i className="fa fa-edit"></i> Güncelle
            </button>
            <button              
              onClick={cancel}
              className="btn btn-danger w-100 mt-1">
              <i className="fa fa-x"></i> Vazgeç
            </button>
          </div>
          <hr />
          <div className="form-group mt-2">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Yapılacak</th>
                  <th>Durumu</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((val, index) => {
                  return (<tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.work}</td>
                    <td>{val.isCompleted}</td>
                    <td>
                      <button 
                      onClick={()=> get(val)}
                      className="btn btn-outline-warning btn-sm"
                      title="Güncelle">
                        <i className="fa fa-edit"></i>
                      </button>
                      <button
                      onClick={()=> remove(val)}
                      className="btn btn-outline-danger btn-sm mx-1"
                      title="Sil">
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

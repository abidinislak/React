import ReactDOM from 'react-dom/client';
import {useState, useRef} from 'react';
import Add from './add';
import List from './list';
import Input from './shares/Input';
import Table from './shares/Table';
import { useEffect } from 'react';

function App(){
  const [work,setWork] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateIndex,setUpdateIndex] = useState(0);
  const refs = useRef([]);
  const [orgTodos,setOrgTodos]=useState([]);

  const addRef = useRef();
  const updateRef = useRef();
  const cancelRef = useRef();
  const ulRef = useRef();

  function add(){
    setTodos((prev)=> [...prev, work]);
    setOrgTodos((prev)=> [...prev, work]);
    setWork("");
  }  

  function remove(index){
    let newTodos = todos.filter((p,i)=> {
      if(i !== index) return p; 
    });

    setTodos(newTodos);    
  }

  function get(index){
    setWork(todos[index]);
    setUpdateIndex(index);

    addRef.current.setAttribute("hidden","hidden");
    ulRef.current.setAttribute("hidden","hidden");
    updateRef.current.removeAttribute("hidden");
    cancelRef.current.removeAttribute("hidden");
  }

  function cancel(){
    addRef.current.removeAttribute("hidden");
    ulRef.current.removeAttribute("hidden");
    updateRef.current.setAttribute("hidden","hidden");
    cancelRef.current.setAttribute("hidden","hidden");
    setWork("");
  }

  function update(){
    let newTodos = todos.map((val,i)=> {
      if(i === updateIndex) return work;
      else return val;
    });

    setTodos(newTodos);
    cancel();

  }

  const [name,setName]=useState("");
 const heads = ["#","Name","LastName"]
 const data = [
  {
    id: 1,
    name: "Taner",
    lastName: "Saydam"
  }, {
    id: 2,
    name: "Taner",
    lastName: "Saydam"
  },
  {
    id: 3,
    name: "Taner",
    lastName: "Saydam"
  }, {
    id: 4,
    name: "Taner",
    lastName: "Saydam"
  }

 ]
  function handleChange(e){
    setName(e.target.value)
  }

  const [search,setSearch] = useState("");
 

  useEffect(()=> {
    if(search === ""){
      setTodos(orgTodos);
    }else{
      let newList = todos.filter(p=> p.includes(search))
      setTodos(newList);
    }
  }, [search,orgTodos]);

  return(
    <>

    {/* <Input value={name} handleChange={handleChange} style={{}}/> */}

    {/* <Table heads={heads}>
      {data.map((val,index)=> {
        return <tr>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.lastName}</td>
        </tr>
      })}
    </Table> */}

    {/* Ekleme işlemini index sayfasından add sayfasına taşıdım. Add sayfasında kullanmam gereken metot ve propertyleri props olarak gönderdim */}
    <Add work={work} setWork={setWork} addRef={addRef} add={add} update={update} cancel={cancel} updateRef={updateRef} cancelRef={cancelRef}/>
    <hr/>


    <input type="search" value={search} onChange={(e)=> setSearch(e.target.value)} />

    {/* Listeleme işelmini indexsayfasından list sayfasına taşıdım List sayfasında kullanmam gereken metot ve propertyleri props olarak gönderdim. */}
    <List ulRef={ulRef} todos={todos} get={get} remove={remove}/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />  
);


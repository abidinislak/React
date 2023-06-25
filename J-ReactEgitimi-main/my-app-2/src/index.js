import { useState } from 'react';
import ReactDOM from 'react-dom/client';

// function App(){
//   const [person,setPerson] = useState({
//     name: "",
//     lastName: "Saydam",
//     age: 0,
//   });  
 
//   function changeName(e){
//     setPerson(prev => {
//       return {...prev, name: e.target.value}
//     });
//   }

//   return (
//     <>
//     <h1>App Component</h1>
//     <h2>Merhaba {person.name} {person.lastName}</h2>
//     <input type="text" onChange={changeName} value={person.name}/>    
//     </>
//   )
// }

function App(){
  // const [email, setEmail]= useState("");
  // const [password, setPassword]= useState("");

  // function login(){
  //   let data = {
  //     e: email,
  //     p: password
  //   }

  //   console.log(data)
  // }

  const [data, setData]= useState({});

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setData(prev=> ({...prev, [name]: value}))    
  }

  function login(e){
    e.preventDefault();
    console.log(e)
    console.log(data);  
    setData({})  
  }

  return(
    <>
    <h1>Login Page</h1>
    <form onSubmit={login}>
      <div>
        Email
        <input name="email" onChange={(handleChange)} value={data['email'] || ""}/>
      </div>
      <div>
        Password
        <input name="password" onChange={handleChange} value={data['password'] || ""}/>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


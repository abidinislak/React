import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function App(){
  return <h1>App Component</h1>
}

function Home(){
  return (
    <>
    <h1>Home Page</h1>
    <p>lorem</p>
    </>
  )
}

class Person{
  constructor(age){
    this.age = age
  }
} 

class User extends Person{
  constructor(name="Taner", age=33){
    super(age)
    this.name = name
  }
}

function myFunction(){}

const myFunction = () =>{ //arrow function
  return(<h1>Deneme</h1>)
 
}





// let name = "sdasd"
// const list = {
//   name: "Taner",
//   lastName: "Saydam"
// }

// const {name,lastName} = list;


let a = 10;
if(a>10){
  //şunu yap
}else{
  //şunu yap
}

a > 10 ? "Bunu yap" : (a <5 ? "bunu yap":"bunu yap");
a > 10 ?? "şart sağlanıyorsa"


let person = {name: "Taner"};

let person2 = {...person}

let list = ["Ahmet","Ayşe"]
let list2 = [...list,"Kemal"]

let x = new User();
console.log(x.name);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/> 
//     <Home />  
//   </React.StrictMode>
// );

// reportWebVitals(console.log);

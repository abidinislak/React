import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './todo.js';

const NameContext = createContext("İsim Soyisim");

function App(){
  const name = "Taner Saydam";
  return(
    <>
    <h1>App Component</h1>
    {/* <NameContext.Provider value={name}> */}
      <Component1/>
    {/* </NameContext.Provider> */}
    </>
  )
}

function Component1(){
  return(
    <>
    <h1>Component 1</h1>
    <Component2/>
    </>
  )
}

function Component2(){
  return(
    <>
    <h1>Component 2</h1>
    <Component3/>
    </>
  )
}

function Component3(){
  return(
    <>
    <h1>Component 3</h1>
    <Component4/>
    </>
  )
}

function Component4(){
  const name = useContext(NameContext);

  return(
    <>
    <h1>Component 4</h1>
    <h1>Merhaba, {name}</h1>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <Todo/>
);
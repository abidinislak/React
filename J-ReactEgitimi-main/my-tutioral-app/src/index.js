import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import FunctionComponent from './components/FunctionComponent';
import List from './List';
import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'
import Home from './Router/Home';
import About from './Router/About';
import NotFound from './Router/NotFound';
import Layout from './Router/Layout';
import TodoApp from './Memo/TodoApp';
import UseEffectApp from './Hooks/UseEffect';
import UseRefApp from './Hooks/UseRef';

// const [count,setCount] = useState(0)
// function myFunction(count){
//   setCount(count)
// }

function App(){ 
 return(
  <>  
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>        
      </Routes>        
    </BrowserRouter>
  </>
 )
}

function Login(){
  return <h1>Login</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
   <FunctionComponent name="Taner Saydam" count={count} function={myFunction}/> 
    <List/>
    <TodoApp/>
    <UseEffectApp/>*/}
    <UseRefApp/>
  </React.StrictMode>
);


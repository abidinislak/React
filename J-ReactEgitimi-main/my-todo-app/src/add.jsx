import React from 'react'
import { createContext } from 'react';
import { useEffect } from 'react'
import { useState } from 'react'

export const themeContext = createContext("Light");

export default function Add(props) {

  //const [name, setName]=useState("");

  //setName(prev => prev + "asdasd");

  const [count,setCount] = useState(0);
  
  function getList(){
    //asdasd
  }

  useEffect(()=> {
    getList();
  },[count]);

  return (
    <>
    Work
    <input 
      value={props.work} 
      onChange={(e)=> props.setWork(e.target.value)}/>
    <button ref={props.addRef} onClick={props.add}>Ekle</button>
    <button ref={props.updateRef} onClick={props.update} hidden="hidden">Güncelle</button>
    <button ref={props.cancelRef} onClick={props.cancel} hidden="hidden">Vazgeç</button>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

export default function Todo() {
    //const [list, setList] = useState([]);
    const {data, getList} = useFetch("https://jsonplaceholder.typicode.com/todos");
    
  return (
    <>
    <h1>Todo Component</h1>
        <button onClick={getList}>Listeyi Getir</button>
        <ul>
           {data.map((val,index)=> <li key={index}>{val.title}</li> )}
        </ul>
    </>
  )
}

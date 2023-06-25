import React from 'react'
import { useContext } from 'react'
import { themeContext } from './add'

export default function List(props) {
  const theme = useContext(themeContext)
  return (
    <ul ref={props.ulRef}>
      {
        props.todos.map((val,index)=> {
          return <li key={index}>
            {val}
            <button onClick={()=> props.get(index)}>Güncelle</button>
            <button onClick={()=> props.remove(index)}>Sil</button>
          </li>
        })
      }
    </ul>
  )
}

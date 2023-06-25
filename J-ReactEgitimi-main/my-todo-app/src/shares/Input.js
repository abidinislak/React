import React from 'react'

export default function Input(props) {
  return (
    <input 
        className={props.class} 
        style={props.style} 
        required value={props.value} 
        onChange={props.handleChange}
        />
  )
}

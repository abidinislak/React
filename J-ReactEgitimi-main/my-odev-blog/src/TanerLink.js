import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TanerLink(props) {
    const navigate = useNavigate();

    
   
  return (
    <a onClick={()=> navigate(props.to)}>Ana Sayfa</a>
  )
}

import React, { useRef } from 'react'

export default function UseRefApp() {
    const h1Element = useRef();
    const h2Element = useRef();
    const h3Element = useRef();
    const h4Element = useRef();
    
    function changeColor(){   
        document.querySelector("h1");    
        h1Element.current.style.color = "red";
    }
  return (
    <>
        <h1 ref={h1Element}>Merhaba</h1>
        <h1 ref={h2Element}>Merhaba</h1>
        <h1 ref={h3Element}>Merhaba</h1>
        <h1 ref={h4Element}>Merhaba</h1>
        <button onClick={changeColor}>Rengini değiştir</button>
    </>
  )
}

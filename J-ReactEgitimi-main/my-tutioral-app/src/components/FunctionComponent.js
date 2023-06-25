import { useState } from "react";

function FunctionComponent(props){
    const title = "Function Sayfası";
    const [car,setCar] = useState({});
    
    function tetikle(){
        props.function(5)
    }

    return (
        <>
            <title>{title}</title>
            <input 
                type="text" 
                onChange={(e)=> props.function(e.target.value)}
            />
            <h1>Function Component</h1>
            <h2>Merhaba {props.name}</h2>
        </>
    )
}

export default FunctionComponent;
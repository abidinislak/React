import { useEffect, useState } from "react"

export default function UseEffectApp(){
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);

    function increment(){
        setCount(c=> c+1);
    }

    useEffect(()=> {
        setNewCount(()=> count*2);
    },[count]);

    return(
        <>
            <h1>Use Effect Hooks</h1>
            <p>Count: {count}</p>
            <p>New Count: {newCount}</p>
            <br/>
            <button onClick={increment}>Increment</button>
        </>
    )
}
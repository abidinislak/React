import { useState } from "react";
import Todo from "./Todo";

export default function TodoApp() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["Todo1", "Todo2"]);

    const increment = () => {
        setCount(c => c + 1);
    }

    console.log("TodoApp çalışıyor")
    return (
        <>
            <Todo todos={todos} />
            <div>
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </>
    )
}
import React, { useCallback } from "react";
import ToDos from "./toDos";
import { useState } from "react";

const UseCallBack = () => {
    console.log('inside main component');
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <ToDos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}

export default UseCallBack;
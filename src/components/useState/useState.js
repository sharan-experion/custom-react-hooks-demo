import { useEffect, useState } from "react";

const countInitial = () => {
    console.log('This is the initial time');
    return 5;
}

const UseState = () => {
    const [count, setCount] = useState(() =>
        countInitial()
    );

    // const [count, setCount] = useState(5);

    useEffect(() => {
        console.log();
    }, [count])


    const decrementCount = () => {
        // will decrement only once
        setCount(count - 1);
        setCount(count - 1);
    }


    const incrementCountTwice = () => {
        // will increment twice
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }


    return (
        <>
            <button onClick={decrementCount}>-</button>
            <h1>{count}</h1>
            <button onClick={incrementCountTwice}>++</button>
        </>
    )
}

export default UseState;
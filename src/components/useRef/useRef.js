import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [name, setName] = useState("");
    const renderCount = useRef(1);
    const inputRef = useRef();

    useEffect(() => {
        // console.log(renderCount);
        renderCount.current = renderCount.current + 1
    }, [name])

    const focus = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <h1>My name is {name}</h1>
            <h2>I rendered {renderCount.current} times</h2>
            <button onClick={focus}>focus on text box</button>
        </>
    )

}

export default UseRef;
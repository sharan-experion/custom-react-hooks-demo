import { useState, useMemo } from "react";

const UseMemo = () => {
    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);


    // const doubleNumber = slowFunction(number);

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number])


    const theme = {
        background: dark ? '#333' : '#fff',
        color: dark ? '#333' : '#fff',
    }
    return (<>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prev => !prev)}> Toggle theme</button>
        <div style={theme}>{doubleNumber}</div>
    </>)
}

const slowFunction = (num) => {
    console.log('Calling slow fn!');
    for (let i = 0; i < 999999991; i++) { }
    return num + 2;
}


export default UseMemo;
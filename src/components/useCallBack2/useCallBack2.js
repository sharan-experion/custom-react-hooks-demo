import { useCallback, useEffect, useState } from "react";
import List from './List';

const UseCallBack2 = () => {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        console.log('Updated theme');
    }, [dark])

    const getItems = () => {
        return [number, number + 1, number + 2];
    }

    // const getItems = useCallback(() => {
    //     return [number, number + 1, number + 2];
    // }, [number])

    const theme = {
        background: dark ? '#333' : '#fff',
        color: dark ? '#333' : '#fff',
    }



    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prev => !prev)}> Toggle theme</button>
            <List getItems={getItems} />
        </div>
    )
}

export default UseCallBack2;
import { useEffect, useState } from "react";

const UseEffect = () => {
    const [type, setType] = useState('type1');

    useEffect(() => {
        console.log('Component Mount ' + type);
    }, [])

    useEffect(() => {
        console.log('Type changed ' + type);
    }, [type])

    useEffect(() => {
        return () => {
            console.log('Component unmount');
        }
    }, [])


    return (
        <>
            <button onClick={() => setType('type1')}> Type 1</button>
            <button onClick={() => setType('type2')}> Type 2</button>
            <button onClick={() => setType('type3')}> Type 3</button>
            <br />
            <h1>current type is {type}</h1>
        </>
    )
}
export default UseEffect;
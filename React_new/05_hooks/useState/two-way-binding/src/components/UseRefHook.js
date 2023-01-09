import { useRef, useState, useEffect } from "react";

function UseRefHook(){
    const [count, setCount] = useState(60);
    
    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    },)

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }

    console.log(count, prevCount.current);

    return (
        <>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}
export default UseRefHook;
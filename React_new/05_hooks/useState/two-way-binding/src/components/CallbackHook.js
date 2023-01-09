import { useState, memo, useCallback } from "react";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
    // - Reference type
    // - React memo()

const MemoContent = ({ onIncrease }) => {
    console.log('Re-render...');
    return (
        <>
            <h2>Hello world!</h2>
            <button onClick={onIncrease}>Click me!</button>
        </>

    )
}

const Memoized = memo(MemoContent);

function CallbackHook(){
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, []);

    return (
        <>
            <Memoized onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </>
    )
}

export default CallbackHook;
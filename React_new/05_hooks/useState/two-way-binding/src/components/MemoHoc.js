import { useState, memo } from "react";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hook
// HOC
// Render props

const MemoContent = ({ count }) => {
    console.log('Re-render...');
    return (
        <h2>Hello world! {count}</h2>
    )
}

const Memoized = memo(MemoContent);

function MemoHoc(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const increase2 = () => {
        setCount2(count2 + 1);
    }

    return (
        <>
            <Memoized count={count}/>
            <h1>{count}</h1>
            <button onClick={increase}>Click me!</button>
            <h1>{count2}</h1>
            <button onClick={increase2}>Click me!</button>
        </>
    )
}

export default MemoHoc;
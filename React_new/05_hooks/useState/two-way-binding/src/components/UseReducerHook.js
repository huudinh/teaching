import { useState, useReducer } from "react";

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch



function UseReducerHook(){
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count - 1)}
            >
                Down
            </button>
            <button
                onClick={() => setCount(count + 1)}
            >
                Up
            </button>
        </>
    )
}

export default UseReducerHook;
import { useState } from "react";

const Counting = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Count: {count}</p>
            <button 
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
        </div>
    );
};

export default Counting;
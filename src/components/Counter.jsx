import React, { useState } from 'react';

function Counter() {
    const [count, SetCount] = useState(0);

    const increment = () => {
        SetCount(count + 1);
    };
    const decrement = () => {
        SetCount(count - 1);
    };

    return (
        <div>
            <p>Contar: {count}</p>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
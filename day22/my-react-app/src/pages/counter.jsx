import { useState , useEffect } from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count % 10 === 0 && count !== 0) {
            alert(`You clicked ${count} times`);
        }
    }, [count]);

    return (
        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );

}

export default Counter;
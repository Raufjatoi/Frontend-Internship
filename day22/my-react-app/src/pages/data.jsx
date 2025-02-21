import React, { useState, useEffect, useRef, useReducer, useContext, useImperativeHandle, forwardRef, createContext } from 'react';

const ThemeContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const Child = forwardRef((props, ref) => {
    const [message, setMessage] = useState('Hello from Child');

    useImperativeHandle(ref, () => ({
        showMessage: () => alert(message)
    }));

    return <p>{message}</p>;
});

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const inputRef = useRef(null);
    const childRef = useRef(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    const theme = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000', padding: '20px' }}>
            <h1>Basic React Hooks Example</h1>

            {/* useState Example */}
            <h2>Data Fetching (useState & useEffect)</h2>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {data.slice(0, 5).map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}

            {/* useReducer Example */}
            <h2>Counter (useReducer)</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

            {/* useRef Example */}
            <h2>Focus Input (useRef)</h2>
            <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>

            {/* useImperativeHandle Example */}
            <h2>Child Component Control (useImperativeHandle)</h2>
            <Child ref={childRef} />
            <button onClick={() => childRef.current.showMessage()}>Show Child Message</button>
        </div>
    );
}

export default function MainApp() {
    return (
        <ThemeContext.Provider value="light">
            <App />
        </ThemeContext.Provider>
    );
}
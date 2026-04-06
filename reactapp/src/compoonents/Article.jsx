import React, {Component} from 'react'

function Article(props) {
    const [count, setCount] = React.useState(0);

    const handleClick_increment = () => {
        setCount(count + 1);
    }

    const handleClick_decrement = () => {
        setCount(count - 1);
    }

    const handleClick_Count_Reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Article</h1>
            <h3>{count}</h3>
            <button onClick={handleClick_increment}>Increment</button>
            <br />
            <button onClick={handleClick_decrement}>Decrement</button>
            <br />
            <button onClick={handleClick_Count_Reset}>Reset</button>
            <h3>{props.title}</h3>
            <p>This is an article about React components.</p>
        </div>
    )
}


export default Article
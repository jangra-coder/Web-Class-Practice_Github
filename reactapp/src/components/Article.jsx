import React, { useEffect, useState } from 'react'
// import styled from 'styled-components';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// import tailwind css
import axios from "axios"



function Article(props) {
    const [count, setCount] = useState(0);

    const handleClick_increment = () => {
        setCount(count + 1);
    }

    const handleClick_decrement = () => {
        setCount(count - 1);
    }

    const handleClick_Count_Reset = () => {
        setCount(0);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            console.log(response.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Article</h1>
            <h3>{count}</h3>
            <Button onClick={handleClick_increment}>Increment</Button>
            <br />
            <Button onClick={handleClick_decrement}>Decrement</Button>
            <br />
            <Button onClick={handleClick_Count_Reset}>Reset</Button>
            <h3>{props.title}</h3>
            <Button yellow >Click me !</Button>
            <p>This is an article about React components.</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Tailwind Button
            </button>
        </div>
    )
}


export default Article


const Button=styled.button`
background-color: ${props=>props.yellow ? "yellow" : "red"};
color: white;
width: 100px;
height: 30px;
`
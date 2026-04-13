import React, {Component} from 'react'
// import styled from 'styled-components';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { withEmotionCache } from '@emotion/react';

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
            <Button onClick={handleClick_increment}>Increment</Button>
            <br />
            <Button onClick={handleClick_decrement}>Decrement</Button>
            <br />
            <Button onClick={handleClick_Count_Reset}>Reset</Button>
            <h3>{props.title}</h3>
            <Button yellow >Click me !</Button>
            <p>This is an article about React components.</p>
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
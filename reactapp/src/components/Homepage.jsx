import React from 'react'

function Homepage() {
    const loggedin = false;
    if (loggedin) {
        return (
            <button>Logout</button>
        )
    }else{
        return(
            <button>Login</button>
        )
    }
}

export default Homepage;

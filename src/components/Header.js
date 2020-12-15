import React from 'react';

const Header = () => {
    /* Annother way to use an inline style in React is to use variables.
    Still in the Header.js file, we are adding the following code above
    the return statement: */
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    }
    
    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Simple Todo App</h1>
            <p style={{ fontSize: "19px"}}>Please add to-dos item(s) through the input field</p>
        </header>
    )
}

export default Header;
import React from 'react';

type ButtonProps = {
    style: React.CSSProperties;
    }

const Button = (
    { style } : ButtonProps
) => {

    return (
        <button 
            style={style}
            onClick={() => alert('Button clicked!')}>
            Click Me
        </button>
    );
}

export default Button;
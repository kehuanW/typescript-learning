import React from 'react';

type ButtonProps = {
    borderRadius: Record<string, number>;
}

const Button = (
    { borderRadius } : ButtonProps
) => {

    return (
        <button 
            style={{borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`}}
            onClick={() => alert('Button clicked!')}>
            Click Me
        </button>
    );
}

export default Button;
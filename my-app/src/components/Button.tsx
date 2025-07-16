import React from 'react';

type ButtonProps = {
    handleClick: (num:number)=>void
}

const Button = (
    { handleClick } : ButtonProps
) => {

    return (
        <button 
            onClick={()=>handleClick(9)}>
            Click Me
        </button>
    );
}

export default Button;
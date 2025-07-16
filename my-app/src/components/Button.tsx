import React from 'react';

type ButtonProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Button = (
    { setCount } : ButtonProps
) => {
    
    return (
        <button onClick={()=>setCount((pre)=>pre+1)}>
            Click me!
        </button>
    );
}

export default Button;
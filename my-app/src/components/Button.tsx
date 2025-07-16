import React from 'react';

const Button = (
    {count = 0} //If there is a default value, no need to specify the type
) => {

    return (
        <button>
            Click me!
        </button>
    );
}

export default Button;
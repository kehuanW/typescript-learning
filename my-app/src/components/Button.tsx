import React from 'react';


const Button = () => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log("hello")

   return (
       <button onClick={handleClick}>
           Click me!
       </button>
   );
}

export default Button;
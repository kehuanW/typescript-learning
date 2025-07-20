import React, { useRef } from 'react';

type User = {
    name: string;
    age: string
}

const Button = () => {

    const ref = useRef<HTMLButtonElement | null>(null)

   return (
       <button ref={ref}>
           Click me!
       </button>
   );
}

export default Button;
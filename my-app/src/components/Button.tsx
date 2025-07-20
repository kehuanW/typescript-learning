import React, { useRef } from 'react';

type User = {
    name: string;
    sessionId: string;
}

type Guest = Omit<User, 'name'>; // Omit removes 'name' from User type

const Button = () => {

   return (
       <button>
        Click me!
       </button>
   );
}

export default Button;
import React, { useState } from 'react';

type User = {
    name: string;
    age: string
}

const Button = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("Click");
    const [isPrimary, setIsPrimary] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null)

    const name = user?.name;

   return (
       <button>
           Click me!
       </button>
   );
}

export default Button;
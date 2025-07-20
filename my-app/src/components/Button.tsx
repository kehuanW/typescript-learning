import React from 'react';

type ButtonProps<T> = {
  countvalue: T;
  countHistory: T[];
};


const Button = <T,>(
    { countvalue, countHistory }: ButtonProps<T>
) => {

   return (
       <button>
        Click me!
       </button>
   );
}

export default Button;
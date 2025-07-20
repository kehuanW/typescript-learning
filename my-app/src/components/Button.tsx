import React from 'react';
import { type Color } from '../lib';

type ButtonProps<T> = {
  color?: Color;
};


const Button = () => {

   return (
       <button>
        Click me!
       </button>
   );
}

export default Button;
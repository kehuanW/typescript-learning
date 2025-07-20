import React, { useRef } from 'react';

const buttonTextOptions = [
    'Click me!',
    'Submit',
    'Press here',
    'Activate',
    'Engage'
] as const;

const Button = () => {

   return (
       <button>
           {buttonTextOptions.map((text, index) => {
                return text
            })}
       </button>
   );
}

export default Button;
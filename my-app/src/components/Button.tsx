import React, { useEffect } from 'react';

// const convertToArray = <T,>(value:T): T[] => {
//     return [value]
// }

function convertToArray<T>(value: T): T[] {
    return [value];
}

convertToArray(1); // [1]
convertToArray('hello'); // ['hello']

const Button = () => {

   return (
       <button>
        Click me!
       </button>
   );
}

export default Button;
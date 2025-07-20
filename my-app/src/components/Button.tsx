import React from 'react';

// interface

interface ButtonProps {
    type: "button" | "submit" | "reset";
    color: "red" | "blue" | "green"
}

interface SuperButtonProps extends ButtonProps {
    size: "md" | "lg"
}


// type

// type ButtonProps = {
//     type: "button" | "submit" | "reset";
//     color: "red" | "blue" | "green"
// }

// type SuperButtonProps = ButtonProps & {
//     size: "md" | "lg"
// }

const Button = (
    {}:ButtonProps
) => {

    // return (
    //     <button type={type} autoFocus={autoFocus}>
    //         Click me!
    //     </button>
    // );

   return (
       <button>
           Click me!
       </button>
   );
}

export default Button;
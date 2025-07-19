import React from 'react';

// type ButtonProps = {
//     type: "submit" | "button" | "reset",
//     autoFocus: boolean
// }

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const Button = (
    {type, autoFocus, ...rest}:ButtonProps
) => {

    // return (
    //     <button type={type} autoFocus={autoFocus}>
    //         Click me!
    //     </button>
    // );

   return (
       <button type={type} autoFocus={autoFocus} {...rest}>
           Click me!
       </button>
   );
}

export default Button;
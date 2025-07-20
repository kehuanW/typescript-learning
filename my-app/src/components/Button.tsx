import React, { useEffect } from 'react';

type buttonColor = 'primary' | 'secondary' | 'danger';

const Button = () => {

    useEffect(()=>{
        const previousButtonColor = localStorage.getItem('buttonColor') as buttonColor;
    },[])

   return (
       <button>
        Click me!
       </button>
   );
}

export default Button;
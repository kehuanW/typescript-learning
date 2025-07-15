const Button = (
    { backgroundColor, fontSize, pillShape }
    : {backgroundColor: string, 
        fontSize: string, 
        pillShape: boolean,
    }
) => {

    return (
        <button 
            onClick={() => alert('Button clicked!')}>
            Click Me
        </button>
    );
}

export default Button;
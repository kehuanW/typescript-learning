
type ButtonProps = {
        backgroundColor: string, 
        fontSize: string, 
        pillShape?: boolean,
    }

const Button = (
    { backgroundColor, fontSize, pillShape }
    : ButtonProps
) => {

    return (
        <button 
            onClick={() => alert('Button clicked!')}>
            Click Me
        </button>
    );
}

export default Button;
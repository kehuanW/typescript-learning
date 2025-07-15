type Color = "red" | "blue" | "green" | "yellow" | "purple" | "orange";

type ButtonProps = {
        backgroundColor: Color, 
        textColor: Color,
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
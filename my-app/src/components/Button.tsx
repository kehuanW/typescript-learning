type Color = "red" | "blue" | "green" | "yellow" | "purple" | "orange";

type ButtonProps = {
        backgroundColor: Color, 
        textColor: Color,
        fontSize: string, 
        pillShape?: boolean,
        // padding: number[] //This is an array of numbers, without specifying the length
        padding?: [number, number, number, number] //This is a tuple with two numbers
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
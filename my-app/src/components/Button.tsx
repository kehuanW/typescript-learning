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
    { backgroundColor, fontSize, pillShape, textColor, padding }
    : ButtonProps
) => {

    return (
        <button 
            style={{
                backgroundColor: backgroundColor,
                color: textColor,
                fontSize: fontSize,
                padding: padding ? `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px` : '10px 20px',
            }}
            onClick={() => alert('Button clicked!')}>
            Click Me
        </button>
    );
}

export default Button;
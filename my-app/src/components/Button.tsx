const Button = (
    props: 
    {backgroundColor: string, 
        fontSize: string, 
        pillShape: boolean,
    }
) => {
    
    const { backgroundColor, fontSize, pillShape } = props;

    return (
        <button 
            onClick={() => alert('Button clicked!')}>
            Click Me
        </button>
    );
}

export default Button;
const Button = (props) => {
    return <button type="button" onClick={() => alert(`Hai cliccato il ${props.label}`)}>{props.label}</button>
}

export default Button
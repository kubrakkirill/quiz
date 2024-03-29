interface IError {
    text: string
}

const ErrorMessage: React.FC<IError> = ({
    text
}) =>{
 return <span className="error-field">
    {text}
 </span>
}

export default ErrorMessage
import { ElementType, ReactNode } from "react";

interface TextInputProps
extends React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>{
    errorMessage?: string;
    label?: string;
    valid?: boolean;
    inValid?: boolean;
    component?: ElementType;
}

const TextInput: React.FC<TextInputProps>  = ({
    errorMessage,
    label,
    valid,
    inValid,
    component = 'input',
    ...props
}) =>{
    const Component = component;
    return (
        <div className="form-group">
            {label && <label htmlFor={props.name}>{label}</label>}
            <div className="form-group-field">
                <Component {...props}/>
                {errorMessage && inValid && <span className="error">{errorMessage}</span>}
            </div>
        </div>
    )
}

export default TextInput
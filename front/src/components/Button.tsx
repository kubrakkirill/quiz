import React from "react";
import { ReactNode } from "react";

export interface ButtonProps{
    variant: 'primary' | 'action'
    disabled?: boolean
    onClick?: ()=>void
    children: ReactNode
}

const Button: React.FC<ButtonProps> = ({variant = 'primary',children,disabled,onClick}) => {
    if(variant === 'action'){
        return (
            <span onClick={onClick} className="button-action">
              {children}
            </span>
          );
    }
    return (
      <button onClick={onClick} className={`button-primary ${disabled ? 'disabled' : ''}`}>
        {children}
      </button>
    );
  };
  
  export default Button;
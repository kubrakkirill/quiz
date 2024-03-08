import React from "react";
import { ReactNode } from "react";

export interface ButtonProps{
    variant: 'primary' | 'action'
    disabled?: boolean
    onClick?: any
    children: ReactNode
    type?: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  disabled,
  onClick,
  type = 'button'
}) => {
    if(variant === 'action'){
        return (
            <span onClick={onClick} className="button-action">
              {children}
            </span>
          );
    }
    return (
      <button type={type} onClick={onClick} className={`button-primary ${disabled ? 'disabled' : ''}`}>
        {children}
      </button>
    );
  };
  
  export default Button;
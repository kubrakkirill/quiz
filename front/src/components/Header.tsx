import React from "react";
import { ReactNode } from "react";
import Container from "./Container";

export interface HeaderProps{
    disabled?: boolean
    children: ReactNode
}

const Header: React.FC<HeaderProps> = ({children,disabled}) => {
    return (
      <header className="header">
        <Container>
            <div className="header-nav">
                <a href="/">
                    Home
                </a>
                <div>
                    {children}
                </div>
                <a href="/">
                    Login
                </a>
            </div>
        </Container>
      </header>
    );
  };
  
  export default Header;
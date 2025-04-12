import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  ...props
}) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;

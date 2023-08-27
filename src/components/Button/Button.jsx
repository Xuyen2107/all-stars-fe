import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled,
  type,
  className,
}) => {
  let buttonStyles = "py-2 px-4 rounded";
  if (variant === "primary") {
    buttonStyles += ` bg-blue-500 text-white hover:bg-blue-600 ${className}`;
  } else if (variant === "secondary") {
    buttonStyles += ` bg-gray-500 text-white hover:bg-gray-600  ${className}`;
  } else if (variant === "danger") {
    buttonStyles += ` bg-red-500 text-white hover:bg-red-600  ${className}`;
  } else {
    buttonStyles += ` bg-gray-500 text-white hover:bg-gray-600 ${className}`;
  }

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

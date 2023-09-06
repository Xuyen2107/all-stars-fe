import React from "react";
import { Link } from "react-router-dom";
import styles from './button.module.scss'

const Button = ({
  href,
  to,
  children,
  onClick,
  variant = "primary",
  disabled,
  type,
  className,
  leftIcon = false,
  ...passProps
}) => {
  let Comp = "button"
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  let buttonStyles = "py-2 px-4 rounded";
  // if (variant === "primary") {
  //   buttonStyles += ` bg-purple-500 text-white hover:bg-purple-600  ${className}`;
  // } else if (variant === "secondary") {
  //   buttonStyles += ` bg-gray-500 text-white hover:bg-gray-600  ${className}`;
  // } else if (variant === "danger") {
  //   buttonStyles += ` bg-red-500 text-white hover:bg-red-600  ${className}`;
  // } else {
  //   buttonStyles += ` bg-gray-500 text-white hover:bg-gray-600 ${className}`;
  // }

  return (
    <Comp className={buttonStyles} {...props}>
      {leftIcon && <span className={`${styles.iconleft} bg-blue-300 me-3`}>{leftIcon}</span>}
      <span>{children}</span>
    </Comp>
  );
};

export default Button;

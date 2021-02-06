import React from "react";
import styled, { css } from "styled-components";
import { getColor } from "../utils/themeHelpers";

const ButtonBase = styled.div`
  appearance: none;
  cursor: pointer;
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 300;
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  transition-duration: 200ms;
  transition-timing-function: ease;
  transition-property: background, border-color;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: block;
      width: 100%;
    `}
`;

const Primary = styled(ButtonBase)`
  border: none;
  background: ${getColor("primary")};
  color: ${getColor("white")};

  &:hover {
    background: ${getColor("realWhite")};
    border: 0.5px solid ${getColor("primary")};
    color: ${getColor("primary")};
  }
`;

const Secondary = styled(ButtonBase)`
  background: none;
  border: 0.5px solid ${getColor("primary")};
  color: ${getColor("primary")};
  &:hover {
    background: ${getColor("primary")};
    color: ${getColor("white")};
  }
`;

const variants = {
  primary: Primary,
  secondary: Secondary,
};

const Button = ({
  className,
  fullWidth,
  onClick,
  asLink,
  href,
  variant,
  children,
}) => {
  const RenderButton = variants[variant];
  return (
    <RenderButton
      as={asLink ? "a" : "button"}
      fullWidth={fullWidth}
      className={className}
      {...(asLink ? { href } : { onClick })}
    >
      {children}
    </RenderButton>
  );
};

export default Button;

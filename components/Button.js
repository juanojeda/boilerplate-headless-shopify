import React from "react";
import styled, { css } from "styled-components";
import { getColor } from "../utils/themeHelpers";

const ButtonBase = styled.div`
  appearance: none;
  border: 0.5px solid transparent;
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
  background: ${getColor("primary")};
  color: ${getColor("white")};

  &:hover {
    background: ${getColor("realWhite")};
    border: 0.5px solid ${getColor("primary")};
    color: ${getColor("primary")};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${getColor("neutral", "light_40")};
      border-color: transparent;
      color: ${getColor("white")};
      cursor: not-allowed;

      &:hover {
        background: ${getColor("neutral", "light_40")};
        border-color: transparent;
        color: ${getColor("white")};
      }
    `};
`;

const Secondary = styled(ButtonBase)`
  background: none;
  border-color: ${getColor("primary")};
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
  disabled,
}) => {
  const RenderButton = variants[variant];
  return (
    <RenderButton
      disabled={disabled}
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

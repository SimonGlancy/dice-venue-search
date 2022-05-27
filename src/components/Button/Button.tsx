import React, {
  PropsWithChildren,
  ReactNode,
  MouseEventHandler,
  CSSProperties,
} from "react";
import { DiceTheme } from "../../theme";
import { StyledButton } from "./Button.styles";

// very simple button as the design only has one I would usually build a button with extra things
// variant -> default, outlined, text -> different styles of button
// colorVariant -> relates to a palette value
// sizeVariant -> s, m, l changes padding / fontSize

export type ButtonProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  colorVariant?: keyof DiceTheme["palette"];
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, onClick, style, colorVariant = "primary" as const } = props;

  return (
    <StyledButton colorVariant={colorVariant} onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;

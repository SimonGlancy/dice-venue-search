import { DiceTheme, styled, WithDiceTheme } from "../../theme";

export type StyledButtonProps = WithDiceTheme & {
  colorVariant: keyof DiceTheme["palette"];
};

export const StyledButton = styled.button<StyledButtonProps>(
  ({ theme, colorVariant }) => `
  background-color: ${
    theme.palette[colorVariant] || theme.button.backgroundColor
  };
  font-family: ${theme.button.fontFamily};
  color: ${theme.button.color};
  padding: ${theme.button.paddingTop}px ${theme.button.paddingRight}px ${
    theme.button.paddingBottom
  }px ${theme.button.paddingleft}px;
  letter-spacing: 5%;
  border: ${theme.button.border};
  cursor: ${theme.button.cursor};
  font-size: ${theme.button.fontSize}px;
  font-weight: ${theme.button.fontWeight};
`
);

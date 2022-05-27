import { CSSProperties } from "react";
import { styled, WithDiceTheme } from "../../theme";

export type PageColumnsContainerProps = {
  gap?: number;
  direction?: "column" | "row";
  justifyContent?: CSSProperties["justifyContent"];
} & WithDiceTheme;

export const PageColumnsContainer = styled.div<PageColumnsContainerProps>(
  ({ gap, direction, justifyContent, theme }) => `
  display: flex;
  flex-direction: ${direction || "row"};
  flex:1;
  width: 100%;

  justify-content: ${justifyContent || "space-between"};
  gap: ${gap || theme.spacing(2)}px;
  padding-bottom: ${theme.spacing(4)}px;
`
);

import { styled, WithDiceTheme } from "../../theme";

export type CellProps = WithDiceTheme & { transformValue?: number };

export const Cell = styled.div<CellProps>(
  ({ transformValue }) => `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(${transformValue}px);

`
);

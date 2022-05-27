import { styled } from "../../../../theme";

export const FloatingOnSaleIndicator = styled.div(
  ({ theme }) => `
    background-color: ${theme.palette.appSurfaceContrast};
    opacity: 0.9;
    padding: ${theme.spacing(0.5)}px;
    right: ${theme.spacing(1)}px;
    bottom: ${theme.spacing(1)}px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.textContrast};
`
);

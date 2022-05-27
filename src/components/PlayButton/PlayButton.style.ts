import { styled } from "../../theme";

export const PlayButtonContainer = styled.button(
  ({ theme }) => `
  background-color: ${theme.palette.appSurfaceContrast};
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.spacing(7.5)}px;
  height: ${theme.spacing(7.5)}px;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 1;
  }

`
);

export const FloatingContainer = styled.div(
  ({ theme }) => `
    position: absolute;
    left: 0;
    bottom: 0;

`
);

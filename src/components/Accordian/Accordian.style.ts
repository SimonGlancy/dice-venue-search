import { styled, WithDiceTheme } from '../../theme';
import { percentToHex } from '../../utils';

export const AccordianContainer = styled.div(
  ({ theme }) => `
  background-color: ${theme.palette.cardSurface};
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  
`
);

export const AccordianHeader = styled.button(
  ({ theme }) => `
  border: none;
  align-items: center;
  background-color: transparent;
  display: flex;
  flex:1;
  flexDirection: row;
  padding: ${theme.spacing(2)}px;
  font-size: ${theme.spacing(2)}px;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  color: ${theme.palette.textPrimary};

  &:hover {
    background-color: ${theme.palette.appSurfaceContrast + percentToHex(10)};
  }
`
);

export const AccordianChildren = styled.div(
  ({ theme }) => `
  padding-left: ${theme.spacing(2)}px;
  padding-bottom: ${theme.spacing(2)}px;
  padding-right: ${theme.spacing(2)}px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all ease-in-out 0.4s;
  
`
);

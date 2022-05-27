import { styled } from '../../theme';

//all this css is a direct lift from dice.fm so leaving it hard coded

export const IconContainer = styled.div(
  ({ theme }) => `
    position: absolute;
    display: block;
    top: 25%;
    left: ${theme.spacing(2)}px;
`
);

export const SearchInput = styled.input(
  ({ theme }) => `
  appearance: none;
  color: inherit;
  padding: 12px 8px 12px 48px;
  border-radius: 32px;
  background-color: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 20px;
  width: 100%;
  outline: none;
  border: none;
  padding-right: 60px;
`
);

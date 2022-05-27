import { styled } from "../../theme";

export const HeaderContainer = styled.div(
  ({ theme }) => `
    width: ${theme.header.width};
    background-color: ${theme.header.backgroundColor};
    height: ${theme.header.height};
    display: flex;
    align-items: center;
    position: fixed;
    left: ${theme.header.left};
    right: ${theme.header.right};
    padding: ${theme.header.padding}px;
    flex-direction: row;
    justify-content: space-between;
    z-index: 100;
`
);

export const HeaderLeft = styled.div(
  ({ theme }) => `
  width: ${theme.spacing(37.5)}px;
`
);

export const HeaderRight = styled.div(
  ({ theme }) => `
  margin-right: ${theme.spacing(4)}px;
`
);

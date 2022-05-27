import { styled } from "../../theme";

export const OuterContainer = styled.div(
  ({ theme }) => `
  display:flex;
  padding-top: ${
    theme.header.position === "fixed"
      ? `${theme.header.height + theme.header.padding * 2}px`
      : ""
  };
  align-items: center;

`
);

// do some media queries here
export const InnerContainer = styled.div(
  ({ theme }) => `
    max-width: ${theme.body.maxWidth}px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: ${theme.body.padding}px; 

`
);

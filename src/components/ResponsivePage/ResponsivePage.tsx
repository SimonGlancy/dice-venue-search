import React, { PropsWithChildren } from "react";
import FlexBox from "../FlexBox";
import { InnerContainer, OuterContainer } from "./ResponsivePage.styles";

export type ResponsivePageProps = {
  title?: string;
};

const ResponsivePage = (props: PropsWithChildren<ResponsivePageProps>) => {
  const { children, title } = props;
  return (
    <OuterContainer>
      <InnerContainer>
        {title && (
          <FlexBox marginTop={64} marginBottom={32}>
            <h2>{title}</h2>
          </FlexBox>
        )}
        {children}
      </InnerContainer>
    </OuterContainer>
  );
};

export default ResponsivePage;

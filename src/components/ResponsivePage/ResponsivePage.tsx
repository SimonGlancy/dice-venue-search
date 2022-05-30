import React, { PropsWithChildren, RefObject } from "react";
import FlexBox from "../FlexBox";
import { InnerContainer, OuterContainer } from "./ResponsivePage.styles";

export type ResponsivePageProps = {
  title?: string;
  innerRef?: RefObject<HTMLDivElement>;
  outerRef?: RefObject<HTMLDivElement>;
};

const ResponsivePage = (props: PropsWithChildren<ResponsivePageProps>) => {
  const { children, title, innerRef, outerRef } = props;
  return (
    <OuterContainer ref={outerRef}>
      <InnerContainer ref={innerRef}>
        {title && (
          <FlexBox marginTop={0} marginBottom={32}>
            <h2>{title}</h2>
          </FlexBox>
        )}
        {children}
      </InnerContainer>
    </OuterContainer>
  );
};

export default ResponsivePage;

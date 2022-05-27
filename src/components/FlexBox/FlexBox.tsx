import React, { PropsWithChildren, useMemo } from "react";
import { CSSProperties } from "styled-components";

export type FlexBoxProps = CSSProperties;

// simple component for now, would probably make something diff in a full project
// something inline with the Mui Box
const FlexBox = (props: PropsWithChildren<FlexBoxProps>) => {
  const { children, display = "flex", ...rest } = props;
  const style = useMemo(() => ({ display, ...rest }), [display, rest]);
  return <div style={style}>{children}</div>;
};

export default FlexBox;

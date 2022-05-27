import React, { MutableRefObject, PropsWithChildren, useMemo } from 'react';
import { CSSProperties } from 'styled-components';

export type FlexBoxProps = CSSProperties & {
  ref?: MutableRefObject<HTMLDivElement>;
};

// simple component for now, would probably make something diff in a full project
// something inline with the Mui Box
const FlexBox = (props: PropsWithChildren<FlexBoxProps>) => {
  const { children, display = 'flex', ref, ...rest } = props;
  const style = useMemo(() => ({ display, ...rest }), [display, rest]);
  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default FlexBox;

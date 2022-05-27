import React, { PropsWithChildren } from "react";
import {
  AccordianChildren,
  AccordianContainer,
  AccordianHeader,
} from "./Accordian.style";

export type AccordianProps = {
  onClick: () => void;
  collapseVariant?: "header" | "icon";
  title?: string;
  collapsed?: boolean;
  ExpandIcon?: () => JSX.Element;
  CollapseIcon?: () => JSX.Element;
};

const Accordian = (props: PropsWithChildren<AccordianProps>) => {
  const {
    title,
    collapsed,
    children,
    onClick,
    ExpandIcon = () => <>+</>,
    CollapseIcon = () => <>-</>,
  } = props;
  return (
    <AccordianContainer>
      <AccordianHeader onClick={onClick}>
        {title && <span>{title}</span>}
        {!collapsed
          ? ExpandIcon && <ExpandIcon />
          : CollapseIcon && <CollapseIcon />}
      </AccordianHeader>

      {collapsed && <AccordianChildren>{children}</AccordianChildren>}
    </AccordianContainer>
  );
};

export default Accordian;

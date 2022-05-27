import { useState } from "react";

const useAccordion = (initialState: boolean = true) => {
  const [collapsed, setCollapsed] = useState(initialState);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  const collapse = () => {
    setCollapsed(true);
  };

  const expand = () => {
    setCollapsed(false);
  };

  return {
    collapsed,
    onClick: toggle,
    collapse,
    expand,
    toggle,
  };
};

export default useAccordion;

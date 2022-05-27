import React, { SVGProps } from "react";

export type IconProps<T> = SVGProps<T> & {
  width?: number;
  height?: number;
  color?: string;
};

const SearchIcon = <T,>(props: IconProps<T>) => {
  const { width = 24, height = 24, color = "black", style } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M14.74 14.745a6 6 0 10-8.481-8.49 6 6 0 008.482 8.49zm0 0l3.76 3.76"
        stroke={color}
        stroke-linecap="square"
      ></path>
    </svg>
  );
};

export default SearchIcon;

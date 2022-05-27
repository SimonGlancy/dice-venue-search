import React, { ChangeEvent } from "react";
import SearchIcon from "../SearchIcon";

export type SearchBarProps = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchString: string;
};

const SearchBar = (props: SearchBarProps) => {
  const { onSearch, searchString } = props;
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "block",
          top: "25%",
          left: "16px",
        }}
      >
        <SearchIcon />
      </div>
      <input
        style={{
          appearance: "none",
          color: "inherit",
          padding: "12px 8px 12px 48px",
          borderRadius: " 32px",
          backgroundColor: "rgb(255, 255, 255)",
          fontSize: "12px",
          lineHeight: "20px",
          width: "100%",
          outline: "none",
          border: "none",
          paddingRight: "60px",
        }}
        placeholder="Search for an event"
        value={searchString}
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;

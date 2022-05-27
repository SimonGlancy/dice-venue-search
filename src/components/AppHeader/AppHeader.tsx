import React from "react";
import DiceLogo from "../DiceLogo";
import SearchBar from "../SearchBar";
import { HeaderContainer, HeaderLeft, HeaderRight } from "./AppHeader.style";

// build context for this
const AppHeader = (props: {
  searchString: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { searchString, onSearch } = props;
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchBar onSearch={onSearch} searchString={searchString} />
      </HeaderLeft>
      <HeaderRight>
        <DiceLogo />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default AppHeader;

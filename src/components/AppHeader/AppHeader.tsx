import React from 'react';
import { useEventSearchContext } from '../../context';
import DiceLogo from '../DiceLogo';
import SearchBar from '../SearchBar';
import { HeaderContainer, HeaderLeft, HeaderRight } from './AppHeader.style';

const AppHeader = () => {
  const { searchString, onSearch } = useEventSearchContext();
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

import React, { ChangeEvent } from 'react';
import FlexBox from '../FlexBox';
import SearchIcon from '../SearchIcon';
import { IconContainer, SearchInput } from './SearchBar.style';

export type SearchBarProps = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchString: string;
};

const SearchBar = (props: SearchBarProps) => {
  const { onSearch, searchString } = props;
  return (
    <FlexBox position='relative' alignItems='center'>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <SearchInput
        placeholder='Search for an event'
        value={searchString}
        onChange={onSearch}
      />
    </FlexBox>
  );
};

export default SearchBar;

import React, { ChangeEvent } from 'react';
import FlexBox from '../FlexBox';
import SearchIcon from '../SearchIcon';
import { IconContainer, SearchInput } from './SearchBar.style';

export type SearchBarProps = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchString: string;
  placeholder: string;
};

const EVENT_SEARCH_PLACEHOLDER = 'Search for an event';

const SearchBar = (props: SearchBarProps) => {
  const {
    onSearch,
    searchString,
    placeholder = EVENT_SEARCH_PLACEHOLDER,
  } = props;
  return (
    <FlexBox position='relative' alignItems='center'>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <SearchInput
        placeholder={placeholder}
        value={searchString}
        onChange={onSearch}
      />
    </FlexBox>
  );
};

export default SearchBar;

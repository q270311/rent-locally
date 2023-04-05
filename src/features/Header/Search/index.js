import { useState } from "react";
import { SearchIcon, SearchInput, SearchWrapper } from "./styled";
import search from "./search.svg";

const Search = ({ isScrolled }) => {
  const [query, setQuery] = useState("");

  const onInputChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <SearchWrapper isScrolled={isScrolled}>
      <SearchIcon src={search} />
      <SearchInput
        onChange={onInputChange}
        value={query || ""}
        placeholder="Search ..."
      />
    </SearchWrapper>
  );
};

export default Search;

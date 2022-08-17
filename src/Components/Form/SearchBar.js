import React from 'react';
import { ReactComponent as Search } from "../../Assets/Icons/search.svg";


const SearchBar = () => {
  return (
    <div className="flex gap-2 p-2 bg-lightGray rounded-md">
          <Search />
          <input
            className="w-full rounded-md bg-inherit focus:outline-none"
            type="text"
            placeholder="Search here"
          />
        </div>
  )
}

export default SearchBar
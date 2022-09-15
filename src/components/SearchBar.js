// src/components/SearchBar.js

import React, { useState } from "react";
import SelectMenu from "./SelectMenu";


export default function SearchBar(props) {
  const [query, setQuery] = useState();
  const [sort, setSort] = useState();

  function sendSort(sort) {
    setSort(sort);
  }

  return (
    <form
      className="mx-auto items-center max-w-7xl px-2 sm:px-6 lg:px-8 flex"
      onSubmit={(e) => {
        e.preventDefault();
        props.getResponse(query, sort);
      }}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white shadow-lg rounded-lg"
          placeholder={"Search for photos... eg. ".concat(props.current)}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
      <div className="mx-10 w-48"><SelectMenu sendSort={sendSort} /></div>
    </form>
  );
}

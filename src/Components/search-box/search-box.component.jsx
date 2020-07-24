import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ placeHolder, handle, value }) => (
  <input
    value={value}
    className="search"
    type="search"
    placeholder={placeHolder}
    onChange={handle}
  />
);

export default SearchBox;

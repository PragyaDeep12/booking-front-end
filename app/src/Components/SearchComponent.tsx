import * as React from "react";
function SearchComponent(props) {
  return (
    <div>
      <nav className="navbar ">
        <input
          className="form-control"
          placeholder={props.placeholder}
          aria-label="Search"
        />
      </nav>
    </div>
  );
}
export default SearchComponent;

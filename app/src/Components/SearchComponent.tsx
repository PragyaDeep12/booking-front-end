import * as React from "react";
function SearchComponent(props) {
  return (
    <div>
      <nav className="navbar ">
        <input
          className="form-control"
          placeholder={props.placeholder}
          aria-label="Search"
          onChange={e => {
            props.searchCallback(e.currentTarget.value);
          }}
        />
      </nav>
    </div>
  );
}
export default SearchComponent;

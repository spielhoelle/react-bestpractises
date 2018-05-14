import React from 'react';

export default function SearchBar(props) {
    return (
      <nav className="red white-text accent-2">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input onChange={(e) => props.handleSearch(e)} ref={props.inputRef} id="search" placeholder="search postname" type="search" required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
};

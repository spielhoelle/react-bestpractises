import React from 'react';
import {ThemeContext} from './App.jsx';

export default function DesktopNav(props) {
  return (
      <ThemeContext.Consumer>
      {theme => (
        <ul className="right hide-on-med-and-down">
          <li>
            <a className={" " + (props.theme === "dark" ? "white-text" : "red-text")} href="#">Sass</a>
          </li>
          <li>
            <a className={" " + (props.theme === "dark" ? "white-text" : "red-text")} href="#">Components</a>
          </li>
          <li>
            <a className={" " + (props.theme === "dark" ? "white-text" : "red-text")} href="#">Javascript</a>
          </li>
          <li>
            <a className={" " + (props.theme === "dark" ? "white-text" : "red-text")} href="#">Mobile</a>
          </li>
        </ul>
      )}
    </ThemeContext.Consumer>
  )
};

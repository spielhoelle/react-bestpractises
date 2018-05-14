import React from 'react';

export default function DesktopNav(props) {
  return (
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
  )
};

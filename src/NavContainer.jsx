import React from 'react';
import SideBar from './SideBar.jsx';
import DesktopNav from './DesktopNav.jsx';

//TODO this file doesnt need the props, it is just stupid passing the props to DesktopNav & SideBar
//Replace with context https://reactjs.org/docs/context.html
export default function NavContainer(props) {
  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <DesktopNav/>
          <SideBar/>
        </div>
      </nav>
    </React.Fragment>
  )
};

import React from "react";
import { Link } from 'react-router-dom';
 
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Use effect</div>
      <ul className="navbar-links">
        <li>
          <Link to="/dragon">Dragon Ball</Link>
        </li>
        <li>
          <Link to="/rick">Rick</Link>
        </li>
      </ul>
    </nav>
  );
};
 
export default Nav;
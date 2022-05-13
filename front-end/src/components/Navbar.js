import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="nav_bar">
        <ul> 
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/checklist">CHECKLIST</Link>
          </li>
          <li>
            <Link to="/Categorycreate">CATEGORY</Link>
          </li>
        </ul>
      </div >
    </>
  );
}

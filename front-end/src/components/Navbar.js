import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="container">
        <ul> 
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/taskcreate">TASKLIST</Link>
          </li>
          <li>
            <Link to="/checklistcreate">CHECKLIST</Link>
          </li>
          <li>
            <Link to="/Categorycreate">CATEGORY</Link>
          </li>
        </ul>
      </div >
    </>
  );
}

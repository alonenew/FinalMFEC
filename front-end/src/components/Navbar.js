import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            Create
            <ul>
              <li>
                <Link to="/taskcreate">Tasklist</Link>
              </li>
              <li>
                <Link to="/checklistcreate">Checklist</Link>
              </li>
              <li>
                <Link to="/Categorycreate">Category</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

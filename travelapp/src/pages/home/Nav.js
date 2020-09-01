import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
  
  return (
    <div className="container">
      <nav className="navigation flex">
        <div className="wrap flex">
          <div className="common about">
           <NavLink to="/about"><h3>about</h3></NavLink> 
            <ul>
              <li>
                <p>History of bhopal</p>
              </li>
              <li>
                <a>web developer</a>
              </li>
              <li>
                <a>content creater</a>
              </li>
            </ul>
          </div>
          <div className="common places">
            <h3>places</h3>
            <div className="flex">
              <ul>
                <li>
                  <a>Upper Lake & the Lower Lake</a>
                </li>
                <li>
                  <a>Van Vihar</a>
                </li>
                <li>
                  <a>State Museum</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a>Taj-ul-Masjid</a>
                </li>
                <li>
                  <a>Sair Sapata</a>
                </li>
                <li>
                  <a>Science Centre</a>
                </li>
                <li>
                  <a>more</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="common contact">
          <h3>contact</h3>
          <p>sappy12dream@gmail.com</p>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

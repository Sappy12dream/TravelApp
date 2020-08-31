import React from "react";

function SideNav({img, setsidemenu}) {
  return (
    <div className="sidenav-container">
      <div className="wrapper">
        <div className="style about-section">
          <h3>about</h3>
          <ul>
            <li>
              <a>History of bhopal</a>
            </li>
            <li>
              <a>web developer</a>
            </li>
            <li>
              <a>content creater</a>
            </li>
          </ul>
        </div>
        <div className="style tour-section">
          <h3>places</h3>
          <ul>
            <li>
              <a className="hover">Upper Lake & the Lower Lake</a>
            </li>
            <li>
              <a>Van Vihar</a>
            </li>
            <li>
              <a>State Museum</a>
            </li>
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
      <div className="style contact-section">
          <h3>contact</h3>
          <p>sappy12dream@gmail.com</p>
        </div>
    </div>
  );
}

export default SideNav;

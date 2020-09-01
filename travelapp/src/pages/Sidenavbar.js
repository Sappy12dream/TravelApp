import React from 'react'
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import gsap from "gsap";
import Bars from "../images/menu.png";
import close from "../images/cancel.png";

let tl = gsap.timeline();

function Sidenavbar() {
    const [sidemenu, setsidemenu] = useState({ opened: false });

    useEffect(() => {
        if (sidemenu.opened === true) {
          tl.to(".sidenav-container", {
            x: "0%",
            display: "",
            duration: ".8",
          }).from(".style h3",{
            x: "-100%",
            duration: ".3"
          }).from(".style li",{
            x: "-100%",
            duration: ".5",
            delay: ".2",
            stagger: ".2"
          }).from(".style p",{
            x: "-100%",
            duration: ".5"
          }).from(".side-menu", {
            opacity: 0,
            rotate: "90%",
            duration: ".9",
          });
        } else {
          tl.to(".sidenav-container", {
            x: "100%",
            duration: ".7",
            display: "none",
          }).from(".side-menu", {
            opacity: 0,
            duration: ".9",
          });
        }
      }, [sidemenu]);
    return (
        <div>
            <nav className="navbar">
<NavLink to="/">
  {" "}
  <div className="logo">bhopal.</div>
</NavLink>
<div className="side-menu">
  {sidemenu.opened ? (
    <>
      <a onClick={() => setsidemenu({ opened: false })}>
        <img
          src={close}
          width="20px"
          height="20px"
          alt="menu"
          className="cross"
        />
      </a>
    </>
  ) : (
    <>
      <a onClick={() => setsidemenu({ opened: true })}>
        <img
          src={Bars}
          width="30px"
          height="35px"
          alt="menu"
          className="bar"
        />
      </a>
    </>
  )}
</div>
</nav>
        </div>
    )
}

export default Sidenavbar

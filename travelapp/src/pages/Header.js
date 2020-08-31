import React, { useState, useEffect } from "react";
import Bars from "../images/menu.png";
import close from "../images/cancel.png";
import gsap from "gsap";
import {NavLink} from "react-router-dom";

let tl = gsap.timeline();
function Header() {
  const [toggle, settoggle] = useState({ opened: false });
  useEffect(() => {
    if (toggle.opened === true) {
      tl.to(".navigation", {
        zIndex: "4",
        y: 0,
      })
        .to(".content", {
          delay: "-.2",
          y: "25%",
        })
        .from(".navigation h3", {
          opacity: 0,
          y: "-100%",
          duration: 0.3,
          stagger: 0.1,
        })
        .from(".navigation li", {
          opacity: 0,
          y: "100%",
          duration: 0.2,
          stagger: 0.1,
        })
        .from(".contact", {
          opacity: 0,
          y: "100%",
          duration: 1,
          stagger: 0.3,
        }).from(
          ".toggler",{
            opacity: 0,
            rotate: "60%",
            delay: ".1"
          }
        );
    } else {
      tl.to(".navigation", {
        y: "-100%",
        zIndex: "-1",
        duration: ".5"
      }).to(".content", {
        delay: "-.3",
        y: "0",
      }).from(
        ".toggler",{
          opacity: 0,
          delay: ".2"
        }
      );
    }
  });
  return (
    <div className="nav flex space-between v-center">
     <NavLink to="/"> <div className="logo">bpl.</div></NavLink>

      <div className="toggler">
        {toggle.opened ? (
          <>
            <a onClick={() => settoggle({ opened: false })}>
              <img src={close} width="20px" height="20px" alt="menu" />
            </a>
          </>
        ) : (
          <>
            <a onClick={() => settoggle({ opened: true })}>
              <img src={Bars} width="30px" height="35px" alt="menu" />
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

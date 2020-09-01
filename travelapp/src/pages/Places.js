import React, { useState, useEffect } from "react";

import SideNav from "./places/SideNav";
import gsap from "gsap";
import Card from "./places/Card";
import data from "../pages/Data";
import dataB from "../pages/DataB";
import Left from "../images/left.png";
import Right from "../images/right.png";
import Sidenavbar from "./Sidenavbar";

let tl = gsap.timeline();
function Places() {
 
  const [card, setcard] = useState({data:false})
  
  useEffect(() => {
    tl.from("nav", {
      opacity: 0,
      duration: ".1",
    })
      .from(".line h1", {
        y: 100,
        skewX: "-20",
        duration: 0.5,
      })
      .from(".line2 p", {
        y: 100,
        skewX: "-20",
        duration: 0.5,
      })
  },[]);

  useEffect(() => {
    if (card.data === true) {
      tl.to(".right",{
        opacity: 0.5,
        pointerEvents: "none",
        duration: .2
      }).to(".controller .a2",{
        cursor: "pointer",
        pointerEvents: "none",
        userSelect: "none",
      }).to(".left",{
        opacity: 1,
        pointerEvents: "none",
        userSelect: "none",
        duration: .2
      }).to(".a1",{
        cursor: "",
        pointerEvents: "",
        userSelect: "",
      })
    }else{
      tl.to(".controller .a1",{
        cursor: "",
        pointerEvents: "none",
        userSelect: "none",
      }).to(".left",{
        opacity: 0.5,
        pointerEvents: "none",
        userSelect: "none",
        duration: .2
      }).to(".right", {
        opacity: 1,
        duration: .2
      }).to(".a2",{
        cursor: "",
        pointerEvents: "",
        userSelect: "",
      })
    }
    tl.from(".card",{
      opacity: 0,
      x: "100%",
      duration:".5",
      stagger: ".2"
    }).from(".card img",{
      width: 0,
      duration: ".5",
      stagger: .3,
    }).from(".card h1",{
      y: "100%",
      duration: .2,
      stagger: .2
    });
  },[card])
  return (
    <div className="container">
      <section className="place-section">
        <SideNav />
<Sidenavbar/>
        <div className="main-section">
          <div className="top-container">
            <div className="line">
              <h1>bhopal, the greenest city</h1>
            </div>
            <div className="line2">
              <p>
                Known as the City of Lakes, Bhopal is the capital of Madhya
                Pradesh. Founded by Raja Bhoj, the city has many natural and
                artificial lakes and it is one of the greenest cities in the
                country. Bhopal has retained its old world charm despite
                industrialization, with the old part of the city being full of
                narrow alleyways and crammed markets, while the new part of the
                city is better planned and is full of parks and gardens.
              </p>
            </div>
          </div>
          <div className="card-slider">
         {card.data ? (
              data.map((d) => {
              return <Card key={d.index} url={d.img} h1={d.h1} p={d.p} />;
            })
         )
         :(
           dataB.map((d) => {
            return <Card key={d.index} url={d.img} h1={d.h1} p={d.p} />;
          })
         )

         }
          </div>
          <div className="controller">
            <a onClick={()=>{setcard({data: false})}} className="a1"><img src={Left} width="40px" height="40px" className="left"/></a>
           <a onClick={()=>{setcard({data: true})}} className="a2"> <img src={Right} width="40px" height="40px" className="right" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Places;

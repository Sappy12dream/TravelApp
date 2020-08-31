import React, { useState, useEffect } from "react";
import gsap from "gsap";
let tl = gsap.timeline();
function Card({ url, h1, p }) {
  return (
    <div className="card">
      <img src={url} alt="upperlake" />
      <h1>{h1}</h1>
      <div className="body">
        <h2>{h1}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Card;

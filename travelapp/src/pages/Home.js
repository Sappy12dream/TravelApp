import React from "react";
import {NavLink} from "react-router-dom";


//components
import Header from "./Header";
import Main from "./home/Main";
import Video from "./home/Video";

//images
import Birds from "../images/Birds.jpg";
import Arrow from "../images/right-arrow.png";

function Home() {
  return (
    <section className="home">
      <div className="container flex">
        <div className="col">
          <Header />
          <Main />
        </div>
        <div className="col">
          <img
            src={Birds}
            width="100%"
            height="85%"
            alt="Birds"
            className="animate"
          />
          <div className="strip">
            <h3>Want to explore Bhopal more?</h3>
            <span>
              <NavLink to="/places">
              <a className="flex v-center" href="/">
                Let's go
                <img src={Arrow} width="20px" height="20px" alt="right-arrow" />
              </a>
              </NavLink>
            </span>
          </div>
        </div>
        <Video/>
      </div>
    </section>
  );
}

export default Home;

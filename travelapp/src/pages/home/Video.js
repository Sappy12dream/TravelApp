import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import gsap from "gsap";
import Cancel from "../../images/close.png";

let tl = gsap.timeline();

function Video({ src }) {
  const [show, setshow] = useState({ showopened: false });
  const [expand, setexpand] = useState({ expandOpened: false });
  useEffect(() => {
    if (show.showopened === true) {
      gsap.to(".fact-bar", { css: { y: 0 } });
    } else {
      gsap.to(".fact-bar", { css: { y: "60%" } });
    }
  });
  useEffect(() => {
    if (expand.expandOpened === true) {
      tl.to(
        ".info h3",
        {
          y: -10,
          opacity: 0,
          display: "none",
        },
        0.3
      )
        .to(".toggle-button", {
          display: "none",
        })
        .to(
          ".info p",
          {
            y: -10,
            opacity: 0,
            display: "none",
          },
          0.2
        ).to(
          ".info ul",
          {
            y: -10,
            opacity: 0,
            display: "none",
          },
          0.2
        )
        .to(".fact-bar", { css: { width: "52%", right: "0" } }, 0.4)
        .to(".video-container", {
          width: "100%",
          padding: "10px",
        })
        .to(".player", {
          width: "500px",
          height: "380px",
        })
        .to(".video-container a", {
          display: "block",
        });
    } else {
      tl.to(".video-container a", {
        display: "none",
      })
        .to(".player", {
          width: "260px",
          height: "200px",
        })
        .to(".video-container", {
          width: "100%",
          padding: "0",
        })
        .to(".fact-bar", { css: { width: "360px", right: "25%" } }, 0.4)
        .to(
          ".info h3",
          {
            y: 0,
            opacity: 1,
            display: "",
          },
          0.3
        )
        .to(
          ".info p",
          {
            y: 0,
            opacity: 1,
            display: "",
          },
          0.2
        ).to(
          ".info ul",
          {
            y: 0,
            opacity: 1,
            display: "",
          },
          0.2
        )
        .to(".toggle-button", {
          display: "",
        });
    }
  });
  return (
    <div>
      <div className="fact-bar">
        <div className="flex">
          <div className="info">
            <h3>Bhopal is famous for</h3>
            <p>upper lake & lower lake</p>
          </div>
          <div className="info">
            <h3>famous activity in Bhopal</h3>
            <p>Water Sports</p>
          </div>
          <div className="info">
            <h3>top 5 things to do</h3>
            <ul>
              <li>Sair Sapata</li>
              <li>Taj-ul-Masajid</li>
              <li>National Museum of Mankind</li>
              <li>Regional Science Centre</li>
              <li>Bhopal Ropeway</li>
            </ul>
          </div>

          <div className="info">
            <h3>Video by lorem</h3>
            <div className="video-container">
              <a onClick={() => setexpand({ expandOpened: false })}>
                <img
                  src={Cancel}
                  width="100%"
                  height="100%"
                  className="cancel"
                />
              </a>
              <ReactPlayer
                url="https://youtu.be/CXhYbva4nb4"
                width="260px"
                height="200px"
                onStart={() => setexpand({ expandOpened: true })}
                onPlay={() => setexpand({ expandOpened: true })}
                className="player"
                controls= {true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="show flex v-center">
        {show.showopened ? (
          <>
            <button
              value={show}
              onClick={() => setshow({ showopened: false })}
              className="toggle-button"
            >
              close this
            </button>
          </>
        ) : (
          <>
            <button
              value={show}
              onClick={() => setshow({ showopened: true })}
              className="toggle-button"
            >
              show more
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Video;

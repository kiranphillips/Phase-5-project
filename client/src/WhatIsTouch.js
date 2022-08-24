import React, { useEffect } from "react";
import ReactPlayer from "react-player"

function WhatIsTouch({ setIsLoggedIn }) {

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"))
  }, []);

  return (
    <>
    <div id="kiran" />
    <h1>Who are we?</h1>
    <h2>Touch at your fingertips  </h2><div>
    <h2>Watch the video below to see how our App works  </h2>
      </div>
 
      <div id="space" />
      <div>
      <ReactPlayer id="video"
        url="https://youtu.be/kWVPp5CVWV4" />
    </div>

    </>
    
  );
};

export default WhatIsTouch;

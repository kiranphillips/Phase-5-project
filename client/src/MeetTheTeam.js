import React, { useEffect } from "react";
import ReactPlayer from "react-player"

function MeetTheTeam({ setIsLoggedIn }) {

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"))
  }, []);

  return (
    <>
    <div id="kiran" />
    <h1>Meet the Team</h1>
    <h2>Kiran Phillips </h2><div>
      <a href="mailto: kiranphillips61@gmail.com">kiranphillips61@gmail.com</a>
      </div>
      <div><a href="https://github.com/kiranphillips">github</a></div>
      <div><a href="https://www.linkedin.com/in/kiran-phillips-925055b9/">linkedin</a></div>
      <div id="space" />
      <div>
      <ReactPlayer id="video"
        url="https://www.youtube.com/watch?v=v6kDgFh_ec4" />
    </div>

    </>
    
  );
};

export default MeetTheTeam;

import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserPage from "./UserPage";
import SignUp from "./Signup";
import Navbar from "./NavBar";
import Activities from "./Activities";
import MeetTheTeam from "./MeetTheTeam";
import Gallery from "./Gallery";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [guests, setGuests] = useState([]);
  const [loggedInGuestId, setLoggedInGuestId] = useState(null);
  const [reservation, setReservations] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/reservations")
      .then((r) => r.json())
      .then((reservations) => setReservations(reservations));
  }, []);

  useEffect(() => {
    setLoggedInGuestId(sessionStorage.getItem("loggedInGuestId"));
    fetch("/guests")
      .then((r) => r.json())
      .then((guests) => setGuests(guests));
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Navbar
          loggedInGuestId={loggedInGuestId}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : null}
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setLoggedInGuestId={setLoggedInGuestId}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/activities"
          element={
            <Activities
              setIsLoggedIn={setIsLoggedIn}
              page={"activities"}
              loggedInGuestId={loggedInGuestId}
            />
          }
        />
        <Route
          path="/guests/:id"
          element={<UserPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={
            <SignUp
              setIsLoggedIn={setIsLoggedIn}
              setLoggedInGuestId={setLoggedInGuestId}
            />
          }
        />
        <Route
          path="/MeetTheTeam"
          element={<MeetTheTeam setIsLoggedIn={setIsLoggedIn} />}
        />
         <Route
          path="/gallery"
          element={
            <Gallery
              setIsLoggedIn={setIsLoggedIn}
              setLoggedInGuestId={setLoggedInGuestId} />}
            />
      </Routes>
    </div>
  );
}

export default App;

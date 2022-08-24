import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import Activities from "./Activities";
import Dining from "./Dining";
import Gallery from "./Gallery";
import HouseKeeping from "./HouseKeeping";
import Map from "./Map";
import Reservations from "./Reservations";

const Navbar = ({ loggedInGuestId, isLoggedIn, setIsLoggedIn }) => {
  const history = useNavigate();

  function handleLogout(e) {
    sessionStorage.setItem("loggedIn", false);
    sessionStorage.setItem("loggedInGuestId", null);
    setIsLoggedIn(false);
    history("/");
  }

  const renderLogout = isLoggedIn ? (
    <Button
      id="newitem"
      className="ui logout"
      variant="dark"
      type="submit"
      onClick={handleLogout}
    >
      
      Logout
    </Button>
  ) : null;

  return (
    <div>
      <div className="navbar">
        <div>
          <NavLink
            className="navlink" to="/activities" element={<Activities />}> 
            Activities
          </NavLink>
          <NavLink className="navlink" to="/housekeeping" element={<HouseKeeping />}>
            House Keeping
          </NavLink>
          <NavLink className="navlink" to="/gallery" element={<Gallery />}>
            Gallery
          </NavLink>
          <NavLink className="navlink" to="/reservations" element={<Reservations />}>
            View Your Reservations
          </NavLink>
          <NavLink className="navlink" to="/dining" element={<Dining />}>
            Dining
          </NavLink>
          <NavLink className="navlink" to="/map" element={<Map />}>
            Map
          </NavLink>
          <NavLink className="navlink" to="/meettheteam">
            Meet the team
          </NavLink>
        </div>
        <div>
          <div className="userLink">
            <NavLink
              className="navlink"
              to={`/guests/${loggedInGuestId}`}
              element={<Activities />}
            >
              <svg
                xmlns="client/src/imgs/Photos.jpeg"
                width="45"
                height="45"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </NavLink>
          </div>
          <div className="logoutButton">
            <Form onSubmit={handleLogout}>{renderLogout}</Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

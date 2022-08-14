import React, { useState, useEffect } from "react";
import Availabilites from "./Availablities";

function Activities({ setIsLoggedIn, page, loggedInGuestId }) {
  const [activities, setActivities] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"));

    fetch("/activities")
      .then((r) => r.json())
      .then((activities) => setActivities(activities));
  }, []);

  function fetchAllActivities() {
    fetch("/activities")
      .then((r) => r.json())
      .then((data) => setActivities(data));
    setActivities(activities);
    window.location.reload(true);
  }

  function handleUpdateActivities(updatedActivities, id) {
    fetch(`/activities/${id}`, {
      method: "PATCH",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(updatedActivities),
    });
  }

  function handleAddActivities(newActivities) {
    fetch("/activities", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(newActivities),
    });
    newActivities([...activities, newActivities]);
  }

  // const activitiesInfo = activities.map((activities) => (
  //   <Availabilites
  //     key={activities.id}
  //     activities={activities}
  //     handleUpdateActivities={handleUpdateActivities}
  //     // fetchAllActivities = { fetchAllActivities }
  //   />
  // ));

  // const handleClick = () => {
  //   setShow(true)
  // }

  const modalClose = () => {
    setShow(false);
    page === "guest"
      ? setActivities([
          ...Activities.filter(
            (activities) => activities.guest.id === parseInt(loggedInGuestId)
          ),
        ])
      : setActivities([...Activities]);
    window.location.reload(true);
  };

  return (
    <>
      {/* {show && (
        <Availabilites
          closeModal={modalClose}
          loggedInGuestId={loggedInGuestId}
          onAddItem={handleAddActivities}
        />
      )}
      <div className="ui four column grid">
        <div id="item_card">{activitiesInfo}</div>
      </div> */}
    </>
  );
}

export default Activities;

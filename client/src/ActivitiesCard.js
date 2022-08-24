import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function ActivitiesCard({ fetchAllActivities, activity }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  // const [disable, setDisable] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleAvailabilityClick = (
    e,
    availability,
    startFormatedMinutes,
    formatedMinutes,
    date,
    endDate
  ) => {
    e.preventDefault();
    const availableActivity = availability.available ? false : true;
    fetch(`/availabilities/${availability.id}`, {
      method: "PATCH",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ available: availableActivity }),
    }).then((r) => {
      fetchAllActivities();
      if (r.ok) {
        e.target.innerText = availableActivity
          ? "Release"
          : `${date.getHours()}:${startFormatedMinutes}-${endDate.getHours()}:${formatedMinutes}`;
      }
    });
    fetch(`/reservations`, {
      method: "Post",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        availability_id: availability.id,
        guest_id: sessionStorage.getItem("loggedInGuestId"),
      }),
    }).then((r) => {
      fetchAllActivities();
      if (r.ok) {
        // e.target.innerText = availableActivity
        //   ? "Release"
        // : `${date.getHours()}:${startFormatedMinutes}-${endDate.getHours()}:${formatedMinutes}`;
      }
    });
  };

  // const {id, spa, boma, bushdinner, archery, cookingclass, safari} = activity
  const { id, name, availabilities } = activity;
  return (
    <div>
      <div className="activitynames" key={id}>
        <div className="logo">{name}</div>
        <div>
          <Dropdown>
            <Dropdown.Toggle id="timeslot" variant="dark">
              Book This Time Slot
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {availabilities.map((availability) => {
                const endDate = new Date(availability.end_time);
                const minutes = endDate.getMinutes();
                const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
                const date = new Date(availability.start_time);

                const startMinutes = date.getMinutes();
                const startFormatedMinutes =
                  startMinutes < 10 ? `0${startMinutes}` : startMinutes;
                return (
                  <div className="dropdown">
                    <Dropdown.Item
                      disabled={!availability.available}
                      onClick={(e) => {
                        handleAvailabilityClick(
                          e,
                          availability,
                          startFormatedMinutes,
                          formatedMinutes,
                          date,
                          endDate
                        );
                      }}
                    >
                      
                      {`${date.getHours()}:${startFormatedMinutes}-${endDate.getHours()}:${formatedMinutes}`}
                    </Dropdown.Item>
                  </div>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesCard;

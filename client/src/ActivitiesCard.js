import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function ActivitiesCard({ activity, onActivityClicked }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  // const {id, spa, boma, bushdinner, archery, cookingclass, safari} = activity
  const { id, name, availabilities } = activity;
  return (
    <div>
      <div
        className="activitynames"
        key={id}
        onClick={() => onActivityClicked(activity)}
      >
        <div className="logo">{name}</div>
        <div>
          <Button id="timeslot" variant="dark" onClick={handleClick}>
            Book This Time Slot
          </Button>
          <span>
            {availabilities.map((availabilities) => {
              const endDate = new Date(availabilities.end_time);
              const minutes = endDate.getMinutes();
              const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
              const date = new Date(availabilities.start_time);

              const startMinutes = date.getMinutes();
              const startFormatedMinutes =
                startMinutes < 10 ? `0${startMinutes}` : startMinutes;
              return (
                <div>
                  {" "}
                  {`${date.getHours()}:${startFormatedMinutes}-${endDate.getHours()}:${formatedMinutes}`}
                </div>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesCard;

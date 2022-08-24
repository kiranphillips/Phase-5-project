import React, { useState, useEffect } from "react";
import ActivitiesCard from "./ActivitiesCard";

function Reservations({ removeForever }) {
  const [activities, setActivities] = useState([]);

  // removeItem(e){
  //     // splice this.props.todos??
  // }
function handleClick (id,availabilityID){
    
const updateAvailability = {available: true}

fetch(`/availabilities/${availabilityID}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body:JSON.stringify(updateAvailability)
})

        fetch(`/reservations/${id}`, {
            method: "DELETE",
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // body:JSON.stringify(updateAvailability)
        })
}
  useEffect(() => {
    fetch("/reservations")
      .then((r) => r.json())
      .then((activities) => setActivities(activities));
  }, []);

  activities.map((activity) => console.log(activity));
  //   console.log(activity.availability)

  const work = activities.map((activity) => (
    <div>
      <div>{activity.availability.activity.name} </div>
      <p>
        Start time{activity.availability.start_time}
        End time{activity.availability.end_time}
      </p>
      <button onClick={()=> handleClick(activity.id, activity.availability.id)}>reservation canceled</button>
    </div>
  ));

  return (
    <div>
      <li>
        Below is a list of your Current reservations you have made. If you would
        like to cancel one please click on the one you would like to cancel and
        it will be deleted.
      </li>

      {work}
    </div>
  );
}

export default Reservations;

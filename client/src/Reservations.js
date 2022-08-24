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

//   activities.map((activity) => console.log(activity));
  //   console.log(activity.availability)

  const work = activities.map((activity) => {
    const endDate = new Date(activity.availability.end_time);
    const minutes = endDate.getMinutes();
    const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const date = new Date(activity.availability.start_time);

    const startMinutes = date.getMinutes();
    const startFormatedMinutes =
      startMinutes < 10 ? `0${startMinutes}` : startMinutes;
    
return(
    <div>
      <div>{activity.availability.activity.name} </div>
      <p className="times">
      {`${date.getHours()}:${startFormatedMinutes}-${endDate.getHours()}:${formatedMinutes}`}

        
      </p>
      <button onClick={()=> handleClick(activity.id, activity.availability.id)}>reservation canceled</button>
    </div>
  )});

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

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
    <div className="detail" >
      <p>
        Below is a list of your Current reservations you have made. If you would
        like to cancel one please click on the one you would like to cancel and
        it will be deleted.
      </p>
      
      <div className="work" >{work}</div>

      <div className="desribe">
        Archery - Archery is the sport, practice, or skill of using a bow to shoot arrows. It is for all ages this is a group event and you are taken out into the wild. You will be shooting at a target not animals. 
      </div>
      <p></p>
      
      <div className="desribe">
        Bush Dinner - Bush dining originated as sustenance dining for hunters who were unable to take their kill home after a long day. Dinner usually consisted of fresh meat, stew, and vegetables. Bush dining was also a chance to exchange stories by the fire.
      </div>
      <p></p>
      <div className="desribe">
        Cooking Class - These classes offer primary experience and ideas in particular areas associated with food making, presentation, and appreciation. This is done with locals, you will also have the option of eating what you make for lunch as the class is done over the lunch period. 
      </div>
      <p></p>
      <div className="desribe">
        Spa - an escape from the stresses of a busy lifestyle and provides the opportunity of self-renewal. Alow yourself to rest and rejuvinate. We have a spa menu available at the spa and will be on available to you shortly. 
      </div>
      <p></p>
      <div className="desribe">
        Boma -  the boma is a gathering place where guests meet for candlelit dinners in an open air atmosphere. this is accompanied with tradition dances and singing. 
      </div>
      <p></p>
      <div className="desribe">
      Safari - A game drive is an adventure that entails viewing wildlife in the comfort of a 4×4 open-sided safari vehicle that accommodates 4 to 6 people
      </div>
    </div>
    
  );
}

export default Reservations;

import React, { useState, useEffect } from "react";
import ActivitiesCard from "./ActivitiesCard";




function Reservations({removeForever}) {

    const [activities, setActivities] = useState([]);

    

    useEffect(() => {
        fetch("/reservations")
          .then((r) => r.json())
          .then((activities) => setActivities(activities));
      }, []);
    
      console.log(activities)
      

      const work =activities.map(activity => 
        
    <div>
      <p onClick={(e) => removeForever(e)}>{activity.availability.activity.name}</p> 
      <button onClick={(e) => removeForever(e)}>Start time{activity.availability.start_time}<p>

      </p>
      End time{activity.availability.end_time} </button> 
      </div>
       )

  return (
  
    
  <div>
        <li>
            Below is a list of your Current reservations you have made. If you would like to cancel one please click on the one you would like to cancel and it will be deleted. </li>

       {work}

       <button  onClick={(e) => removeForever(e)}>
        reservation canceled
       </button>
  </div>

  )
}

export default Reservations;

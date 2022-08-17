
import React from "react";


function ActivitiesCard({ activity, onActivityClicked }) {
    // const {id, spa, boma, bushdinner, archery, cookingclass, safari} = activity
   const {id, name, availabilities} = activity
    return (
      <div id="activity">
        <div className="ui card" key={id} >
        {/* onClick={() => onActivityClicked(activity)} add after key={id} */}
          <div className="logo">
            {name}
          </div>
          <div>
            <span className="name">
                {availabilities.map((availabilities) => {
    return availabilities.start_time 
})}
    </span>
          </div>
        </div>
      </div>
    );
  }
  

export default ActivitiesCard;
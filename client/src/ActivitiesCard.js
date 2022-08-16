
import React from "react";


function ActivitiesCard({ activity, onActivityClicked }) {
    const {id, spa, boma, bushdinner, archery, cookingclass, safari} = activity
  
    return (
      <div id="activity">
        <div className="ui card" key={id} onClick={() => onActivityClicked(activity)}>
          <div className="logo">
          </div>
          <div>
            <span class="name">
              {[spa, boma, bushdinner, archery, cookingclass, safari]}
            </span>
          </div>
        </div>
      </div>
    );
  }
  

export default ActivitiesCard;
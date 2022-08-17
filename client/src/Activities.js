import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import TimePicker from 'react-time-picker'
import moment from 'moment'
import Availabilites from "./Availablities";
import ActivitiesCard from "./ActivitiesCard";

function Activities({ setIsLoggedIn, page, loggedInGuestId }) {
  const [activities, setActivities] = useState([]);
  const [show, setShow] = useState(false);
  const [dateState, setDateState] = useState(new Date())
  const [value, onChange] = useState('10:00');
 
  console.log(activities)

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
    // setActivities(activities);
    // window.location.reload(true);
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

  const activitiesInfo = activities.map((activity) => {
    console.log(activity)
    return <ActivitiesCard 
    key={activity.id}
    activity = {activity}
    />

    // <Availabilites
    //   key={activities.id}
    //   activities={activities}
    //   handleUpdateActivities={handleUpdateActivities}
    //   fetchAllActivities = { fetchAllActivities }
    // />
  });

  const handleClick = () => {
    setShow(true)
  }

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

  //Change Date Method 
const changeDate = (e) => {
  setDateState(e)
}



  return (
    <>
  <div className='app'>
      <h1 className='text-center'>Book your Activity</h1>
      <div className='calendar-container'></div>  
<Calendar
 value={dateState}
 onChange={changeDate}
/>
<TimePicker onChange={onChange} value={value} />
</div>
{/* <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p> */}

     
      <p className='text-center'>
        <span className='bold'>Selected Date:{' '}
        {dateState.toDateString()}</span>
      </p>
    
      {/* {show && (
        <Availabilites
          closeModal={modalClose}
          loggedInGuestId={loggedInGuestId}
          onAddItem={handleAddActivities}
        />
      )} */}
    
        <div id="activityinfo">{ activitiesInfo }</div>
  
    </>
  );
}

export default Activities;

import React from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 23.9884,
      lng: 31.5547
    },
    zoom: 1
  };
  

  return (
    // Important! Always set the container height explicitly
    <>
      Have a look at where we are.
      <div style={{ height: '60vh', width: '100%' }}>
        <script async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWJT23O_lwn00PfSEDHt5IB8HWD8Ey3H8&callback=initMap">
        </script>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDWJT23O_lwn00PfSEDHt5IB8HWD8Ey3H8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={23.9884}
            lng={31.5547} />
        </GoogleMapReact>
      </div> <div className="africa">Things you need to know about coming here and the property itself.
      <li> South Africa has 11 official languages.
        
        <li>While the country only covers 1% of the Earth’s land surface, South Africa boasts 10% of the world’s bird, fish and plant species as well as 6% of its mammal and reptile species!</li>
       
        <li>South Africa is also home to the world’s longest wine route: Route 62. It spans an impressive 850 kilometres</li>
        
        <li>The world’s first heart transplant was completed in Cape Town, South Africa</li>

        <li>South Africa is the only country in the world with three capital cities</li>

        <li>It’s the only country in the world where two Nobel Prize winners lived on the same street</li>
        <li>South Africa in size is three times the size of Texas and five times the size of Japan.</li>


        <li>The most luxurious train in the world is in South Africa. It is called the Rovos Rail.</li>


      </li></div></>
  );
}
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
    <div style={{ height: '100vh', width: '100%' }}>
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
          lng={31.5547}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = () => (
  <img
    src="/assets/img/pin.png"
    alt="Thumb"
    style={{
      width: "50px",
      height: "50px",
      marginRight: "10px",
      position: "relative",
      top: "-50px",
      left: "-25px",
    }}
  />
);

export default function SimpleMap(props) {
  const defaultProps = {
    center: {
      lat: props?.location.lat,
      lng: props?.location.lng,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: "300px",
        width: "100%",
        position: "sticky",
        top: "130px",
        marginTop: "20px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBobPrpAfV2cyTVn2HkmTrG4SMLx-jdy-U" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={props?.location.lat} lng={props?.location.lng} />
      </GoogleMapReact>
    </div>
  );
}

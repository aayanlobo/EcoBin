import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>Beni Sagar Mohalla</div>;

export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 23.252319,
      lng: 77.431091,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyCl7c070blKq16exEHYnmyaFVAEbRKzklY" }}
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={23.252319} lng={77.431091} text="Marker" />
      </GoogleMapReact>
    </div>
  );
}

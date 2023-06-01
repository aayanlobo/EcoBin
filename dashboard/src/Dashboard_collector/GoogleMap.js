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
        bootstrapURLKeys={{ key: "AIzaSyCl7c070blKq16exEHYnmyaFVAEbRKzklY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={23.252319} lng={77.431091} text="Marker" />
      </GoogleMapReact>
    </div>
  );
}

// export default function GoogleMap() {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

//   const AnyReactComponent = () => (
//     <div
//       style={{
//         position: "relative",
//         color: "white",
//         backgroundColor: "red",
//         padding: "5px",
//         borderRadius: "50%",
//         width: "50px",
//         height: "50px",
//         textAlign: "center",
//       }}
//     >
//       Marker
//     </div>
//   );

//   const markerLocation = {
//     lat: 23.252319,
//     lng: 77.431091,
//   };

//   return (
//     // ...
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
//       defaultCenter={defaultProps.center}
//       defaultZoom={defaultProps.zoom}
//       yesIWantToUseGoogleMapApiInternals
//     >
//       <Marker lat={markerLocation.lat} lng={markerLocation.lng} text="Marker" />
//     </GoogleMapReact>
//     // ...
//   );
// }

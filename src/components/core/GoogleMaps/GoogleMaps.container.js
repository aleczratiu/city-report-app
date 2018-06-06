import React, { Fragment } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps"

const GoogleMapsContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDretPaYBaI5LwemE8YkguPa9yRmyDq9OE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={props.currentPosition}
  >
    {props.isMarkerShown &&
      <Fragment>
        <Marker
          defaultPosition={{lat: 30, lng: 30}}
          position={props.currentPosition}
          onClick={props.onMarkerClick}
          draggable
          onDragEnd={position => props.getMarkerPosition(position)}
        />
      </Fragment>
    }
  </GoogleMap>
);

export default GoogleMapsContainer;

import { Color } from "@/styles/color";
import { Box, Container } from "@mui/material";
import React from "react";
import {
  GoogleMap,
  Marker,
  WithGoogleMapProps,
  WithScriptjsProps,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
interface MyMapProps {
  isMarkerShown: boolean;
}
const MyMapComponent = withScriptjs(
  withGoogleMap(
    (props: MyMapProps & WithGoogleMapProps & WithScriptjsProps) => (
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: -33.8, lng: 151.1 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: -33.9, lng: 151.2 }} />
        )}
      </GoogleMap>
    )
  )
);

const RightHalf = () => {
  return (
    <Container sx={styles.container}>
      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA5nKQWA-ia-nBBsvxzfOeyMDSncA3Drzw&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<Box sx={{ height: "100%", width: "100%" }} />}
        containerElement={<Box style={{ height: "100%", width: "100%" }} />}
        mapElement={
          <Box style={{ height: "100%", minHeight: 600, width: "100%" }} />
        }
      />
    </Container>
  );
};

export default RightHalf;

const styles = {
  container: {
    height: 750,
  },
};

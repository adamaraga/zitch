import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Loading from "./Loading";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDDJSwit2Jvfg4zEcJPXSSkYtIvNSgSizw",
  });

  const center = {
    lat: 6.54969,
    lng: 3.32997,
  };

  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  return (
    <div style={{ marginBottom: 100 }}>
      {!isLoaded ? (
        <Loading />
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          options={options}
        >
          <></>
          <MarkerF position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;

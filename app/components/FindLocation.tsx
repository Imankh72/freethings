import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useLocation } from "../hooks/useLocation";
import { Icon } from "leaflet";

const FindLocation = () => {
  const [position, setPosition] = useState(null);
  const { lat, lng, setLocation } = useLocation();
  const map = useMapEvents({
    dblclick: () => map.locate(),
    locationfound: (e) => {
      setPosition(e.latlng);
      setLocation(e.latlng.lat, e.latlng.lng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const customIcon = new Icon({
    iconUrl: "/images/user-location-marker.png",
    iconSize: [38, 38],
  });

  return (
    <>
      {lat && lng && position !== null && (
        <Marker position={position} icon={customIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </>
  );
};

export default FindLocation;

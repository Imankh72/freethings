import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAddItem } from "@/app/hooks/useAddItem";
import FindLocation from "../FindLocation";
import { useLocation } from "@/app/hooks/useLocation";

import "leaflet/dist/leaflet.css";

const AddItemMap = () => {
  const {
    inputValues: { latitude, longitude },
    setLocation,
  } = useAddItem();

  const { lat, lng } = useLocation();

  useEffect(() => {
    setLocation(lat, lng);
  }, [lat, lng, setLocation]);

  return (
    <MapContainer
      center={[latitude, longitude]}
      doubleClickZoom
      zoom={13}
      scrollWheelZoom
      className="rounded-[10px] w-full h-[124px] object-cover lg:h-[66px] focus:outline-none"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FindLocation />
    </MapContainer>
  );
};

export default AddItemMap;

import { useMapEvents } from "react-leaflet";

interface LocateMapProps {
  latitude: number;
  longitude: number;
}

const LocateMap = ({ latitude, longitude }: LocateMapProps) => {
  const map = useMapEvents({
    click: () => map.locate(),

    locationfound: () =>
      map.flyTo({ lat: latitude, lng: longitude }, map.getZoom()),
  });

  return <></>;
};

export default LocateMap;

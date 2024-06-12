import { useRouter } from "next/navigation";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import LocateMap from "./LocateMap";

import "leaflet/dist/leaflet.css";

interface MapProp {
  id: number;
  title: string;
  latitude: number;
  longitude: number;
  image: string;
}

const Map = ({ latitude, longitude, image, id, title }: MapProp) => {
  const router = useRouter();

  const customIcon = new Icon({
    iconUrl: "/images/product-location-marker.svg",
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      doubleClickZoom
      zoom={13}
      scrollWheelZoom
      className="h-[200px] w-full rounded-t-[20px] absolute bottom-0 left-0 z-[70] lg:static lg:bottom-[initial] lg:left-[initial] lg:w-[400px] lg:h-[633px] lg:rounded-[10px] lg:top-[38px] focus:outline-none"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocateMap latitude={latitude} longitude={longitude} />
      <Marker
        position={[latitude, longitude]}
        icon={customIcon}
        eventHandlers={{
          click: () => {
            router.push(
              `/product-details/${title
                .replace(/\s+/g, "-")
                .toLowerCase()}-${id}`
            );
          },
        }}
      ></Marker>
    </MapContainer>
  );
};

export default Map;

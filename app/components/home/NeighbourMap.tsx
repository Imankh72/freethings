import { useRouter } from "next/navigation";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import FindLocation from "../FindLocation";
import { useLocation } from "@/app/hooks/useLocation";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

interface Product {
  id: number;
  title: string;
  lat: number;
  lng: number;
}

interface NeighbourMapProps {
  data: Product[][];
  className: string;
}

const NeighbourMap = ({ data, className }: NeighbourMapProps) => {
  const { lat = 46.516, lng = 6.6328 } = useLocation();
  const router = useRouter();

  const customIcon = new Icon({
    iconUrl: "/images/product-location-marker.svg",
  });

  return (
    <MapContainer
      center={{ lat, lng }}
      zoom={13}
      scrollWheelZoom
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FindLocation />
      <MarkerClusterGroup chunkedLoading>
        {data?.map((item) =>
          item.map(({ id, title, lat, lng }) => (
            <Marker
              key={id}
              position={[lat, lng]}
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
          ))
        )}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default NeighbourMap;

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

interface LocationBoxProp {
  lat: number;
  lng: number;
  weight: number;
  pickUp: number;
  floor: number;
}

import "leaflet/dist/leaflet.css";

const LocationBox = ({ lat, lng, weight, pickUp, floor }: LocationBoxProp) => {
  const customIcon = new Icon({
    iconUrl: "/images/product-location-marker.svg",
  });

  return (
    <div className="pt-5 bg-gray-100 px-5 lg:px-0 lg:mb-3">
      <h4 className="text-gray-main text-[24px] leading-[24px] font-light mb-[10px] lg:font-bold lg:relative lg:z-20">
        Pick up details
      </h4>
      <MapContainer
        center={{ lat, lng }}
        doubleClickZoom
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-[150px] rounded-[10px] lg:w-[473px] lg:h-[180px] relative z-0 focus:outline-none"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={customIcon}></Marker>
      </MapContainer>
      <div className="flex items-center px-[15px] gap-x-10 text-gray-main text-[14px] leading-[18px] font-medium mb-[10px] lg:mb-4 lg:relative lg:z-20">
        <span className="inline-block pt-[5px]">Vancouver Downtown</span>
        <span className="inline-block pt-[5px]">10 min drive</span>
      </div>
      <div className="px-5 lg:flex lg:items-center lg:gap-x-5 lg:flex-wrap lg:px-0">
        <div className="flex items-center leading-[18px] text-[14px] lg:relative lg:z-20">
          <span className="font-light">Weight : &nbsp;</span>
          <span className="font-bold ">{weight}</span>
        </div>
        <div className="flex items-center leading-[18px] text-[14px] lg:relative lg:z-20">
          <span className="font-light">Pick up at : &nbsp;</span>
          <span className="font-bold ">{pickUp}</span>
        </div>
        <div className="flex items-center leading-[18px] text-[14px] lg:relative lg:z-20">
          <span className="font-light">Floor : &nbsp;</span>
          <span className="font-bold ">{floor}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationBox;

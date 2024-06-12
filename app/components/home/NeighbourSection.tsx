"use client";

import { useUser } from "@/app/hooks/useUser";
import OrangeCircle from "../svgs/OrangeCircle";
import NeighbourMap from "./NeighbourMap";

import "leaflet/dist/leaflet.css";
interface Product {
  id: number;
  title: string;
  lat: number;
  lng: number;
}

interface NeighbourProps {
  data: Product[][];
}

const Neighbour = ({ data }: NeighbourProps) => {
  const { isLoggedIn } = useUser();

  return (
    <div className="px-3 max-width relative z-0 lg:px-20 lg:py-[50px] lg:first-letter:mt-20">
      {isLoggedIn && (
        <h2 className="mb-[22px] text-[35px] leading-[30px] font-light lg:text-[65px] lg:leading-[10px] lg:mb-0">
          near me
        </h2>
      )}
      <div className="w-full gap-y-[22px] lg:h-auto lg:flex-row lg:gap-x-[70px] lg:relative lg:pt-[50px] lg:grid lg:grid-cols-2 lg:auto-rows-auto lg:px-0">
        {!isLoggedIn && (
          <>
            <div className="heading neighbour__heading">
              <h2>
                Find Freethings <br />
                <b className="font-bold">in your neighbour</b>
              </h2>
            </div>
            <div className="col-start-1 row-start-3 row-end-4 lg:relative lg:z-20 lg:row-start-2 lg:row-end-3">
              <p className="paragraph mb-5 truncate__text lg:max-w-[680px] lg:mb-[60px]">
                Unearth hidden gems right in your neighborhood! Enable location
                access to discover valuable items near you with ease. Your city
                is brimming with treasures waiting to be found, so why not let
                our app lead you to them? Enable location services and embark on
                a treasure hunt like no other. Start exploring your surroundings
                today!
              </p>
              <button type="button" className="btn mb-3 lg:mb-0">
                Enable Location access
              </button>
            </div>
          </>
        )}
        <div
          className={`map__border w-full lg:relative lg:z-20 lg:row-start-1 lg:row-end-3 lg:h-[470px] ${
            isLoggedIn && "lg:col-span-2"
          }`}
        >
          {isLoggedIn && (
            <NeighbourMap
              data={data}
              className="h-[225px] mb-[22px] rounded-[10px] lg:mb-0 focus:outline-none lg:h-[460px] lg:w-[1260px]"
            />
          )}
          {!isLoggedIn && (
            <NeighbourMap
              data={data}
              className="h-[225px] w-full mb-[22px] rounded-[10px] lg:mb-0 lg:h-full focus:outline-none"
            />
          )}
        </div>
        {isLoggedIn && (
          <button
            type="button"
            className="flex items-center justify-center w-full text-[15px] leading-[10px] font-bold rounded-[10px] px-[30px] py-[14px] border border-gray-main lg:hidden"
          >
            See more
          </button>
        )}
        <div className="hidden lg:block lg:absolute lg:-top-8 lg:-left-[15.25rem]">
          <OrangeCircle />
        </div>
      </div>
    </div>
  );
};

export default Neighbour;

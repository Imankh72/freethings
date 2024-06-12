import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";
import httpService from "../services/http";

interface UseLocationInterface {
  latitude: number;
  longitude: number;
  radius: number;
}

interface LocationStateInterface {
  lat: number;
  lng: number;
  radius: number;
  setLocation: (lat: number, lng: number) => void;
  setRadius: (value: number) => void;
}

export const useLocation = () => {
  // const { data } = useQuery<UseLocationInterface>({
  //   queryKey: ["location"],
  //   queryFn: async () => {
  //     const {
  //       data: { data },
  //     } = await httpService("/v1/setting/defaultlocation");
  //     return data;
  //   },
  //   staleTime: 60 * 60 * 24 * 1000,
  // });

  const locationState = create<LocationStateInterface>((set) => ({
    lat: 49.2497,
    lng: -123.1193,
    radius: 10000000,
    setLocation: (lat: number, lng: number) => {
      set({ lat, lng });
    },
    setRadius: (value) => {
      set({ radius: value });
    },
  }));

  const { lat, lng, radius, setLocation, setRadius } = locationState();

  return {
    lat,
    lng,
    radius,
    setLocation,
    setRadius,
  };
};

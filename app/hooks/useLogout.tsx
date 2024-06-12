import { getCookie, deleteCookie } from "cookies-next";
import httpService from "../services/http";
import { useUser } from "./useUser";

export const useLogout = () => {
  const { setIsLoggedIn } = useUser();

  const handleLogout = async () => {
    await httpService.put(
      "/v1/user/logout",
      {
        deviceId: getCookie("device_id"),
      },
      {
        headers: {
          Authorization: `${getCookie("user_token")}`,
        },
      }
    );
    deleteCookie("user_token");
    deleteCookie("device_id");
    setIsLoggedIn(false);
  };

  return { handleLogout };
};

import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useUser } from "./useUser";

export const useAuthentication = () => {
  const [isClient, setIsClient] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useUser();

  useEffect(() => {
    setIsClient(true);
    getCookie("user_token") ? setIsLoggedIn(true) : setIsLoggedIn(false);

    if (!isLoggedIn && isClient) {
      redirect("/login");
    }
  }, [setIsLoggedIn, isLoggedIn, isClient]);

  return { isLoggedIn, isClient };
};

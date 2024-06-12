import { useCallback } from "react";
import { Campaign } from "../interface/campaign";

export const useCampaign = () => {
  const getCampaignProducts = useCallback((data: Campaign[], title: string) => {
    return data?.filter((category: Campaign) => category.title === title)[0];
  }, []);

  const getCampaignLogo = useCallback((data: Campaign[], title: string) => {
    return data?.filter((category: Campaign) => category.title === title)[0]
      ?.logoUrl;
  }, []);

  return {
    getCampaignLogo,
    getCampaignProducts,
  };
};

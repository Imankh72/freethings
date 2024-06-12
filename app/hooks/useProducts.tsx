"use client";

import { Campaign } from "../interface/campaign";
import http from "../services/http";
import { useLocation } from "./useLocation";
import { useSearch } from "./useSearch";
import { getCookie } from "cookies-next";

import {
  Product,
  ProductDetails,
  SearchProductsData,
} from "../interface/product";
import { useAddItem } from "./useAddItem";

interface GetProductDetailsInterface {
  data: {
    data: ProductDetails;
  };
}

interface GetAllHomePageProductsInterface {
  data: {
    data: Campaign[];
  };
}

export const useProducts = () => {
  const { lat, lng, radius } = useLocation();
  const { searchValue } = useSearch();
  const { inputValues } = useAddItem();

  const getAllHomePageProducts = async () => {
    const {
      data: { data },
    }: GetAllHomePageProductsInterface = await http(
      `/v1/product/homepageproductlist/${lat}/${lng}/${radius}`,
      {
        headers: {
          Authorization: `${getCookie("user_token")}`,
        },
      }
    );

    return data;
  };

  const getProductDetails = async (id: number) => {
    const { data }: GetProductDetailsInterface = await http(
      `/v1/product/productdetail/${id}`
    );

    return data;
  };

  const getSimilarProducts = async (id: number) => {
    const { data } = await http(`/v1/product/similarproductbyproductid/${id}`);
    return data;
  };

  const getProductsBySearch = async (
    value?: string,
    pageNumber: number = 1
  ) => {
    const { data }: SearchProductsData = await http(
      `/v1/product/productlistbysearch/${lat}/${lng}/${radius}/${pageNumber}?phrase=${
        searchValue ? searchValue : value
      }`
    );

    return data;
  };

  const getProductsByPage = async (pageNumber: number = 1) => {
    const {
      data: {
        data: { model },
      },
    }: {
      data: {
        data: {
          model: Product[];
        };
      };
    } = await http(
      `/v1/product/latestproductlist/${lat}/${lng}/${radius}/${pageNumber}`
    );
    return model;
  };

  const getProductListByCategory = async (
    categoryId: number,
    pageNumber: number = 1
  ) => {
    const { data } = await http(
      `/v1/product/productlistbycategory/${lat}/${lng}/${radius}/${categoryId}/${pageNumber}`
    );

    return data;
  };

  const getUserProductRequestList = async () => {
    const {
      data: { data },
    } = await http("v1/product/userproductrequestlist", {
      headers: {
        Authorization: `${getCookie("user_token")}`,
      },
    });
    return data;
  };

  const getUserProductList = async () => {
    const {
      data: { data },
    }: {
      data: {
        data: Product[];
      };
    } = await http("v1/product/userproductlist", {
      headers: {
        Authorization: `${getCookie("user_token")}`,
      },
    });
    return data;
  };

  const getUserSpotProductList = async () => {
    const {
      data: { data },
    }: {
      data: {
        data: {
          id: number;
          categoryTitle: string;
          imageUrl: string;
        }[];
      };
    } = await http("v1/spotproduct/userspotproductlist", {
      headers: {
        Authorization: `${getCookie("user_token")}`,
      },
    });
    return data;
  };

  const getBookmarkProductList = async () => {
    const {
      data: { data },
    }: {
      data: {
        data: Product[];
      };
    } = await http("/v1/product/bookmarkproductlist", {
      headers: {
        Authorization: `${getCookie("user_token")}`,
      },
    });

    return data;
  };

  const addProduct = async () => {
    const response = await http.post(
      "/v1/product/addproduct",
      {
        ...inputValues,
        dateList: "asdasdas",
      },
      {
        headers: {
          Authorization: `${getCookie("user_token")}`,
        },
      }
    );
    return response;
  };

  return {
    getAllHomePageProducts,
    getProductDetails,
    getSimilarProducts,
    getProductsBySearch,
    getProductsByPage,
    getProductListByCategory,
    getUserProductRequestList,
    getUserProductList,
    getUserSpotProductList,
    getBookmarkProductList,
    addProduct,
  };
};

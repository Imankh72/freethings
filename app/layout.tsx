import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import QueryClientProvider from "./QueryClientProvider";

import "./globals.css";
import "react-day-picker/dist/style.css";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/poppins-thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/poppins-extraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/poppins-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/poppins-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/poppins-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/poppins-semiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/poppins-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/poppins-extraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/poppins-black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/inter-thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-extraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-semiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-extraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Freethings",
  description: "everything is free here",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

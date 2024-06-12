"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { BreadCrumbSeparator } from "../svgs/BreadCrumbSeparator";

const BreadCrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="text-gray-500 relative z-30">
      <ul className="flex items-center lg:mb-[10px]">
        <li className="mx-2 transition-all duration-300">
          <Link href={"/"}>Home</Link>
        </li>
        {pathNames.length > 0 && <BreadCrumbSeparator />}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? "mx-[10px] font-bold text-gray-main" : "mx-2";
          let displayText =
            (pathNames[0] === "product-details" ||
              pathNames[0] === "categories") &&
            index === pathNames.length - 1
              ? pathNames[1]
                  .split("-")
                  .filter(
                    (_, index) => index !== pathNames[1].split("-").length - 1
                  )
                  .join(" ")
                  .replace(/[-%]/g, " ")
              : link.replace(/-/g, " ");
          return (
            <Fragment key={index}>
              <li className={`capitalize ${itemClasses}`}>
                <Link href={href}>{displayText}</Link>
              </li>
              {pathNames.length !== index + 1 && <BreadCrumbSeparator />}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumb;

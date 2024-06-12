"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileTab: FC = () => {
  const pathName = usePathname();
  const slug = pathName?.split("/").at(-1);
  const [selectedTab, setSelectedTab] = useState<string>(slug);

  useEffect(() => {
    setSelectedTab(slug);
  }, [slug]);

  return (
    <>
      <div className="flex items-center justify-between text-center pr-5 max-width lg:mb-2 lg:pr-0 lg:overflow-hidden lg:relative lg:z-20 lg:px-20">
        {data.map(({ id, slug, title }) => (
          <div
            key={id}
            className="flex flex-1 flex-col gap-y-[10px] lg:h-10 lg:gap-y-0"
          >
            <div className="flex flex-col gap-y-[10px] h-11 lg:h-20">
              <Link
                href={`/profile/${slug}`}
                className={`inline-block leading-[18px] font-medium whitespace-nowrap px-2 transition-all duration-300 ${
                  selectedTab === slug ? "text-black" : "text-gray-light"
                } lg:text-[22px]`}
                onClick={() => setSelectedTab(slug)}
              >
                {title}
              </Link>
              <span
                className={`w-full inline-block h-1 rounded-full transition-all duration-300 ${
                  selectedTab === slug ? "bg-black" : "bg-transparent"
                }`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileTab;

const data = [
  { id: 1, title: "Requests", slug: "requests" },
  { id: 2, title: "My Listings", slug: "my-listings" },
  { id: 3, title: "Saved Items", slug: "saved-items" },
];

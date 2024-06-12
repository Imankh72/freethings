import Link from "next/link";
import { FreethingsLogo } from "../svgs/Freethings";
import footerImage from "@/public/images/footer-image.png";
import Image from "next/image";
import FooterSearchInput from "./FooterSearchInput";

const Footer = () => {
  return (
    <footer className="hidden lg:bg-[#0B1022] lg:py-[81px] lg:px-20 lg:flex lg:gap-x-[77px] lg:relative lg:footer__gradient lg:mx-auto">
      <div className="lg:flex lg:gap-x-[77px] lg:relative lg:w-full max-width">
        <div className="w-[701px]">
          <Link href="/" className="inline-block mb-[77px]">
            <FreethingsLogo />
          </Link>
          <p className="text-[#EBEBEB] text-[24px] font-bold leading-[58px] mb-5">
            be first to know about freethings around you.
          </p>
          <FooterSearchInput />
        </div>
        <div className="flex text-white gap-x-[77px]">
          {footerLinks.map(({ id, title }) => (
            <Link
              href="/"
              key={id}
              className="text-[24px] leading-[58px] font-semibold whitespace-nowrap -mt-4"
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="absolute lg:right-0 lg:top-20 3xl:top-0 3xl:-right-44">
          <Image src={footerImage} alt="footer-image" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerLinks = [
  { id: 1, title: "About" },
  { id: 2, title: "Contact Us" },
  { id: 3, title: "Our Story" },
];

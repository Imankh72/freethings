import Link from "next/link";
import { FreethingsLogo } from "../../svgs/Freethings";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-[50px] mb-[10px] max-width">
      <Link href="/" className="inline-block">
        <FreethingsLogo />
      </Link>
      <Navbar />
    </header>
  );
};
export default Header;

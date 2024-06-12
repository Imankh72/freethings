interface HamburgerMenuButtonProp {
  isLoggedIn?: boolean;
  isPDPPage?: boolean;
  setIsOpen: (value: boolean) => void;
}

const HamburgerMenuButton = ({
  isLoggedIn = false,
  setIsOpen,
  isPDPPage = false,
}: HamburgerMenuButtonProp) => {
  const handleOnClick = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  return (
    <button type="button" onClick={handleOnClick}>
      <div className="hamburger-menu__container">
        <span
          className={`hamburger-menu__line bg-[#0ECAF6] ${
            isLoggedIn
              ? "lg:bg-[#93BAEC]"
              : isPDPPage
              ? "lg:bg-[#1977F2]"
              : "lg:bg-white"
          }`}
        ></span>
        <span
          className={`hamburger-menu__line bg-[#FF823F] ${
            isLoggedIn
              ? "lg:bg-[#0ECAF6]"
              : isPDPPage
              ? "lg:bg-[#077169]"
              : "lg:bg-white"
          }`}
        ></span>
        <span
          className={`hamburger-menu__line bg-[#FEBA0D] ${
            isLoggedIn
              ? "lg:bg-[#F9DA8B]"
              : isPDPPage
              ? "bg-[#FFB800]"
              : "lg:bg-white"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerMenuButton;

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface MenuBtnBoxProps {
  text: string;
  url: string;
  icon: ReactNode;
  setIsOpen: (value: boolean) => void;
}

const MenuBtnBox = ({ text, icon, url, setIsOpen }: MenuBtnBoxProps) => {
  const router = useRouter();

  const handleOnClick = (url: string) => {
    router.push(`/${url}`);
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div
      className="px-[51px] py-[22px] flex flex-col items-center justify-center gap-y-[10px] bg-gray-100 rounded-[40px] w-full cursor-pointer"
      onClick={() => handleOnClick(url)}
    >
      {icon}
      <span className="text-[22px] font-medium">{text}</span>
    </div>
  );
};

export default MenuBtnBox;

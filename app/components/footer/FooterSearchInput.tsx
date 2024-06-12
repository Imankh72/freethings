const FooterSearchInput = () => {
  return (
    <div className="w-full">
      <div className="w-[318px] flex items-center footerInput__border">
        <input
          type="text"
          className="px-10 bg-[#0b1022] rounded-tl-[25px] rounded-bl-[25px] text-grey-main leading-[58px] font-light text-white text-[20px] border-r-0 border-[1.5px] border-transparent focus:outline-none"
          placeholder="please enter your email"
        />
        <button
          type="button"
          className="bg-white w-[154px] text-gray-main flex items-center justify-center px-10 py-[1px] rounded-tr-[25px] rounded-br-[25px] text-[24px] leading-[58px] font-semibold whitespace-nowrap"
        >
          Sign Up!
        </button>
      </div>
    </div>
  );
};
export default FooterSearchInput;

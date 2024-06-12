interface BreadCrumbSeparatorProp {
  mobile?: boolean;
}

export const BreadCrumbSeparator = ({
  mobile = false,
}: BreadCrumbSeparatorProp) => {
  return (
    <svg
      className={`${mobile ? "w-6 h-6 rotate-180" : "w-4 h-4"}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00008 3.33329L10.6667 7.99996L6.00008 12.6666"
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

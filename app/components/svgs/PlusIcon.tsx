interface PlusIconProp {
  isGreen?: boolean;
  className?: string;
}

const PlusIcon = ({ isGreen = false, className }: PlusIconProp) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.3335 12H18.3335M12.3335 18L12.3335 6"
        stroke={`${isGreen ? "#077169" : "white"}`}
        strokeWidth={`${isGreen && "4"}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default PlusIcon;

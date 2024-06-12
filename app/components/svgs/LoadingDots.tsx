export const LoadingDots = () => {
  return (
    <svg
      width="45"
      height="8"
      viewBox="0 0 45 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4.5" cy="4" r="4" fill="url(#paint0_linear_722_1623)" />
      <circle cx="22.5" cy="4" r="4" fill="#FF823F" />
      <circle opacity="0.5" cx="40.5" cy="4" r="4" fill="#077169" />
      <defs>
        <linearGradient
          id="paint0_linear_722_1623"
          x1="0.5"
          y1="0"
          x2="10.2509"
          y2="3.2738"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBBC1D" />
          <stop offset="1" stopColor="#FFB800" />
        </linearGradient>
      </defs>
    </svg>
  );
};

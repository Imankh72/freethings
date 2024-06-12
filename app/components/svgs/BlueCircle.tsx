interface BlueCircleProps {
  className?: string;
}

export const BlueCircle = ({ className }: BlueCircleProps) => {
  return (
    <svg
      className={className}
      width="797"
      height="797"
      viewBox="0 0 797 797"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1368_10584)">
        <path
          d="M703 398.5C703 566.671 566.671 703 398.5 703C230.329 703 94 566.671 94 398.5C94 230.329 230.329 94 398.5 94C566.671 94 703 230.329 703 398.5ZM219.564 398.5C219.564 497.324 299.676 577.436 398.5 577.436C497.324 577.436 577.436 497.324 577.436 398.5C577.436 299.676 497.324 219.564 398.5 219.564C299.676 219.564 219.564 299.676 219.564 398.5Z"
          fill="#C2CFE8"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1368_10584"
          x="0"
          y="0"
          width="797"
          height="797"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="47"
            result="effect1_foregroundBlur_1368_10584"
          />
        </filter>
      </defs>
    </svg>
  );
};

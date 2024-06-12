interface Prop {
  mobile?: boolean;
}

export const GreenCircle = ({ mobile = false }: Prop) => {
  return (
    <>
      {mobile ? (
        <svg
          width="256"
          height="378"
          viewBox="0 0 256 378"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_151_8419)">
            <circle cx="67" cy="189" r="95" fill="#CCE8C2" />
          </g>
          <defs>
            <filter
              id="filter0_f_151_8419"
              x="-122"
              y="0"
              width="378"
              height="378"
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
                result="effect1_foregroundBlur_151_8419"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          width="797"
          height="797"
          viewBox="0 0 797 797"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1368_10563)">
            <circle cx="398.5" cy="398.5" r="304.5" fill="#CCE8C2" />
          </g>
          <defs>
            <filter
              id="filter0_f_1368_10563"
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
                result="effect1_foregroundBlur_1368_10563"
              />
            </filter>
          </defs>
        </svg>
      )}
    </>
  );
};

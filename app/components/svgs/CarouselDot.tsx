interface ActiveProp {
  active?: boolean;
}

export const CarouselDot = ({ active = false }: ActiveProp) => {
  return (
    <>
      {!active && (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <circle opacity="0.7" cx="7.5" cy="8" r="7.5" fill="white" />
        </svg>
      )}
      {active && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <circle cx="10" cy="10" r="10" fill="white" />
        </svg>
      )}
    </>
  );
};

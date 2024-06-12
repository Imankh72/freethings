interface RatingStarProp {
  allRequestsModal?: boolean;
}

const RatingStar = ({ allRequestsModal = false }: RatingStarProp) => {
  return (
    <svg
      className={`w-[10px] h-[11px] ${
        allRequestsModal ? "w-[10px] h-[11px]" : "lg:w-[14px] lg:h-[15px]"
      } `}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00762 0.5C4.79421 0.5 4.5808 0.615234 4.47036 0.847656L3.24794 3.43359L0.512938 3.84766C0.022473 3.92187 -0.174088 4.55273 0.181593 4.91406L2.1603 6.92578L1.6923 9.76758C1.60806 10.2773 2.12286 10.666 2.56091 10.4258L5.00762 9.08594V0.5Z"
        fill="#FFC403"
      />
      <path
        d="M4.97675 0.5C5.19016 0.5 5.40357 0.615234 5.51402 0.847656L6.73644 3.43359L9.47144 3.84766C9.9619 3.92187 10.1585 4.55273 9.80278 4.91406L7.82407 6.92578L8.29207 9.76758C8.37631 10.2773 7.86151 10.666 7.42346 10.4258L4.97675 9.08594V0.5Z"
        fill="#FFC403"
      />
    </svg>
  );
};
export default RatingStar;

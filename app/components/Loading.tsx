import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <DotLoader
        loading
        color="#0082fd"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;

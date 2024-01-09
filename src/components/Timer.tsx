import type { NextPage } from "next";

const Timer: NextPage = () => {
  return (
    <div className="absolute w-20 h-20 rounded-full border-2 border-goldenrod bg-questionMarkGray text-white text-3xl font-bold flex justify-center items-center top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        100
    </div>
  );
};

export default Timer;
import { NextPage } from 'next';
import { useState, useEffect } from 'react';

const Timer: NextPage = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining(prevSeconds => Math.max(0, prevSeconds - 1)); // Ensure value stays non-negative
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute w-20 h-20 rounded-full border-2 border-goldenrod bg-questionMarkGray text-white text-3xl font-bold flex justify-center items-center top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {secondsRemaining}
    </div>
  );
};

export default Timer;


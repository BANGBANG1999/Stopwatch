import React, { useRef, useEffect } from "react";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setTimerRunning(true);
  }

  function handlePause() {
    clearInterval(id.current);
    setTimerRunning(false);
  }

  // Function to format time in MM:SS format
  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  return (
    <div className="bg-[#000000] w-[100vw] h-[100vh]">
      <div className="border-5 border-solid absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 text-center ">
        <div className="text-9xl italic text-[#FF9500]">{formatTime(time)}</div>
        <div className="my-4">
          <button
            className="w-[6rem] h-[3rem] rounded mx-3 bg-[#59B87E]"
            onClick={() => {
              clearInterval(id.current);
              setTime(0);
              setTimerRunning(false);
            }}
          >
            Reset
          </button>
          {/* <button
            className="w-[6rem] h-[3rem] rounded mx-3 bg-[#FBAD10]"
            onClick={handlePause}
          >
            Pause
          </button> */}
          {!timerRunning ? (
            <button
              className="w-[6rem] h-[3rem] bg-pink-400 rounded"
              onClick={handleTime}
            >
              Start
            </button>
          ) : (
            <button
              className="w-[6rem] h-[3rem] bg-pink-400 rounded"
              onClick={handlePause}
            >
              Pause
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

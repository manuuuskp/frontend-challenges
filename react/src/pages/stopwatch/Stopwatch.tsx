import React, { useRef, useState } from "react";
import "./../styles/Stopwatch.css";

const StopWatch = () => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [isStart, setIsStart] = useState(false);
  let timerRef: any = useRef();

  const handleStart = () => {
    setIsStart(true);
    timerRef.current = setInterval(run, 100);
  };

  let { h: uh, m: um, s: us, ms: ums } = time;
  function run() {
    ums += 10;
    if (ums === 100) {
      ums = 0;
      us += 1;
      if (us === 60) {
        us = 0;
        um += 1;
        if (um === 60) {
          um = 0;
          uh += 1;
        }
      }
    }
    return setTime({ h: uh, m: um, s: us, ms: ums });
  }

  const handleStop = () => {
    clearInterval(timerRef.current);
    setIsStart(false);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsStart(false);
    setTime({ h: 0, m: 0, ms: 0, s: 0 });
  };

  const { h, m, s, ms } = time;

  return (
    <div className="stopwatch__container">
      <div className="stopwatch__clockContainer">
        {h >= 0 && (
          <>
            <span className="stopwatch__count">{h > 9 ? h : `0${h}`}</span>
            <span className="stopwatch__lbl">h</span>
          </>
        )}
        {m >= 0 && (
          <>
            <span className="stopwatch__count">{m > 9 ? m : `0${m}`}</span>
            <span className="stopwatch__lbl">m</span>
          </>
        )}
        <span className="stopwatch__count">{s > 9 ? s : `0${s}`}</span>
        <span className="stopwatch__lbl">s</span>
        <span className="stopwatch__milliSeconds">
          {ms > 9 ? ms : `0${ms}`}
        </span>
      </div>
      <div className="stopwatch__btnContainer">
        {!isStart && <button onClick={handleStart}>Start</button>}
        {isStart && <button onClick={handleStop}>Stop</button>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;

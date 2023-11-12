import React, { useEffect, useMemo, useState } from "react";
import { useTicTacToe } from "./useTicTacToe";

const TicTacBoard = () => {
  const { checkWin, checkDraw } = useTicTacToe();
  const arrCont = useMemo(() => Array.from({ length: 9 }), []);

  const [isCircle, setIsCircle] = useState(true);
  const [circleArr, setCircleArr] = useState<number[]>([]);
  const [crossArr, setCrossArr] = useState<number[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const activeClass = isCircle ? "circle" : "cross";

  useEffect(() => {
    const winner = checkWin(isCircle ? circleArr : crossArr);
    if (!winner) {
      const draw = checkDraw(circleArr, crossArr);
      setIsDraw(draw);
    } else {
      setIsWon(winner);
    }
    setIsCircle(!isCircle);
  }, [circleArr, crossArr]);

  const handleCellClick = (e: any, index: number) => {
    e.target.classList.add(activeClass);
    isCircle
      ? setCircleArr((prev) => [...prev, index])
      : setCrossArr((prev) => [...prev, index]);
  };

  const handleReset = () => {
    setCircleArr([]);
    setCrossArr([]);
    setIsWon(false);
    setIsCircle(true);
  };

  if (isDraw) {
    return (
      <>
        <h1>{`Match Drawn`}</h1>
        <button onClick={handleReset}>Reset</button>
      </>
    );
  }

  if (isWon) {
    return (
      <>
        <h1>{`Match Won by ${isCircle ? "Cross" : "Circle"}`}</h1>
        <button onClick={handleReset}>Reset</button>
      </>
    );
  }

  return (
    <div className={`tictactoe__boardContainer ${activeClass}`}>
      {arrCont.map((_, index) => {
        return (
          <div
            key={index}
            onClick={(e) => handleCellClick(e, index)}
            className="tictactoe__cell"
          ></div>
        );
      })}
    </div>
  );
};

export default TicTacBoard;

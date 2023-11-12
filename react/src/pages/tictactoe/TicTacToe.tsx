import React from "react";
import TicTacBoard from "../../component/tictactoe/TicTacBoard";

import "./../styles/TicTacToe.css";

const TicTacToe = () => {
  return (
    <div className="tictactoe__container">
      <TicTacBoard />
    </div>
  );
};

export default TicTacToe;

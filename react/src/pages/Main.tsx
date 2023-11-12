import React from "react";
import { Link } from "react-router-dom";
import RoutesComp from "../RoutesComp";

const Main = () => {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Link to="starrating">Star Rating</Link>
      <Link to="fileexplorer">File Explorer</Link>
      <Link to="stopwatch">Stopwatch</Link>
      <Link to="accordion">Accordion</Link>
      <Link to="tictactoe">Tic Tac Toe</Link>
      <RoutesComp />
    </div>
  );
};

export default Main;

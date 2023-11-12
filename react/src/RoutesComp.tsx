import React from "react";
import { Route, Routes } from "react-router";
import StarRating from "./pages/StarRating";
import FileExplorer from "./pages/fileexplorer/FileExplorer";
import StopWatch from "./pages/stopwatch/Stopwatch";
import AccordionComp from "./pages/accodion/AccordionComp";
import TicTacToe from "./pages/tictactoe/TicTacToe";

const RoutesComp = () => {
  return (
    <Routes>
      <Route path="starrating" element={<StarRating total={10} />} />
      <Route path="fileexplorer" element={<FileExplorer />} />
      <Route path="stopwatch" element={<StopWatch />} />
      <Route path="accordion" element={<AccordionComp />} />
      <Route path="tictactoe" element={<TicTacToe />} />
    </Routes>
  );
};

export default RoutesComp;

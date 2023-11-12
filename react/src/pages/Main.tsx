import React from "react";
import { Link } from "react-router-dom";
import RoutesComp from "../RoutesComp";

const Main = () => {
  return (
    <>
      <Link to="starrating">Star Rating</Link>
      <Link to="fileexplorer">File Explorer</Link>
      <Link to="stopwatch">Stopwatch</Link>
      <Link to="accordion">Accordion</Link>
      <RoutesComp />
    </>
  );
};

export default Main;

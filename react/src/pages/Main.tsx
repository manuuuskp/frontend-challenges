import React from "react";
import { Link } from "react-router-dom";
import RoutesComp from "../RoutesComp";

const Main = () => {
    return (
        <>
            <Link to="starrating">Star Rating</Link>
            <Link to="fileexplorer">File Explorer</Link>
            <Link to="stopwatch">Stopwatch</Link>
            <RoutesComp />
        </>
    )
}

export default Main;
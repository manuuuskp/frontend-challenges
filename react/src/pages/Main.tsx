import React from "react";
import { Link } from "react-router-dom";
import RoutesComp from "../RoutesComp";
import StarRating from "./StarRating";

const Main = () => {
    return (
        <>
            <Link to="starrating">Star Rating</Link>
            <RoutesComp />
        </>
    )
}

export default Main;
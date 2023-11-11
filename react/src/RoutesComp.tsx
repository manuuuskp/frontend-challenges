import React from "react"
import { Route, Routes } from "react-router"
import StarRating from "./pages/StarRating"

const RoutesComp = () => {
    return (
            <Routes>
                <Route path="starrating" element={<StarRating total={10} />}/>
            </Routes>
    )
}

export default RoutesComp
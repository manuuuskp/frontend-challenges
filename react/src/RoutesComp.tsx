import React from "react"
import { Route, Routes } from "react-router"
import StarRating from "./pages/StarRating"
import FileExplorer from "./pages/fileexplorer/FileExplorer"

const RoutesComp = () => {
    return (
            <Routes>
                <Route path="starrating" element={<StarRating total={10} />}/>
                <Route path="fileexplorer" element={<FileExplorer />}/>
            </Routes>
    )
}

export default RoutesComp
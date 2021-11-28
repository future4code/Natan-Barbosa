import React from "react";

import { Routes, Route } from "react-router-dom";

import MegaSenaPage from "../Pages/MegaSenaPage/MegaSenaPage";
import QuinaPage from "../Pages/QuinaPage/QuinaPage";
import LotofacilPage from "../Pages/LotofacilPage/LotofacilPage";
import LotomaniaPage from "../Pages/LotomaniaPage/LotomaniaPage";
import DiaDeSortePage from "../Pages/DiaDeSortePage.jsx/DiaDeSortePage";
import TimemaniaPage from "../Pages/TimemaniaPage.jsx/TimemaniaPage";

const AppRouter = () => {

    return (

        <Routes>
            <Route path="/" element={<MegaSenaPage />} />
            <Route path="/quina" element={<QuinaPage />} />
            <Route path="/lotofacil" element={<LotofacilPage />} />
            <Route path="/lotomania" element={<LotomaniaPage />} />
            <Route path="/dia-de-sorte" element={<DiaDeSortePage />} />
            <Route path="/timemania" element={<TimemaniaPage />} />
        </Routes>

    )
}

export default AppRouter
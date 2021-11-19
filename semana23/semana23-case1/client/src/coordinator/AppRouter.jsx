import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ManagePage from "../pages/ManagePage/ManagePage";
import ReportPage from "../pages/ReportPage/ReportPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/manage-conteiner" element={<ManagePage />} />
                <Route path="/get-report" element={<ReportPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
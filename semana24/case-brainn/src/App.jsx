import React from "react";
import AppRouter from "./AppRouter/AppRouter";
import MainHeader from "./Components/MainHeader";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <MainHeader />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
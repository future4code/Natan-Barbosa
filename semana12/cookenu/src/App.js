import React from "react";
import { Router } from "./router/Router"
import { ThemeProvider } from "@material-ui/styles";
import TemaMaterial from "./constants/TemaMaterial"
import { useState } from "react";
import { Header } from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token")

  const [rightButtonText, setRightButton] = useState(token ? "Logout" : "Login")

  return (
    <div>
      <ThemeProvider theme={TemaMaterial}>
        <BrowserRouter>
          <Header rightButtonText={rightButtonText} setRightButton={setRightButton} />
          <Router setRightButton={setRightButton} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

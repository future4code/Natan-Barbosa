import React from "react";
import { Router } from "./router/Router"
import { ThemeProvider } from "@material-ui/styles";
import TemaMaterial from "./constants/TemaMaterial"

function App() {
  return (
    <div>
      <ThemeProvider theme={TemaMaterial}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;

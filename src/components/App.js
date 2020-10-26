import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";
import Header from "../components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <p>Hello!</p>
    </ThemeProvider>
  );
}

export default App;

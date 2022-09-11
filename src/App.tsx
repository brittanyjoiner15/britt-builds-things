import React from "react";
import "./App.css";
import Home from "./components/Home";
import { EuiButton, EuiProvider } from "@elastic/eui";

function App() {
  return (
    <div className="App">
      <EuiProvider colorMode="light">
        <Home />
      </EuiProvider>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./components/Home";
import { EuiProvider } from "@elastic/eui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <EuiProvider colorMode="light">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </EuiProvider>
    </div>
  );
}

export default App;

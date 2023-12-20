import React from "react";
import "./App.css";
import { useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

function App() {
  const [page, setPage] = useState("LandingPage");

  return (
    <div className="App">
      {page === "LandingPage" ? (
        <LandingPage>
          <button
            className="topContainerButton"
            onClick={() => setPage("HomePage")}
          >
            Start
          </button>
        </LandingPage>
      ) : (
        <HomePage>
          <button className="buttonHome" onClick={() => setPage("LandingPage")}>
            Início
          </button>
        </HomePage>
      )}
    </div>
  );
}

export default App;

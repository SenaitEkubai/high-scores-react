import React from "react";
import "./App.css";
import HighScoreTables from "./HighScoreTables";
import WorldWideTable from "./WorldWideTable";

function App() {
  return (
    <div className="App">
      <WorldWideTable />
      <HighScoreTables />
    </div>
  );
}

export default App;

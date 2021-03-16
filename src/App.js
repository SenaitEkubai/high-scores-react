import React from "react";
import "./App.css";
import SortButton from "./SortButton";

import HighScoreTables from "./HighScoreTables";

function App() {
  return (
    <div className="App">
      <SortButton />
      <HighScoreTables />
    </div>
  );
}

export default App;

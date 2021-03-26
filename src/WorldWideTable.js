import React, { useState } from "react";
import allCountryScores from "./allCountryScore";

function WorldWideTable() {
  let nameAndScoresArray = [];
  const [order, setSortOrder] = useState(1);
  const [buttonName, setButtonName] = useState("Ascending");

  /* this function change the button name when the button is clicked  and changes the sort order */

  function changeSortOrder() {
    setSortOrder((order) => order * -1);
    if (buttonName === "Ascending") {
      setButtonName((buttonName) => "Descending");
    } else {
      setButtonName((buttonName) => "Ascending");
    }
  }

  /* will map through the allcountryscores array and populate the namesandscoresarray */

  allCountryScores.map(
    (el) => (nameAndScoresArray = nameAndScoresArray.concat(el.scores))
  );

  nameAndScoresArray.sort((a, b) => {
    if (a.s < b.s) {
      return 1 * order;
    }
    return -1 * order;
  });

  return (
    <div className="world-wide" style={{ width: "38rem" }}>
      <h1>World Wide table</h1>
      <button className="bg-primary mb-3" onClick={changeSortOrder}>
        {buttonName}
      </button>
      <table className="table table-stripped text-center">
        <thead>
          <tr>
            <td>Name</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {nameAndScoresArray.map((el, index) => (
            <tr key={"n" + index}>
              <td>{el.n}</td>
              <td>{el.s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default WorldWideTable;

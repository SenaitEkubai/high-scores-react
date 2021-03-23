import React from "react";
import allCountryScores from "./allCountryScore";

function WorldWideTable() {
  return (
    <div style={{ width: "38rem" }}>
      <h4>World Wide table</h4>
      <table className="table table-stripped  text-center">
        <tbody>
          {allCountryScores.map((item) =>
            item.scores.map((el, index) => (
              <tr key={index}>
                <td>{el.n} </td>
                <td>{el.s}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
export default WorldWideTable;

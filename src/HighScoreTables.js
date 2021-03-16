import React from "react";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./allCountryScore";
import PlayerScore from "./PlayerScore";

const HighScoreTables = () => {
  allCountryScores.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });
  return (
    <div className="card ml-auto mr-auto" style={{ width: "38rem" }}>
      <h1 className="card-title">High Scores Per Country</h1>
      {allCountryScores.map((item) => (
        <>
          <HighScoreTable name={item.name} />
          {item.scores
            .sort((a, b) => {
              if (a.s < b.s) {
                return -1;
              }
              return 1;
            })
            .map((el) => (
              <PlayerScore n={el.n} s={el.s} />
            ))}
        </>
      ))}
    </div>
  );
};
export default HighScoreTables;

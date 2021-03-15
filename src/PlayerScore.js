import React from "react";

const PlayerScore = (props) => {
  return (
    <div>
      <table class="table table-stripped table-dark  text-center">
        <tbody>
          <tr>
            <td>{props.n} </td>
            <td>{props.s}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PlayerScore;

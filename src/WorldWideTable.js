import React from "react";

function WorldWideTable(props) {
  return (
    <table className="table table-stripped  text-center">
      <tbody>
        <tr>
          <td>{props.n} </td>
          <td>{props.s}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default WorldWideTable;

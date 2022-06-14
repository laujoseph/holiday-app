import React from "react";

const Main = () => {
  return (
    <div>
      <div>
        <h1>Holidays</h1>
        <form>
          <fieldset>
            <legend>Add</legend>
            <label htmlFor="holiday">Name</label>
            <input id="holiday" name="holiday" />
            <button>Add a holiday</button>
          </fieldset>
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>World Kindness Day</td>
              <td>9999</td>
              <td>Like</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>Bathtub Party Day</td>
              <td>12583</td>
              <td>Like</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;

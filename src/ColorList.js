import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>Color List</h1>
      <h3>Please Select a Color to View</h3>
      <ul>
        {colors.map(color => (
          <li key={color.id}>
            <Link to={`/colors/${color.color}`}>{color.color}</Link>
          </li>
        ))}
      </ul>
      <h5>
        <Link to="/colors/new">Add a Color</Link>
      </h5>
    </div>
  );
}

export default ColorList;
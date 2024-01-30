import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

const Color = ({ colors }) => {
  const { color } = useParams();
  const colorEntry = colors.find(c => c.name === color);

  if (!colorEntry) {
    return <Navigate to="/colors" />;
  }

  return (
    <div className="Color" style={{ backgroundColor: colorEntry.hex }}>
      <p>this is {colorEntry.name}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/colors">Go back</Link>
      </p>
    </div>
  );
}

export default Color;
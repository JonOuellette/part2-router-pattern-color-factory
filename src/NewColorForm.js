import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({ name: "", hex: "#ffffff" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name: formData.name, hex: formData.hex });
    navigate("/colors");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter color name"
        required
      />
      <label htmlFor="hex">Color Hex:</label>
      <input
        type="color"
        id="hex"
        name="hex"
        value={formData.hex}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Color</button>
    </form>
  );
}

export default NewColorForm;
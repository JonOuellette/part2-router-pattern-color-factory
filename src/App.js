import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';
import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';

function App() {
  const [colors, setColors] = useState([
    { id: uuid(), color: "red", hex: "#ff0000" },
    { id: uuid(), color: "green", hex: "#00FF00" },
    { id: uuid(), color: "blue", hex: "#0000FF" }
    
  ]);

  const addColor = (newColor) => {
    setColors(colors => [...colors, { ...newColor, id: uuid() }]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
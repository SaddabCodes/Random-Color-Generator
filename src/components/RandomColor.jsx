import React, { useState } from "react";
import "./RandomColor.css"

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRgb() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div  className="container" style={{background: color,}}
    >
      <button className="btn-hex" onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button className="btn-rgb" onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        className="btn" onClick={typeOfColor === "hex" ? handleCreateHex : handleCreateRgb}
      >
        Generate Random Color
      </button>

      <div style={{ marginTop: "30px" }}>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

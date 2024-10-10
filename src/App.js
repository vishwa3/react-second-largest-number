import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState();
  const inputValueArray = inputValue.split(",");
  function findSecondLargest() {
    if (inputValue.length < 2) {
      setResult("Enter atleast 2 numbers");
      return;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < inputValueArray.length; i++) {
      const element = Number(inputValueArray[i]);
      if (element > largest) {
        secondLargest = largest;
        largest = element;
      } else if (element < largest && element >= secondLargest) {
        secondLargest = element;
      }
    }
    setResult(secondLargest);
  }
  return (
    <div
      className="app_container"
      style={{
        padding: "4rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
      }}
    >
      <h2>Second Largest Number Finder</h2>
      <p style={{ fontSize: "1.2rem" }}>
        Enter comma separated numbers in the below textbox and see the magic
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <input
          style={{
            width: "70%",
            height: "5rem",
            fontSize: "2rem",
            padding: "1rem",
          }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          style={{
            marginLeft: "1rem",
            width: "8rem",
            height: "5rem",
            cursor: "pointer",
            fontSize: "2rem",
            backgroundColor: "skyblue",
            color: "tomato",
          }}
          onClick={findSecondLargest}
        >
          Find
        </button>
        <button
          style={{
            marginLeft: "1rem",
            width: "8rem",
            height: "5rem",
            cursor: "pointer",
            fontSize: "2rem",
            backgroundColor: "skyblue",
            color: "tomato",
          }}
          onClick={() => {
            setInputValue("");
            setResult(undefined);
          }}
        >
          Clear
        </button>
      </div>

      {result && (
        <p style={{ fontSize: "1.5rem", color: "blueviolet" }}>
          Second Largest number is: {result}
        </p>
      )}
    </div>
  );
}

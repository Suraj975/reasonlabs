import React from "react";
import "./task_1.css";
import { getGridProperties } from "./helpers";

function Task1({ row = 4, col = 4, NO_OF_RED_BOX = 2 }) {
  const [boxColor, setBoxColor] = React.useState({
    active: {},
    dormant: {},
  });

  const handleSelection = (index) => {
    const { active, dormant } = boxColor;
    const gridIndex = `grid-${index}`;

    if (active[gridIndex] || dormant[gridIndex]) return;
    const activeIndexes = Object.keys(boxColor.active);
    let temp = { ...boxColor };

    if (activeIndexes.length >= NO_OF_RED_BOX) {
      temp.dormant[activeIndexes[0]] = temp.active?.[activeIndexes[0]];
      delete temp.active?.[activeIndexes[0]];
      temp.active[gridIndex] = index;
      setBoxColor({ ...temp });
      return;
    }

    temp.active[gridIndex] = index;
    setBoxColor({ ...temp });
  };

  const generateGrid = () => {
    return new Array(row * col).fill(0).map((k, i) => {
      const { showGridNumber, gridClassName } = getGridProperties(i, boxColor);
      return (
        <div
          key={i}
          onClick={() => handleSelection(i)}
          className={`game-cell ${gridClassName}`}
          id={`game-cell-${i}`}
          data-testid="game-cell"
        >
          {showGridNumber && i}
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Simple 4 x 4 Grid Game</h1>
      <div className="container">
        <div className="game-container">
          <div className="game">{generateGrid()}</div>
        </div>
      </div>
    </div>
  );
}

export default Task1;

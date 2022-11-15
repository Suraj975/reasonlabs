import React from "react";
import { render } from "@testing-library/react";

import Task1 from "../../task1/task_1";

const initialState = {
  active: {},
  dormant: {},
};

// updated initial state
const updatedInitialState = {
  active: {
    "grid-13": 13,
    "grid-12": 12,
  },
  dormant: {
    "grid-5": 5,
    "grid-6": 6,
    "grid-15": 15,
  },
};

const props = { row: 4, col: 4, NO_OF_RED_BOX: 2 };

test("should show correct number of total boxes in the grid", () => {
  React.useState = jest.fn().mockReturnValueOnce([initialState, {}]);
  let component = render(<Task1 {...props} />);
  const { getAllByTestId } = component;
  const totalBoxes = getAllByTestId("game-cell");
  expect(totalBoxes.length).toBe(props.row * props.col);
});

test("should show correct active and dormant boxes in grid", async () => {
  React.useState = jest.fn().mockReturnValueOnce([updatedInitialState, {}]);
  let component = render(<Task1 {...props} />);
  const { container } = component;
  const totalDormantBoxes =
    container.getElementsByClassName("game-cell dormant");
  const totalActiveBoxes = container.getElementsByClassName("game-cell active");
  expect(totalDormantBoxes.length).toBe(3);
  expect(totalActiveBoxes.length).toBe(2);
});

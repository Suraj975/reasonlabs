import { render } from "@testing-library/react";

import InformationTable from "../information-table";
const tableHeaderTitles = ["No", "First name", "Last name", "Phone", "Action"];

let component;
const props = {
  useDetails: [
    {
      userFirstname: "suraj",
      userLastname: "singh",
      userPhone: "999999999",
    },
    {
      userFirstname: "andrea",
      userLastname: "kart",
      userPhone: "666666666",
    },
  ],
  setUserDetails: jest.fn(),
};
test("Should render correct number of items rows", () => {
  component = render(<InformationTable {...props} />);
  const { getByTestId } = component;
  const tableheaders = getByTestId("table-header");
  for (let i = 0; i < tableheaders.children.length; i++) {
    expect(tableheaders.children[i].innerHTML).toBe(tableHeaderTitles[i]);
  }
});

test("Should render correct number of user records", () => {
  component = render(<InformationTable {...props} />);
  const { findAllByTestId } = component;

  const tableRowElements = findAllByTestId("content");
  expect(tableRowElements.length).toBe(props.userDetails?.length);
});

import { render, fireEvent } from "@testing-library/react";

import PhoneBookForm from "../phone-book-form";

export const formValues = {
  userFirstname: "Rick",
  userLastname: "mosh",
  userPhone: "93494433443",
};

let component;

test("should watch input correctly", () => {
  component = render(<PhoneBookForm />);
  const { container } = component;
  const userFirstname = container.querySelector("input[name='userFirstname']");
  const userLastname = container.querySelector("input[name='userLastname']");
  const userPhone = container.querySelector("input[name='userPhone']");

  fireEvent.input(userFirstname, {
    target: {
      value: formValues?.userFirstname,
    },
  });
  fireEvent.input(userLastname, {
    target: {
      value: formValues?.userLastname,
    },
  });
  fireEvent.input(userPhone, {
    target: {
      value: formValues?.userPhone,
    },
  });

  expect(userFirstname.value).toEqual(formValues?.userFirstname);
  expect(userLastname.value).toEqual(formValues?.userLastname);
  expect(userPhone.value).toEqual(formValues?.userPhone);
});

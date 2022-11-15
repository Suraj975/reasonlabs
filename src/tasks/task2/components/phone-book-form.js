import React, { useState } from "react";
import { style } from "../style";

function PhoneBookForm(props) {
  const { setUserDetails, useDetails } = props;
  const [formError, setFormError] = useState("");

  const submitUserDetails = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const userFirstname = data.get("userFirstname");
    const userLastname = data.get("userLastname");
    if (userFirstname === userLastname) {
      setFormError("suraname cannot be same as firstname");
      return;
    }
    setUserDetails([
      ...useDetails,
      {
        userFirstname,
        userLastname,
        userPhone: data.get("userPhone"),
      },
    ]);
    document.getElementById("userForm").reset();
    setFormError("");
  };

  return (
    <div style={style.container}>
      <form
        id="userForm"
        onSubmit={submitUserDetails}
        style={style.form.container}
      >
        <label>First name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userFirstname"
          name="userFirstname"
          type="text"
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userLastname"
          name="userLastname"
          type="text"
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userPhone"
          name="userPhone"
          type="number"
        />
        <br />
        {formError && <div style={style.form.inputError}>{formError}</div>}
        <input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
        />
      </form>
    </div>
  );
}

export default PhoneBookForm;

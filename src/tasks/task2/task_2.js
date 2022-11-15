import React from "react";
import PhoneBookForm from "./components/phone-book-form";
import InformationTable from "./components/information-table";

export default function Task2() {
  const [useDetails, setUserDetails] = React.useState([]);
  return (
    <section>
      <PhoneBookForm useDetails={useDetails} setUserDetails={setUserDetails} />
      <InformationTable
        useDetails={useDetails}
        setUserDetails={setUserDetails}
      />
    </section>
  );
}

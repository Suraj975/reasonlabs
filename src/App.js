import React from "react";
import Task1 from "./tasks/task1/task_1";
import Task2 from "./tasks/task2/task_2";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h1>Frontend Assignment</h1>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Task 1</Tab>
          <Tab>Task 2</Tab>
        </TabList>
        <TabPanel>
          <Task1 />
        </TabPanel>
        <TabPanel>
          <Task2 />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;

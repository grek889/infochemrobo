import React, { useState } from "react";
import { Titration } from "./Titration";
import { Control } from "./Control";
import { Programming } from "./Programming";
import { Header } from "@/components";
import styles from "./MainControl.module.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export const MainControl = () => {
  const [controller, setController] = useState("titrate");

  const handleChange = (event, newValue) => {
    setController(newValue);
  };
  return (
    <>
      <Header />
      <main>
        <TabContext value={controller}>
          <div className={styles.tabs}>
            <TabList onChange={handleChange} centered>
              <Tab label="Управление" value="control" />
              <Tab label="Титрование" value="titrate" />
              <Tab label="Программирование" value="programming" />
            </TabList>
          </div>
          <TabPanel value="control">
            <Control />
          </TabPanel>
          <TabPanel value="titrate">
            <Titration />
          </TabPanel>
          <TabPanel value="programming">
            <Programming />
          </TabPanel>
        </TabContext>
      </main>
    </>
  );
};

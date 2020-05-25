import React from "react";
import styles from "./Navigation.module.scss";
import { UpperNav, LowerNav } from "/";
const Navigation = () => {
  return (
    <nav className={(styles.Navigation, "container")}>
      <UpperNav />
      <LowerNav />
    </nav>
  );
};

export default Navigation;

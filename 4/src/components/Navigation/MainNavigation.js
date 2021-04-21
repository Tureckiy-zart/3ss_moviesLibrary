import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const activeStyle = {
  background: "orange",
  display: "block",
  color: "#fff",
};
const MainNavigation = () => (
  <header >
    <ul className={styles.nav}>
      <li className={styles.li}>
        <NavLink
          exact
          to="/"
          style={{ padding: "20px", width: "100%" }}
          activeStyle={activeStyle}
        >
          MAIN
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          style={{ padding: "20px", width: "100%" }}
          activeStyle={activeStyle}
        >
          FIND BOOKS
        </NavLink>
      </li>
    </ul>
  </header>
);

export default MainNavigation;

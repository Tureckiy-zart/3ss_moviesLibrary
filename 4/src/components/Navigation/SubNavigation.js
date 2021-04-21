import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
const activeStyle = {
  background: "orange",
  display: "block",
  color: "#fff",
};

const SubNavigation = ({ movie }) => (

  <nav >
  <ul className={styles.nav}>
    <li className={styles.li}>
      <NavLink
        style={{ padding: "20px" }}
        activeStyle={activeStyle}
        to={`/movies/${movie.id}/cast`}
      >
        Cast
      </NavLink>
    </li>
    <li>
      <NavLink
        style={{ padding: "20px"}}
        activeStyle={activeStyle}
        to={`/movies/${movie.id}/reviews`}
      >
        Reviews
      </NavLink>
    </li>
  </ul>
  </nav>
);

export default SubNavigation;

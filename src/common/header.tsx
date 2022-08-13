import React from "react";
import {NavLink} from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav>
        <a href="/">
          Home
        </a>
        |
        <NavLink to ="/clases">
          Clases
        </NavLink>
        |{" "}
        <a href="/about">
          Acerca de
        </a>
      </nav>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";

export const Header = () => (
  <div className={"container-fluid d-flex justify-content-end px-md-5 py-4"}>
    <Link to={"/"}>
      <img className={classes.header_icon} src={`${process.env.PUBLIC_URL}/assets/tk.jfif`} alt="lorum" />
    </Link>
  </div>
);
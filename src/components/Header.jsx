import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://imgaz.staticbg.com/customers_avatars/20190711020353_451.jpg"
        alt="logo"
      />
    </header>
  );
};

export default Header;

import React from "react";
import Styles from "./_navbar.module.css";
import { SiYourtraveldottv } from "react-icons/si";
const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <a href="#">
        <span className={Styles.icon}>
          <SiYourtraveldottv />
        </span>
        <span>MakeMyTravel</span>
      </a>
    </div>
  );
};

export default Logo;

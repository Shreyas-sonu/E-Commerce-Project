import React from "react";
import { Outlet } from "react-router-dom";
import Styles from "./_profile.module.css";
const ProfileMainBlock = () => {
  return (
    <div className={Styles.mainProfileBlock}>
      <Outlet />
    </div>
  );
};

export default ProfileMainBlock;

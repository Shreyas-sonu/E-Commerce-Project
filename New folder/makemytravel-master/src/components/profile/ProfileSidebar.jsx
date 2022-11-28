import React from "react";
import Styles from "./_profile.module.css";
import { NavLink } from "react-router-dom";
const ProfileSidebar = () => {
  return (
    <div className={Styles.sidebarProfile}>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName="active">
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/upload-profile-photo"
              activeClassName="active"
            >
              Update profile photo
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/add-profile" activeClassName="active">
              add profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;

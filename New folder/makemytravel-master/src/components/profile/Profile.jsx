import React from "react";
import ProfileMainBlock from "./ProfileMainBlock";
import ProfileSidebar from "./ProfileSidebar";
import Styles from "./_profile.module.css";
const Profile = () => {
  return (
    <section id={Styles.profileBlock}>
      <article>
        <ProfileSidebar />
        <ProfileMainBlock />
      </article>
    </section>
  );
};

export default Profile;

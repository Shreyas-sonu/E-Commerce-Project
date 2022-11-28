import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../apis/AuthContextApi";
import Spinner from "../../pages/Spinner";
import Styles from "./_profile.module.css";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { collection, doc, getDocs } from "@firebase/firestore";
import { db } from "../../apis/firebase";

const ProfileDefault = () => {
  let { authUser } = useContext(AuthContext);
  let [profile, setProfile] = useState("");
  let userCollectionRef = collection(db, "users");
  let fetchData = async () => {
    let data = await getDocs(userCollectionRef);
    data.docs.map(user => {
      // console.log(user.data());
      return setProfile(user.data());
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={Styles.mainProfileBlock}>
      {authUser === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>Profile</h1>
          <article>
            <aside className={Styles.asideIcon}>
              <Link to="/profile/upload-profile-photo">
                <figure>
                  <img src={profile.photoURL} alt={profile.displayName} />
                </figure>
                <main>
                  <span className={Styles.cameraIcon}>
                    <FaCamera />
                  </span>
                </main>
              </Link>
            </aside>
            <footer>
              <h1>{profile.displayName}</h1>
              <h4>{profile.email}</h4>
            </footer>
            <aside className={Styles.profileUser}>
              <Fragment>
                <p>{profile.gender}</p>
                <p>{profile.city}</p>
                <p>{profile.address}</p>
              </Fragment>
            </aside>
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileDefault;

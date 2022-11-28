import React, { useState, useContext } from "react";
import Styles from "./_profile.module.css";
import { toast } from "react-toastify";
import { db, auth } from "../../apis/firebase";
import { addDoc, collection, doc } from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";
import { AuthContext } from "../../apis/AuthContextApi";

const AddProfileData = () => {
  let { authUser } = useContext(AuthContext);
  let [state, setState] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    city: "",
    address: "",
    isLoading: false,
  });
  let { firstname, lastname, gender, city, address, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();

    try {
      let payload = {
        firstname,
        lastname,
        gender,
        city,
        address,
      };
      let userCollectionRef = collection(db, "users");
      let { displayName, photoURL, uid, email } = authUser;
      await addDoc(userCollectionRef, {
        uid,
        displayName,
        photoURL,
        email,
        ...payload,
      });
      toast.success("users information is updated");
      window.location.assign("/profile");
    } catch (error) {
      toast.error(error.code);
    }
  };
  return (
    <div className={Styles.mainProfileBlock}>
      <h1>Add Profile</h1>
      <form className={Styles.profileForm} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" value={gender} onChange={handleChange}>
          <label htmlFor="gender">Gender</label>
          <span>
            <input type="radio" name="gender" value="male" /> Male
          </span>
          <span>
            <input type="radio" name="gender" value="female" /> Female
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="city">city</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" id={Styles.textArea}>
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="10"
            value={address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button>{isLoading === true ? "loading ..." : "submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default AddProfileData;

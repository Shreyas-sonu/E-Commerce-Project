import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../apis/firebase";
import { sendPasswordResetEmail } from "@firebase/auth";
const ResetPassword = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      sendPasswordResetEmail(auth, email);
      toast.info(
        `password reset link has been sent to ${email} address please reset new password`
      );
      navigate("/login");
    } catch (error) {
      toast.error(error.code);
    }
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Reset Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="enter an email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <aside>
                <span>Already have account </span>
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </aside>
            </div>
            <div className="form-group">
              <button>
                {isLoading === true ? "loading..." : "Reset password"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ResetPassword;

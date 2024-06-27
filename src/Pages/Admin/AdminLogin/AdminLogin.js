import React, { useState, useEffect } from "react";
import "./AdminLogin.css";

import Logo from "../../../Assets/MainLogo.png";

import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase";

export default function AdminLogin() {
  const auth = getAuth(app);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("adminlogintoken") !== null) {
      navigate("/admin");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/admin");
        // console.log(user.accessToken);
        localStorage.setItem("adminlogintoken", user.accessToken);
        setErr("");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErr("Please Enter Correct Email or Password");
        setLoading(false);
      });

    // console.log(email, password);
  };
  return (
    <div className="adminlogin">
      <img src={Logo} alt="logo" />
      <form className="adminlogin-form" onSubmit={handleSubmit}>
        <div className="adminlogin-form-inputs">
          <h3>Username</h3>
          <input
            required
            type="text"
            placeholder="Enter your password..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="adminlogin-form-inputs">
          <h3>Password</h3>
          <input
            required
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loading ? "Loading..." : <button type="submit">Login</button>}

        <p style={{ color: "red" }}>{err}</p>
      </form>
    </div>
  );
}

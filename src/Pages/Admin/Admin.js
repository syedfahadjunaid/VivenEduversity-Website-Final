import React, { useEffect, useState } from "react";
import "./Admin.css";
import Logo from "../../Assets/MainLogo.png";

import { FiEdit } from "react-icons/fi";

import AdminApplicationPage from "./AdminApplicationPage/AdminApplicationPage";
import AdminDemoPage from "./AdminDemoPage/AdminDemoPage";
import AdminContactPage from "./AdminContactPage/AdminContactPage";

import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase";

import { useNavigate } from "react-router-dom";

export default function Admin() {
  const auth = getAuth(app);

  const navigate = useNavigate();

  const [page, setPage] = useState("Applications");

  // console.log(localStorage.getItem("adminlogintoken"));

  useEffect(() => {
    if (localStorage.getItem("adminlogintoken") === null) {
      navigate("/adminlogin");
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/adminlogin");
        localStorage.removeItem("adminlogintoken");
        console.log("Sign out successful");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className='adminPage'>
      <div className='adminPage-left'>
        <div className='adminPage-left-img'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='adminPage-left-links'>
          <div
            className={
              page === "Applications"
                ? "adminPage-left-link-selected adminPage-left-link"
                : "adminPage-left-link"
            }
            onClick={() => setPage("Applications")}>
            <FiEdit />
            <p style={{ color: "#083A44" }}>Applications</p>
          </div>
          <div
            className={
              page === "Demo's"
                ? "adminPage-left-link-selected adminPage-left-link"
                : "adminPage-left-link"
            }
            onClick={() => setPage("Demo's")}>
            <FiEdit />
            <p style={{ color: "#083A44" }}>Demo's</p>
          </div>
          <div
            className={
              page === "Contacts"
                ? "adminPage-left-link-selected adminPage-left-link"
                : "adminPage-left-link"
            }
            onClick={() => setPage("Contacts")}>
            <FiEdit />
            <p style={{ color: "#083A44" }}>Contacts</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px",
            background: "#910017",
            color: "white",
            border: "none",
            width: "100px",
            borderRadius: "8px",
          }}>
          Logout
        </button>
      </div>
      <div className='adminPage-right'>
        {page === "Applications" && <AdminApplicationPage pageName={page} />}
        {page === "Demo's" && <AdminDemoPage pageName={page} />}
        {page === "Contacts" && <AdminContactPage pageName={page} />}
      </div>
    </div>
  );
}

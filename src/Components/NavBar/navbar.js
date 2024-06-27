import React, { useState, useEffect } from "react";

import "./navbar.css";

import mainLogo from "../../Assets/MainLogo.png";

import { Link, NavLink, useLocation } from "react-router-dom";

import MobileNav from "../mobileNav/mobileNav";

import internalLinks from "../../internalLinks";

import { IoIosArrowDown } from "react-icons/io";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const history = useNavigate();

  const [navActive, setNavActive] = useState("home");

  const [programDropdown, setProgramDropdown] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPath]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileNav />
      ) : (
        <nav className='main-nav app-container-flex-center'>
          <div className='main-nav-logo'>
            <NavLink to={internalLinks.home}>
              <img src={mainLogo} alt='Logo' />
            </NavLink>
          </div>
          <ul className='app-container-flex-center'>
            <li>
              <NavLink
                to={internalLinks.home}
                onClick={() => setNavActive("home")}
                className={
                  navActive === "home" ? "active-link" : "inactive-link"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={internalLinks.aboutUs}
                onClick={() => setNavActive("aboutUs")}
                className={
                  navActive === "aboutUs" ? "active-link" : "inactive-link"
                }>
                About Us
              </NavLink>
            </li>
            <li
              onMouseEnter={() => setProgramDropdown(true)}
              onMouseLeave={() => setProgramDropdown(false)}
              className='main-nav-programs'>
              <NavLink
                onClick={() => setNavActive("aboutUs")}
                className={
                  navActive === "programs" ? "active-link" : "inactive-link"
                }>
                Programs
              </NavLink>
              <IoIosArrowDown />
              {programDropdown && (
                <div
                  className='programDropdown'
                  onClick={() => setNavActive("programs")}>
                  <div className='programDropdown-main'>
                    <div
                      onClick={() => {
                        history("/programs/PGPEFB");
                        setNavActive("programs");
                      }}>
                      <h4>PGPEFB</h4>
                      <p>PGP in Entrepreneurship & Family Business</p>
                    </div>
                    <div
                      onClick={() => {
                        history("/programs/PGPM");
                        setNavActive("programs");
                      }}>
                      <h4>PGPM</h4>
                      <p>Post Graduate Programme in Management</p>
                    </div>
                    <div
                      onClick={() => {
                        history("/programs/PGDM");
                        setNavActive("programs");
                      }}>
                      <h4>PGDM</h4>
                      <p>One Year PGDM in Digital Marketing</p>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to={internalLinks.home}
                onClick={() => setNavActive("admissions")}
                className={
                  navActive === "admissions" ? "active-link" : "inactive-link"
                }>
                Admissions
              </NavLink>
            </li>
            <li>
              <NavLink
                to={internalLinks.home}
                onClick={() => setNavActive("resources")}
                className={
                  navActive === "resources" ? "active-link" : "inactive-link"
                }>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to={internalLinks.contactUs}
                onClick={() => setNavActive("contact")}
                className={
                  navActive === "contact" ? "active-link" : "inactive-link"
                }>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <NavLink to={internalLinks.applicationForm}>
            <button
              className='app-primary-buttons-round'
              onClick={() => setNavActive("applyNow")}>
              Apply Now &nbsp;
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='52'
                height='29'
                viewBox='0 0 52 29'
                fill='none'>
                <path
                  d='M36.83 0H14.35C6.42472 0 0 6.42472 0 14.35C0 22.2753 6.42472 28.7 14.35 28.7H36.83C44.7553 28.7 51.18 22.2753 51.18 14.35C51.18 6.42472 44.7553 0 36.83 0Z'
                  fill='white'
                />
                <path
                  d='M25.7025 19.2875C25.3141 18.8964 25.3152 18.2648 25.705 17.875L28.1673 15.4127C28.9478 14.6322 28.9485 13.3671 28.1689 12.5858L25.7038 10.1154C25.315 9.72569 25.3153 9.09466 25.7046 8.70538C26.0942 8.31581 26.7258 8.31581 27.1154 8.70538L30.9958 12.5858C31.7768 13.3668 31.7768 14.6332 30.9958 15.4142L27.12 19.29C26.7283 19.6817 26.0928 19.6806 25.7025 19.2875Z'
                  fill='black'
                />
                <path
                  d='M19.7025 19.2875C19.3141 18.8964 19.3152 18.2648 19.705 17.875L22.1673 15.4127C22.9478 14.6322 22.9485 13.3671 22.1689 12.5858L19.7038 10.1154C19.315 9.72569 19.3153 9.09466 19.7046 8.70538C20.0942 8.31581 20.7258 8.31581 21.1154 8.70538L24.9958 12.5858C25.7768 13.3668 25.7768 14.6332 24.9958 15.4142L21.12 19.29C20.7283 19.6817 20.0928 19.6806 19.7025 19.2875Z'
                  fill='black'
                />
              </svg>
            </button>
          </NavLink>
        </nav>
      )}
    </>
  );
}

export default NavBar;

// MobileNav.js
import React, { useState } from "react";
import "./mobileNav.css";
import { NavLink } from "react-router-dom";
import MainLogo from "../../Assets/MainLogo.png";
import { Link } from "react-router-dom";
import internalLinks from "../../internalLinks";

import { IoIosArrowDown } from "react-icons/io";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showProgram, setShowProgram] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mobile-nav-main'>
      <NavLink to={internalLinks.home}>
        <img src={MainLogo} alt='Logo' />
      </NavLink>

      <div className='burger-icon' onClick={toggleMenu}>
        <svg
          width='64px'
          height='64px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {" "}
            <path
              d='M5 12H20'
              stroke='#000000'
              stroke-width='2'
              stroke-linecap='round'></path>{" "}
            <path
              d='M5 17H20'
              stroke='#000000'
              stroke-width='2'
              stroke-linecap='round'></path>{" "}
            <path
              d='M5 7H20'
              stroke='#000000'
              stroke-width='2'
              stroke-linecap='round'></path>{" "}
          </g>
        </svg>
      </div>
      <div className={`mobile-nav-container ${isOpen ? "open" : ""}`}>
        <div className='burger-icon' onClick={toggleMenu}>
          <svg
            fill='#ffffff'
            width='64px'
            height='64px'
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#ffffff'>
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              stroke-linecap='round'
              stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              {" "}
              <path d='M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z'></path>{" "}
            </g>
          </svg>
        </div>

        <div className='menu'>
          <Link to={internalLinks.home} onClick={toggleMenu}>
            Home
          </Link>
          <Link to={internalLinks.aboutUs} onClick={toggleMenu}>
            About Us
          </Link>
          <Link to={internalLinks.contactUs} onClick={toggleMenu}>
            Contact Us
          </Link>

          <p onClick={() => setShowProgram(!showProgram)}>
            Programs <IoIosArrowDown />
          </p>
          {showProgram && (
            <div
              className='fade-in'
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                boxShadow: "0px 3px 15px 0px rgba(0, 0, 0, 0.05)",
                width: "100%",
                borderRadius: "8px",
              }}>
              <Link
                to={internalLinks.programs.program1}
                onClick={toggleMenu}
                style={{ fontSize: "14px" }}>
                PGPEFB{" "}
                <p className='' style={{ width: "70%", fontSize: "12px" }}>
                  PGP in Entrepreneurship & Family Business
                </p>
              </Link>
              <Link
                to={internalLinks.programs.program2}
                onClick={toggleMenu}
                style={{ fontSize: "14px" }}>
                PGPM{" "}
                <p className='' style={{ width: "70%", fontSize: "12px" }}>
                  Post Graduate Programme in Management
                </p>
              </Link>
              <Link
                to={internalLinks.programs.program3}
                onClick={toggleMenu}
                style={{ fontSize: "14px" }}>
                PGDM{" "}
                <p className='' style={{ width: "70%", fontSize: "12px" }}>
                  One Year PGDM in Digital Marketing
                </p>
              </Link>
            </div>
          )}
          <Link to={internalLinks.applicationForm}>
            <button
              className='app-primary-buttons-round mobile-nav-btn'
              onClick={toggleMenu}>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

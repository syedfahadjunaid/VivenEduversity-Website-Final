// import React from "react";
import "./ProgramPGDMDigitalMarketing.css";

import heroBackgroundImage from "../../Assets/ProgramPage/pgdm/Group 1000001943.png";

import heroImage1 from "../../Assets/ProgramPage/pgdm/Rectangle 74.jpg";
import heroImage2 from "../../Assets/ProgramPage/pgdm/Rectangle 75.jpg";

import keyFeatureDashImage from "../../Assets/ProgramPage/pgdm/Rectangle 79.jpg";
import { FaCheck } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

import AccordionTransition from "../../Components/Accordion";

import accordionIcon1 from "../../Assets/ProgramPage/pgdm/Group(5).png";
import accordionIcon2 from "../../Assets/ProgramPage/pgdm/Capa_1(2).png";
import accordionIcon3 from "../../Assets/ProgramPage/pgdm/Layer_1(1).png";
import accordionIcon4 from "../../Assets/ProgramPage/pgdm/Frame(5).png";
import accordionIcon5 from "../../Assets/ProgramPage/pgdm/Icons.png";
import accordionIcon6 from "../../Assets/ProgramPage/pgdm/Capa_1(3).png";

import toolLogo1 from "../../Assets/ProgramPage/pgdm/63039fb7ab1b900654aad399.png";
import toolLogo2 from "../../Assets/ProgramPage/pgdm/ASC-1-png.png";
import toolLogo3 from "../../Assets/ProgramPage/pgdm/facebook-ads-logo.png";
import toolLogo4 from "../../Assets/ProgramPage/pgdm/mailchimp-vector-logo.png";
import toolLogo5 from "../../Assets/ProgramPage/pgdm/Logo_Google_Analytics.png";
import toolLogo6 from "../../Assets/ProgramPage/pgdm/Google-Adsense-Symbol.png";
import toolLogo7 from "../../Assets/ProgramPage/pgdm/Yoast_Logo_Large_RGB.png";
import toolLogo8 from "../../Assets/ProgramPage/pgdm/62c9d1d494890221ddd176a0.png";

import nextGenLogo1 from "../../Assets/ProgramPage/pgdm/synthesia8926.png";
import nextGenLogo2 from "../../Assets/ProgramPage/pgdm/Screenshot-2023-07-03-220101.png";
import nextGenLogo3 from "../../Assets/ProgramPage/pgdm/RGB_large_colour.png";
import nextGenLogo4 from "../../Assets/ProgramPage/pgdm/1683823510dall-e-logo-png.png";
import nextGenLogo5 from "../../Assets/ProgramPage/pgdm/jasper-ai-inc-logo-vector.png";
import nextGenLogo6 from "../../Assets/ProgramPage/pgdm/download.png";
import nextGenLogo7 from "../../Assets/ProgramPage/pgdm/unnamed(3).png";
import nextGenLogo8 from "../../Assets/ProgramPage/pgdm/ContentBot-logo-app.png";
import nextGenLogo9 from "../../Assets/ProgramPage/pgdm/scrip 1.png";

import ProgramButtons from "../../Components/ProgramButtons/ProgramButtons";

import ContactUsComp from "../../Components/contactCard/contactCard";
import FooterCTASection from "../../Components/footerCTASection/footerCTASection";

import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../../firebase";

export default function ProgramPGDMDigitalMarketing() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 2,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [fullName, setFullName] = React.useState();
  const [contact, setContact] = React.useState();
  const [email, setEmail] = React.useState();

  const [certification, setCertification] = React.useState(
    "PGPEFB (PGP in Entrepreneurship & Family Business)"
  );

  const handleChange = (event) => {
    setCertification(event.target.value);
  };

  const db = getFirestore(app);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();

    // console.log({
    //   FullName: fullName,
    //   Contact: contact,
    //   Email: email,
    //   Certification: certification,
    // });
    const date = new Date().toLocaleString();
    const docRef = await addDoc(collection(db, "demo"), {
      FullName: fullName,
      Contact: contact,
      Email: email,
      Certification: certification,
      date: date,
    });

    console.log("Document written with ID: ", docRef.id);
    setOpen(false);
  };

  const ModalData = (
    <div className="ProgramPGDMDigitalMarketing-ModalForm">
      <h2>Book a Demo</h2>
      <form
        className="ProgramPGDMDigitalMarketing-ModalForm-form"
        onSubmit={handleDemoSubmit}
      >
        <input
          placeholder="Full Name"
          type="text"
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          placeholder="Contact Phone"
          type="number"
          required
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          placeholder="E-mail"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ width: "83%" }}>
          <FormControl
            variant="standard"
            sx={{ width: "100%", outline: "none" }}
          >
            <InputLabel
              id="demo-simple-select-standard-label"
              style={{ paddingLeft: "1rem", fontSize: "14px" }}
            >
              which certification do you prefer ?
            </InputLabel>
            <Select
              style={{ fontSize: "14px" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={certification}
              onChange={handleChange}
              label="Certification"
            >
              <MenuItem
                style={{ fontSize: "14px" }}
                value={"PGPEFB (PGP in Entrepreneurship & Family Business)"}
              >
                PGPEFB (PGP in Entrepreneurship & Family Business)
              </MenuItem>
              <MenuItem
                style={{ fontSize: "14px" }}
                value={"PGPM (Post Graduate Programme in Management)"}
              >
                PGPM (Post Graduate Programme in Management)
              </MenuItem>
              <MenuItem
                style={{ fontSize: "14px" }}
                value={"PGDM (One Year PGDM in Digital Marketing)"}
              >
                PGDM (One Year PGDM in Digital Marketing)
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          className=""
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          <input type="checkbox" required />
          <p style={{ fontSize: "12px" }}>
            I agree to university Terms and Conditions and their Privacy Policy
          </p>
        </div>
        <button
          type="submit"
          className="ProgramPGDMDigitalMarketing-ModalForm-button"
          style={{}}
        >
          <h3>Send Now</h3>
          <VscSend style={{ fontSize: "25px" }} />
        </button>
      </form>
    </div>
  );

  const accordionData = [
    {
      heading: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "start",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "9999px",
              padding: "4px",
            }}
            src={accordionIcon1}
            alt="icon"
          />
          <p style={{ color: "#888888" }}>Course 1</p>
          <h3>Foundation</h3>
        </div>
      ),
      content: (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            background: "white",
            padding: "1rem",
            color: "#5D5D5D",
          }}
        >
          <li>Brand Truth: Marketing Fundamentals</li>
          <li>Presentation Skills</li>
          <li>Introduction to Agencies & Departments</li>
        </ul>
      ),
    },
    {
      heading: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "start",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "9999px",
              padding: "4px",
            }}
            src={accordionIcon2}
            alt="icon"
          />
          <p style={{ color: "#888888" }}>Course 2</p>
          <h3>Search Marketing</h3>
        </div>
      ),
      content: (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            background: "white",
            padding: "1rem",
            color: "#5D5D5D",
          }}
        >
          <li>Website Basics</li>
          <li>Search Engine Optimisation</li>
          <li>Google Ads</li>
        </ul>
      ),
    },
    {
      heading: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "start",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "9999px",
              padding: "4px",
            }}
            src={accordionIcon3}
            alt="icon"
          />
          <p style={{ color: "#888888" }}>Course 3</p>
          <h3>Social Marketing</h3>
        </div>
      ),
      content: (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            background: "white",
            padding: "1rem",
            color: "#5D5D5D",
          }}
        >
          <li>Social Media Organic</li>
          <li>Brand Reputation Management</li>
          <li>Social Media Paid</li>
          <li>Influencer Marketing</li>
          <li>Resume & LinkedIn Profile Building</li>
        </ul>
      ),
    },
    {
      heading: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "start",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "9999px",
              padding: "4px",
            }}
            src={accordionIcon4}
            alt="icon"
          />
          <p style={{ color: "#888888" }}>Course 4</p>
          <h3>Growth & Analytics</h3>
        </div>
      ),
      content: (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            background: "white",
            padding: "1rem",
            color: "#5D5D5D",
          }}
        >
          <li>Lead Generation & Nurturing</li>
          <li>Google Analytics 4</li>
          <li>Capstone Project</li>
        </ul>
      ),
    },
    {
      heading: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "start",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "9999px",
              padding: "4px",
            }}
            src={accordionIcon5}
            alt="icon"
          />
          <p style={{ color: "#888888" }}>Course 5</p>
          <h3>Planning & Strategy</h3>
        </div>
      ),
      content: (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            background: "white",
            padding: "1rem",
            color: "#5D5D5D",
          }}
        >
          <li>Media Planning</li>
          <li>Conversion Rate Optimization</li>
          <li>Customer Relationship Management</li>
          <li>Blogging, AdSense & Affiliate Marketing</li>
          <li>Freelancing Economics & Overview</li>
          <li>Portfolio & Personal Brand Building</li>
        </ul>
      ),
    },
    {
      heading: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "start",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "9999px",
              padding: "4px",
            }}
            src={accordionIcon6}
            alt="icon"
          />
          <p style={{ color: "#888888" }}>Course 6</p>
          <h3>Business Skills</h3>
        </div>
      ),
      content: (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            background: "white",
            padding: "1rem",
            color: "#5D5D5D",
          }}
        >
          <li>Art of Pitching</li>
          <li>Client Servicing</li>
          <li>Campaign Planning</li>
          <li>Project Management</li>
          <li>Multimedia Case Studies</li>
          <li>Leadership & Conflict Resolution Skills</li>
          <li>Masterclass: Economics of Digital Marketing</li>
        </ul>
      ),
    },
  ];

  const renderedAccordion = accordionData?.map((data, index) => {
    return (
      <AccordionTransition heading={data.heading} content={data.content} />
    );
  });
  return (
    <>
      <div className="programPage-PGDM">
        <div
          className="programPage-PGDM-hero"
          style={{
            backgroundImage: `url("${heroBackgroundImage}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="programPage-PGDM-hero-left">
            <h1>One Year PGDM in Digital Marketing</h1>
            <h3>Post Graduate Diploma in Management </h3>
            <p>
              Become a digital marketing strategist in this AI-dominated
              industry with IIDE’s online digital marketing courses.
            </p>
            <button className="programPage-PGDM-hero-left-button">
              <p>DOWNLOAD BROCHURE</p>{" "}
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="humbleicons:download">
                  <path
                    id="Vector"
                    d="M8.93378 9.12792V15.4557M8.93378 15.4557L11.1671 13.2224M8.93378 15.4557L6.70045 13.2224M5.956 5.80472C6.51307 5.88438 7.02912 6.14305 7.42628 6.54172M13.0282 10.989C14.159 10.989 14.8893 10.0726 14.8893 8.9418C14.8893 8.49411 14.7425 8.05877 14.4714 7.70246C14.2004 7.34615 13.82 7.08852 13.3885 6.96903C13.3222 6.1341 12.9761 5.34597 12.4064 4.73204C11.8366 4.11812 11.0765 3.71429 10.2488 3.58584C9.42119 3.4574 8.57441 3.61185 7.8454 4.02422C7.11639 4.43659 6.54776 5.08278 6.23145 5.85832C5.56549 5.67371 4.85347 5.76122 4.25203 6.10159C3.65058 6.44196 3.20899 7.00731 3.02438 7.67327C2.83978 8.33923 2.92728 9.05125 3.26765 9.65269C3.60802 10.2541 4.17338 10.6957 4.83934 10.8803"
                    stroke="#EFEFEF"
                    stroke-width="1.48889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="programPage-PGDM-hero-right">
            <div className="programPage-PGDM-hero-right-up">
              <img src={heroImage1} alt="heroImage1" />
            </div>
            <div className="programPage-PGDM-hero-right-down">
              <img src={heroImage2} alt="heroImage1" />
            </div>
          </div>
        </div>

        <div className="programPage-PGDM-keyfeatures-section">
          <div className="programPage-PGDM-keyfeatures-section-heading">
            <h2 style={{ color: "#0E52BF" }}>Key Highlights</h2>
            <img src={keyFeatureDashImage} alt="keyFeatureDashImage" />
          </div>
          <div className="programPage-PGDM-keyfeatures-section-main">
            <div className="programPage-PGDM-keyfeatures-section-main-left">
              <div className="programPage-PGDM-keyfeatures-section-main-left-point">
                <FaCheck className="point-check" />
                <p>Affiliation Mumbai University</p>
              </div>
              <div className="programPage-PGDM-keyfeatures-section-main-left-point">
                <FaCheck className="point-check" />
                <p>Delivery Online + Offline </p>
              </div>
              <div className="programPage-PGDM-keyfeatures-section-main-left-point">
                <FaCheck className="point-check" />
                <p>Duration One Year Full Time </p>
              </div>
              <div className="programPage-PGDM-keyfeatures-section-main-left-point">
                <FaCheck className="point-check" />
                <p>Eligibility Graduate in any stream </p>
              </div>
              <div className="programPage-PGDM-keyfeatures-section-main-left-point">
                <FaCheck className="point-check" />
                <p>Batch Size 60 Students</p>
              </div>
              <div className="programPage-PGDM-keyfeatures-section-main-left-point">
                <FaCheck className="point-check" />
                <p>Specialization Marketing Management (Digital Marketing)</p>
              </div>
              <div className="programPage-PGDM-keyfeatures-section-main-left-point">
                <FaCheck className="point-check" />
                <p>
                  Program Duration: 9 months (Learning) +3months (Internship)
                </p>
              </div>
            </div>
            <div className="programPage-PGDM-keyfeatures-section-main-right">
              <h2 style={{ color: "#3D3D3D" }}>Want a Sneak Peek</h2>
              <p style={{ width: "60%" }}>
                Schedule a Demo Lecture with our Academic Experts
              </p>
              <button
                onClick={handleOpen}
                className="programPage-PGDM-keyfeatures-section-main-right-button"
              >
                <p style={{ color: "white" }}>Book a Demo</p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M1.34339 2.3401H1.91776V5.81793C1.91776 6.10897 2.15371 6.34492 2.44475 6.34492C2.73578 6.34492 2.97173 6.10897 2.97173 5.81793V2.3401H3.55506C3.8461 2.3401 4.08205 2.10415 4.08205 1.81312C4.08205 1.52208 3.8461 1.28613 3.55506 1.28613H1.34339C1.05235 1.28613 0.816406 1.52208 0.816406 1.81312C0.816406 2.10415 1.05235 2.3401 1.34339 2.3401Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M7.6938 2.85394C7.6938 1.98948 6.96407 1.28613 6.06711 1.28613H5.00289C5.00268 1.28613 5.00247 1.28617 5.00222 1.28617C5.00201 1.28617 5.0018 1.28613 5.00159 1.28613C4.71056 1.28613 4.47461 1.52208 4.47461 1.81312V5.81793C4.47461 6.10897 4.71056 6.34492 5.00159 6.34492C5.29263 6.34492 5.52857 6.10897 5.52857 5.81793V4.75417L6.77127 6.16609C6.87543 6.28445 7.02085 6.34492 7.16707 6.34492C7.29073 6.34492 7.41492 6.30167 7.51502 6.21352C7.7335 6.02124 7.75472 5.68826 7.56244 5.46977L6.57175 4.34414C7.22236 4.139 7.6938 3.54868 7.6938 2.85394ZM6.06711 3.36778C5.94236 3.36778 5.73371 3.36859 5.5343 3.36954C5.53335 3.17529 5.53202 2.54334 5.53145 2.3401H6.06711C6.37758 2.3401 6.63984 2.57541 6.63984 2.85394C6.63984 3.13247 6.37758 3.36778 6.06711 3.36778Z"
                      fill="white"
                    />
                    <path
                      id="Vector_3"
                      d="M7.10922 8.66993C7.40025 8.66993 7.6362 8.43398 7.6362 8.14295C7.6362 7.85191 7.40025 7.61597 7.10922 7.61597H5.43714C5.1461 7.61597 4.91016 7.85191 4.91016 8.14295V12.1112C4.91016 12.4022 5.1461 12.6382 5.43714 12.6382H7.10922C7.40025 12.6382 7.6362 12.4022 7.6362 12.1112C7.6362 11.8202 7.40025 11.5842 7.10922 11.5842H5.96412V10.6541H6.9859C7.27694 10.6541 7.51289 10.4181 7.51289 10.1271C7.51289 9.83604 7.27694 9.60009 6.9859 9.60009H5.96412V8.6699H7.10922V8.66993Z"
                      fill="white"
                    />
                    <path
                      id="Vector_4"
                      d="M2.44799 7.69934H1.3473C1.20736 7.69934 1.07316 7.75499 0.974298 7.85403C0.875436 7.95307 0.820033 8.08738 0.820314 8.22731V8.23033V12.0495C0.820314 12.3039 0.972436 12.5636 1.23108 12.6251C1.27085 12.6346 1.31424 12.6397 1.35517 12.6397H1.35717C1.39044 12.6395 2.17554 12.6365 2.48941 12.631C3.68018 12.6102 4.54443 11.575 4.54443 10.1695C4.54443 8.69203 3.70192 7.69934 2.44799 7.69934ZM2.471 11.5772C2.33451 11.5796 2.09969 11.5815 1.88039 11.583C1.87892 11.1252 1.87603 9.22899 1.87523 8.75331H2.44799C3.41528 8.75331 3.49043 9.83727 3.49043 10.1695C3.49046 10.8613 3.17522 11.5649 2.471 11.5772Z"
                      fill="white"
                    />
                    <path
                      id="Vector_5"
                      d="M9.29775 5.81672C9.29705 6.10779 9.5324 6.3443 9.82343 6.345H9.82473C10.1152 6.345 10.351 6.10993 10.3517 5.81928L10.3563 3.92935L11.5401 2.11087C11.6989 1.86695 11.6299 1.5405 11.3859 1.38171C11.1419 1.22287 10.8155 1.29194 10.6568 1.53587L9.82902 2.8074L8.99172 1.52508C8.83264 1.2814 8.50605 1.21276 8.26237 1.37197C8.01866 1.53109 7.95012 1.85764 8.10923 2.10135L9.30232 3.92858L9.29775 5.81672Z"
                      fill="white"
                    />
                    <path
                      id="Vector_6"
                      d="M18.2902 3.94172C17.9991 3.94172 17.7632 4.17767 17.7632 4.46871V5.29547H13.6712V4.44166C13.6712 4.15062 13.4352 3.91467 13.1442 3.91467C12.8531 3.91467 12.6172 4.15062 12.6172 4.44166V5.82245C12.6172 6.11349 12.8531 6.34944 13.1442 6.34944H18.2902C18.5812 6.34944 18.8171 6.11349 18.8171 5.82245V4.46871C18.8171 4.17767 18.5812 3.94172 18.2902 3.94172Z"
                      fill="white"
                    />
                    <path
                      id="Vector_7"
                      d="M15.3235 4.10981C15.4234 4.22153 15.5663 4.28537 15.7162 4.28537C15.8661 4.28537 16.0089 4.22153 16.1089 4.10981L17.1633 2.93155C17.3574 2.71464 17.3389 2.38152 17.122 2.18741C16.9051 1.99331 16.572 2.01179 16.3779 2.2287L16.2432 2.37927V1.25525C16.2432 0.964219 16.0072 0.728271 15.7162 0.728271C15.4251 0.728271 15.1892 0.964219 15.1892 1.25525V2.37927L15.0545 2.2287C14.8604 2.01179 14.5272 1.99334 14.3103 2.18741C14.0935 2.38148 14.075 2.71464 14.269 2.93155L15.3235 4.10981Z"
                      fill="white"
                    />
                    <path
                      id="Vector_8"
                      d="M12.248 10.7145C12.4588 10.6141 12.6938 10.561 12.9273 10.561C13.0011 10.561 13.0742 10.5663 13.1462 10.5763L12.675 8.11068C12.6746 8.10857 12.6742 8.1065 12.6738 8.10439C12.6178 7.82983 12.3834 7.62698 12.1036 7.61117C11.824 7.59578 11.568 7.77046 11.4815 8.03701C11.4795 8.04305 11.4777 8.04913 11.4759 8.05524L10.7835 10.4843L10.0653 8.05001C10.0634 8.04372 10.0615 8.03753 10.0594 8.03135C9.97017 7.76568 9.71276 7.59353 9.43282 7.61187C9.15314 7.6306 8.92077 7.83595 8.86779 8.11121C8.86741 8.11324 8.86706 8.11521 8.86667 8.11725L8.16276 12.0172C8.11108 12.3036 8.30136 12.5777 8.58779 12.6294C8.87408 12.6808 9.14829 12.4908 9.2 12.2044L9.57655 10.118L10.1995 12.2295C10.2013 12.2358 10.2033 12.242 10.2054 12.2482C10.29 12.5003 10.525 12.669 10.7906 12.669H10.7939C11.0204 12.6678 11.2233 12.5439 11.33 12.3514L11.3497 12.0419C11.3703 11.7166 11.4907 11.412 11.6856 11.1644L11.9849 10.1143L12.1136 10.7877C12.1571 10.7615 12.2016 10.7366 12.248 10.7145Z"
                      fill="white"
                    />
                    <path
                      id="Vector_9"
                      d="M17.8058 14.9696L13.2332 11.7128C13.0774 11.6018 12.8737 11.5839 12.701 11.6662C12.5283 11.7484 12.4137 11.9177 12.4016 12.1086L12.046 17.7113C12.0325 17.9231 12.1474 18.1223 12.3375 18.2167C12.4119 18.2536 12.4921 18.2716 12.5718 18.2716C12.6958 18.2716 12.8185 18.2279 12.9163 18.1436L14.9488 16.3886L17.5925 15.9178C17.8014 15.8805 17.9676 15.7216 18.0142 15.5146C18.0608 15.3075 17.9787 15.0927 17.8058 14.9696Z"
                      fill="white"
                    />
                    <path
                      id="Vector_10"
                      d="M16.2872 7.56775C14.8925 7.56775 13.7578 8.70241 13.7578 10.0971C13.7578 10.3708 13.8021 10.6342 13.8828 10.8812L16.3316 12.6254C17.7058 12.6015 18.8166 11.4769 18.8166 10.0971C18.8166 8.70241 17.6819 7.56775 16.2872 7.56775ZM16.2872 11.5726C15.4737 11.5726 14.8118 10.9107 14.8118 10.0971C14.8118 9.2836 15.4736 8.62171 16.2872 8.62171C17.1008 8.62171 17.7626 9.2836 17.7626 10.0971C17.7627 10.9107 17.1008 11.5726 16.2872 11.5726Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="programPage-PGDM-digitalMarketingSyllabus">
          <div className="programPage-PGDM-digitalMarketingSyllabus-head">
            <h2>Digital Marketing Syllabus That Makes You Industry-ready</h2>
            <p>
              Our online digital marketing course includes an updated syllabus
              including latest digital marketing concepts. With practical
              training & numerous live projects, this syllabus will prepare
              learners for today’s demanding industry.
            </p>
          </div>
          <div className="programPage-PGDM-digitalMarketingSyllabus-accordions">
            {renderedAccordion}
          </div>
        </div>

        <div className="programPage-PGDM-digitalMarketingMaster">
          <div className="programPage-PGDM-digitalMarketingMaster-head">
            <h2>Digital Marketing Tools You’ll Master</h2>
            <p>
              Being a digital marketer means interacting & working with multiple
              digital marketing tools daily. Here are some of the tools that you
              will master during IIDE's online digital marketing course.
            </p>
          </div>
          <div className="programPage-PGDM-digitalMarketingMaster-toolLogos">
            <img src={toolLogo1} alt="toolLogo" />
            <img src={toolLogo2} alt="toolLogo" />
            <img src={toolLogo3} alt="toolLogo" />
            <img src={toolLogo4} alt="toolLogo" />
            <img src={toolLogo5} alt="toolLogo" />
            <img src={toolLogo6} alt="toolLogo" />
            <img src={toolLogo7} alt="toolLogo" />
            <img src={toolLogo8} alt="toolLogo" />
          </div>
        </div>

        <div className="programPage-PGDM-digitalMarketingNextGen">
          <div className="programPage-PGDM-digitalMarketingNextGen-left">
            <h2>Next-gen AI-powered Tools</h2>
            <p>
              AI tools have taken digital marketing to the next level by
              delivering results in just one click. Here’s a list of AI tools
              taught during the online course that’ll set you apart from the
              crowd in the industry.
            </p>
            <ProgramButtons />
          </div>
          <div className="programPage-PGDM-digitalMarketingNextGen-right">
            <img src={nextGenLogo1} alt="nextGenLogo" />
            <img src={nextGenLogo2} alt="nextGenLogo" />
            <img src={nextGenLogo3} alt="nextGenLogo" />
            <img src={nextGenLogo4} alt="nextGenLogo" />
            <img src={nextGenLogo5} alt="nextGenLogo" />
            <img src={nextGenLogo6} alt="nextGenLogo" />
            <img src={nextGenLogo7} alt="nextGenLogo" />
            <img src={nextGenLogo8} alt="nextGenLogo" />
            <img src={nextGenLogo9} alt="nextGenLogo" />
          </div>
        </div>
      </div>
      <div
        className="contactCompInProgramPages"
        style={{ width: "90%", height: "80vh" }}
      >
        <ContactUsComp />
      </div>
      <FooterCTASection />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{ModalData}</Box>
      </Modal>
    </>
  );
}

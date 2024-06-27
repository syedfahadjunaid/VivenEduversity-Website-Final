import React, { useState } from "react";

import "./About.css";
import { Link } from "react-router-dom";

import aboutBannerImg from "../../Assets/About/aboutBannerImg.jpeg";
import aboutboximg1 from "../../Assets/About/aboutboximg1.jpg";
import aboutboximg2 from "../../Assets/About/aboutboximg2.jpg";
import aboutboximg3 from "../../Assets/About/aboutboximg3.jpg";
import aboutboximg4 from "../../Assets/About/aboutboximg4.jpg";
import DirectorImg from "../../Assets/About/directorsimg.png";
import MentorsImg from "../../Assets/About/mentorsImg.png";

import AboutCompusTourImg1 from "../../Assets/About/AboutCompusTourImg1.jpg";
import AboutCompusTourImg2 from "../../Assets/About/AboutCompusTourImg2.jpg";
import AboutCompusTourImg3 from "../../Assets/About/AboutCompusTourImg3.jpg";
import AboutCompusTourImg4 from "../../Assets/About/AboutCompusTourImg4.jpg";
import AboutCompusTourImg5 from "../../Assets/About/AboutCompusTourImg5.jpg";
import AboutCompusTourImg6 from "../../Assets/About/AboutCompusTourImg6.jpg";
import AboutCompusTourImg7 from "../../Assets/About/AboutCompusTourImg7.jpg";
import AboutCompusTourImg8 from "../../Assets/About/AboutCompusTourImg8.jpg";
import AboutCompusTourImg9 from "../../Assets/About/AboutCompusTourImg9.jpg";
import AboutCompusTourImg10 from "../../Assets/About/AboutCompusTourImg10.jpg";
import AboutCompusTourImg11 from "../../Assets/About/AboutCompusTourImg11.jpg";
import AboutCompusTourImg12 from "../../Assets/About/AboutCompusTourImg12.jpg";
import AboutCompusTourImg13 from "../../Assets/About/AboutCompusTourImg13.jpg";
import AboutCompusTourImg14 from "../../Assets/About/AboutCompusTourImg14.jpg";
import AboutCompusTourImg15 from "../../Assets/About/AboutCompusTourImg15.jpeg";
import AboutCompusTourImg16 from "../../Assets/About/AboutCompusTourImg16.jpg";
import AboutCompusTourImg17 from "../../Assets/About/AboutCompusTourImg17.jpg";
import AboutCompusTourImg18 from "../../Assets/About/AboutCompusTourImg18.jpg";
import AboutCompusTourImg19 from "../../Assets/About/AboutCompusTourImg19.jpg";
import AboutCompusTourImg20 from "../../Assets/About/AboutCompusTourImg20.jpg";
import AboutCompusTourImg21 from "../../Assets/About/AboutCompusTourImg21.jpg";
// import AboutCompusTourImg22 from "../../Assets/About/AboutCompusTourImg22.jpg";
// import AboutCompusTourImg23 from "../../Assets/About/AboutCompusTourImg23.jpg";


import AboutMentorsCard from "../../Components/aboutMentorsCard/aboutMentorsCard";
import FooterCTASection from "../../Components/footerCTASection/footerCTASection";

function About() {
  const [currentSection, setCurrentSection] = useState(0);
  const handleSectionClick = (index) => {
    setCurrentSection(index);
  };
  const mentorData = [
    {
      img: MentorsImg,
      toplabel: "Food & Chemical",
      details: {
        name: "Shri Hemant Sharma",
        heading: "Managing Director",
        exp: "23 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Influencer Marketing",
      details: {
        name: "Shri. Pratik Gour",
        heading: "Founder",
        exp: "15 years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Social Media ",
      details: {
        name: "Shri. Arrnavb Mitraa",
        heading: "Director - Digital Marketing ",
        exp: "13 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Medical Content Creation ",
      details: {
        name: "Rachita Narsaria",
        heading: "Founder   ",
        exp: "12 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Banking",
      details: {
        name: "Shri. Ronak Shaht",
        heading: "Vice Presiden",
        exp: "12 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "FMCG",
      details: {
        name: "Shri. Ranjit M",
        heading: "Director Marketing",
        exp: "25 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Electronics & Electricals",
      details: {
        name: "Shri.Ankur Agarwal",
        heading: "Founder",
        exp: "11 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Media",
      details: {
        name: "Shri. Rishi Gangoli",
        heading: "Digital Head",
        exp: "15 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "- Advertising",
      details: {
        name: "Shri. Mayank Ghatawat",
        heading: "Director - Buying & Planning",
        exp: "13 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Manufacturing Electronics",
      details: {
        name: "Smt. Tanvi Agarwalt",
        heading: "Co-Founder",
        exp: "12 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Pharmaceutical",
      details: {
        name: "Shri. Jenil Kikani",
        heading: "HR Manager",
        exp: "13 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Social Media ",
      details: {
        name: "Shri. Anand Thakur",
        heading: "Business Development Head",
        exp: "12 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Education ",
      details: {
        name: "Shri. Dinesh K",
        heading: "Co-Founder",
        exp: "15 Years",
      },
    },
    {
      img: MentorsImg,
      toplabel: "Pharmaceutical",
      details: {
        name: "Shri. Rajnish Upadhyay",
        heading: "Sales Head",
        exp: "13 Years",
      },
    },
  ];
  const renderedMentorCards = mentorData.map((data, index) => (
    <AboutMentorsCard
      img={data.img}
      toplabel={data.toplabel}
      details={data.details}
    />
  ));

  return (
    <div className="app-page-sections about-section">

      <div className="app-page-sub-sections">

        <div className="app-container-flex-center about-container">
          <img src={aboutBannerImg} alt="" />
        </div>

        <div className="about-text">
          <h3>
            {" "}
            <Link to="/">Home</Link> / About Us
          </h3>
        </div>

        <div className="about-heading">
          <div
            onClick={() => handleSectionClick(0)}
            className={`about-heading-1 ${currentSection === 0 ? "about-menu-active" : ""
              }`}
          >
            <p>About Us</p>
          </div>
          <div
            onClick={() => handleSectionClick(1)}
            className={`about-heading-1 ${currentSection === 1 ? "about-menu-active" : ""
              }`}
          >
            <p>Director's Message</p>
          </div>
          <div
            onClick={() => handleSectionClick(2)}
            className={`about-heading-1 ${currentSection === 2 ? "about-menu-active" : ""
              }`}
          >
            <p>Our Mentors</p>
          </div>
          <div
            onClick={() => handleSectionClick(3)}
            className={`about-heading-1 ${currentSection === 3 ? "about-menu-active" : ""
              }`}
          >
            <p>Campus Tour</p>
          </div>
        </div>

        {/* About Us */}
        {currentSection === 0 && (
          <div className="about-about-us fade-in ">
            <h3>India’s first corporate ready business school</h3>
            <h4>-Viven Eduversity</h4>
            <div className="about-about-us-para">
              <p>
                Viven Eduversity is making students corporate ready by focusing
                on providing an environment, faculties, and infrastructure that
                align with the corporate world is indeed a step ahead in
                preparing students for their professional journey
              </p>
              <p>
                To begin with, the faculty members play a crucial role in
                shaping the mindset and skills of the students. By hiring
                faculty members who have a strong background in the corporate
                sector, the college ensures that the students receive practical
                and industry-relevant knowledge. These faculty members bring
                with them a wealth of experience, which they can share with the
                students, enabling them to understand the nuances of the
                corporate world better. Additionally, these faculties are up to
                date with the latest trends and developments in the industry,
                ensuring that the students are well-informed about the
                ever-changing business landscape.
              </p>
              <p>
                Apart from the faculty, the infrastructure of the college also
                mimics that of a corporate setting. The classrooms are equipped
                with state-of-the-art technology, thereby creating an atmosphere
                that is conducive to learning and preparing the students for the
                digitalized corporate world. The college may also have dedicated
                spaces such as mock boardrooms or business centers, where
                students can practice their presentation and negotiation skills,
                further enhancing their corporate readiness.
              </p>
            </div>

            <div className="about-about-us-img-main-box">
              <div className="about-about-us-img-sub-box">
                <img src={aboutboximg1} alt="" />

                <img src={aboutboximg2} alt="" />
              </div>

              <div className="about-about-us-img-sub-box">
                <img src={aboutboximg3} alt="" />

                <img src={aboutboximg4} alt="" />
              </div>
            </div>

            <div className="about-about-us-para">
              <p>
                One of the standout features of our B-School is the
                international summer internship opportunity provided to all
                students. Internships are an essential part of an MBA program as
                they offer practical exposure to students, allowing them to
                apply their theoretical knowledge in real-world scenarios. By
                providing international internships, the college gives students
                a chance to gain cross-cultural experience, understand global
                business operations, and develop a global perspective. This
                exposure prepares the students to work in multinational
                corporations and gives them a competitive edge in the job
                market.
              </p>
              <p>
                Viven Eduversity focuses on making students corporate ready
                through its faculties, infrastructure, and international summer
                internship programs is undoubtedly providing a comprehensive
                education. By placing students in a corporate-like environment,
                equipping them with industry-relevant knowledge and skills, and
                offering international exposure, this college ensures that its
                graduates are well-prepared for the challenges of the corporate
                world.
              </p>
            </div>
          </div>
        )}

        {/* Director's Message */}

        {currentSection === 1 && (
          <div className="about-directurs-message  fade-in ">
            <h1>Director's Message</h1>

            <div className="about-directurs-message-card-box">
              <div className="about-directurs-message-card-box-img">
                <img src={DirectorImg} alt="" />
              </div>
              <div className="about-directurs-message-card-box-img-name">
                <h3>Director's Name</h3>
                <h3>Director</h3>
              </div>
            </div>

            <h3>
              Welcome to our prestigious Viven Eduversity, a global center for
              excellence in management education.{" "}
            </h3>

            <div className="about-directurs-message-para">
              <p>
                At Viven Eduversity, we believe in shaping visionary leaders who
                will transform the dynamic business landscape. With a rich
                legacy of providing top-notch education and consistently
                producing outstanding graduates, we take immense pride in being
                one of the leading business schools in the region.
              </p>
              <p>
                Our college is renowned for its rigorous academic curriculum,
                which is carefully crafted to provide our students with a
                comprehensive understanding of contemporary business practices.
                We offer a diverse range of specializations, ensuring that our
                students are equipped with the necessary skills and knowledge to
                excel in various sectors and industries.
              </p>
              <p>
                One of the highlights of our college is our distinguished
                faculty, comprising experienced academicians and industry
                experts. Their unparalleled expertise and guidance empower our
                students to think critically, innovate, and develop a strategic
                mindset essential for success in today's competitive world.
              </p>
              <p>
                Equally important is our state-of-the-art infrastructure,
                ensuring a stimulating learning experience for our students. Our
                modern classrooms, well-equipped libraries, research centers,
                and technologically advanced facilities truly create an
                environment conducive to academic growth and personal
                development.
              </p>
              <p>
                In addition to academic excellence, we foster a culture of
                holistic development, providing students with numerous
                opportunities to engage in extracurricular activities, industry
                internships, and global exchange programs. These experiences
                nurture the growth of skills such as leadership, teamwork, and
                cross-cultural understanding, essential for a well-rounded
                business professional.
              </p>
              <p>
                In addition to academic excellence, we foster a culture of
                holistic development, providing students with numerous
                opportunities to engage in extracurricular activities, industry
                internships, and global exchange programs. These experiences
                nurture the growth of skills such as leadership, teamwork, and
                cross-cultural understanding, essential for a well-rounded
                business professional.
              </p>
              <p>
                We invite you to join our esteemed Management program, where you
                will embark on a transformative educational journey that will
                equip you with the skills, knowledge, and confidence to become a
                successful business leader in the global arena.
              </p>
            </div>

            <h5>
              Welcome to Viven Eduversity, where your aspirations meet unlimited
              possibilities!
            </h5>
          </div>
        )}

        {/* Our's Mentors */}

        {currentSection === 2 && (
          <div className="about-our-mentors fade-in ">
            <h1>Our's Mentors</h1>
            <p>
              The initiative of Mentor – Mentee relationship is with an
              objective to motivate and guide our students and all those who
              interact with us, in order to make them aware of the corporate
              world and enable them to make the right career decisions.
            </p>
            <p>
              Mentor shall do a thorough Profile assessment of the student and
              support them in achieving their career goal.
            </p>

            <div className="about-our-mentors-card-box">
              {renderedMentorCards}

              {/* <div className="about-our-mentors-card">

                            <div className="about-our-mentors-card-img">
                                <img src={MentorsImg} alt="" />
                                <span className='about-food'>Food & Chemical</span>
                                <span className='about-data'>
                                    <h4>Managing Director</h4>
                                    <h5>Shri.Hemant Sharma</h5>
                                    <h6>Exp-23 Years</h6>
                                </span>
                            </div>
                            <div className="about-our-mentors-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect width="24" height="24" rx="12" fill="#B0B0B0" />
                                    <path d="M13.1412 11.0811L17.6083 6H16.5495L12.6719 10.4117L9.57327 6H6L10.685 12.672L6 18H7.05875L11.1543 13.3406L14.4267 18H18L13.1412 11.0811ZM11.6916 12.7303L11.217 12.066L7.43989 6.78H9.06595L12.1134 11.046L12.588 11.7103L16.5504 17.256H14.9243L11.6916 12.7303Z" fill="white" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect width="24" height="24" rx="12" fill="#B0B0B0" />
                                    <path d="M12 5C10.1004 5 9.8615 5.00875 9.11513 5.042C8.36875 5.077 7.86037 5.19425 7.415 5.3675C6.94783 5.54322 6.52468 5.81885 6.17513 6.17513C5.81907 6.52486 5.54347 6.94796 5.3675 7.415C5.19425 7.8595 5.07613 8.36875 5.042 9.1125C5.00875 9.86062 5 10.0986 5 12.0009C5 13.9014 5.00875 14.1394 5.042 14.8857C5.077 15.6313 5.19425 16.1396 5.3675 16.585C5.54688 17.0452 5.78575 17.4355 6.17513 17.8249C6.56363 18.2142 6.95388 18.454 7.41412 18.6325C7.86037 18.8057 8.36788 18.9239 9.11338 18.958C9.86063 18.9913 10.0986 19 12 19C13.9014 19 14.1385 18.9913 14.8857 18.958C15.6304 18.923 16.1405 18.8057 16.5859 18.6325C17.0527 18.4567 17.4756 18.1811 17.8249 17.8249C18.2142 17.4355 18.4531 17.0452 18.6325 16.585C18.8049 16.1396 18.923 15.6313 18.958 14.8857C18.9913 14.1394 19 13.9014 19 12C19 10.0986 18.9913 9.86063 18.958 9.11338C18.923 8.36875 18.8049 7.8595 18.6325 7.415C18.4566 6.94795 18.181 6.52484 17.8249 6.17513C17.4754 5.81872 17.0522 5.54306 16.585 5.3675C16.1388 5.19425 15.6295 5.07613 14.8849 5.042C14.1376 5.00875 13.9005 5 11.9983 5H12ZM11.3726 6.26175H12.0009C13.8699 6.26175 14.0912 6.26788 14.8289 6.302C15.5114 6.33263 15.8824 6.44725 16.1291 6.54262C16.4555 6.6695 16.6891 6.82175 16.9341 7.06675C17.1791 7.31175 17.3305 7.5445 17.4574 7.87175C17.5536 8.11762 17.6674 8.48863 17.698 9.17113C17.7321 9.90875 17.7391 10.1301 17.7391 11.9983C17.7391 13.8664 17.7321 14.0886 17.698 14.8263C17.6674 15.5087 17.5528 15.8789 17.4574 16.1256C17.3451 16.4296 17.166 16.7044 16.9332 16.9297C16.6882 17.1747 16.4555 17.3261 16.1283 17.453C15.8833 17.5493 15.5122 17.663 14.8289 17.6945C14.0912 17.7278 13.8699 17.7356 12.0009 17.7356C10.1319 17.7356 9.90963 17.7278 9.172 17.6945C8.4895 17.663 8.11937 17.5493 7.87262 17.453C7.56856 17.3409 7.29349 17.1621 7.06763 16.9297C6.83466 16.704 6.65526 16.429 6.54262 16.1248C6.44725 15.8789 6.33263 15.5079 6.302 14.8254C6.26875 14.0878 6.26175 13.8664 6.26175 11.9965C6.26175 10.1275 6.26875 9.907 6.302 9.16937C6.3335 8.48687 6.44725 8.11588 6.5435 7.86913C6.67037 7.54275 6.82262 7.30912 7.06763 7.06413C7.31262 6.81912 7.54537 6.66775 7.87262 6.54088C8.11937 6.44463 8.4895 6.33088 9.172 6.29938C9.81775 6.26963 10.068 6.26088 11.3726 6.26V6.26175ZM15.7371 7.42375C15.6268 7.42375 15.5176 7.44548 15.4157 7.48769C15.3138 7.52991 15.2212 7.59178 15.1432 7.66978C15.0652 7.74778 15.0033 7.84038 14.9611 7.9423C14.9189 8.04421 14.8971 8.15344 14.8971 8.26375C14.8971 8.37406 14.9189 8.48329 14.9611 8.5852C15.0033 8.68712 15.0652 8.77972 15.1432 8.85772C15.2212 8.93572 15.3138 8.99759 15.4157 9.03981C15.5176 9.08202 15.6268 9.10375 15.7371 9.10375C15.9599 9.10375 16.1736 9.01525 16.3311 8.85772C16.4886 8.70019 16.5771 8.48653 16.5771 8.26375C16.5771 8.04097 16.4886 7.82731 16.3311 7.66978C16.1736 7.51225 15.9599 7.42375 15.7371 7.42375ZM12.0009 8.4055C11.5241 8.39806 11.0505 8.48555 10.6079 8.66287C10.1652 8.8402 9.7622 9.10381 9.42238 9.43837C9.08256 9.77293 8.81269 10.1717 8.62849 10.6116C8.44428 11.0515 8.34941 11.5236 8.34941 12.0004C8.34941 12.4773 8.44428 12.9494 8.62849 13.3893C8.81269 13.8291 9.08256 14.2279 9.42238 14.5625C9.7622 14.8971 10.1652 15.1607 10.6079 15.338C11.0505 15.5153 11.5241 15.6028 12.0009 15.5954C12.9446 15.5807 13.8447 15.1954 14.5069 14.5228C15.169 13.8503 15.5402 12.9443 15.5402 12.0004C15.5402 11.0566 15.169 10.1506 14.5069 9.47803C13.8447 8.80545 12.9446 8.42022 12.0009 8.4055ZM12.0009 9.66638C12.3073 9.66638 12.6108 9.72674 12.8939 9.84401C13.177 9.96129 13.4343 10.1332 13.651 10.3499C13.8677 10.5666 14.0396 10.8238 14.1569 11.107C14.2741 11.3901 14.3345 11.6935 14.3345 12C14.3345 12.3065 14.2741 12.6099 14.1569 12.893C14.0396 13.1762 13.8677 13.4334 13.651 13.6501C13.4343 13.8668 13.177 14.0387 12.8939 14.156C12.6108 14.2733 12.3073 14.3336 12.0009 14.3336C11.382 14.3336 10.7884 14.0878 10.3508 13.6501C9.91311 13.2125 9.66725 12.6189 9.66725 12C9.66725 11.3811 9.91311 10.7875 10.3508 10.3499C10.7884 9.91224 11.382 9.66638 12.0009 9.66638Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect width="24" height="24" rx="12" fill="#B0B0B0" />
                                    <path d="M16.9598 7.03704C16.3148 6.38879 15.5466 5.87481 14.6998 5.52508C13.8531 5.17535 12.9449 4.99686 12.0281 5.00004C8.18693 5.00004 5.05628 8.11503 5.05628 11.937C5.05628 13.162 5.3799 14.352 5.98492 15.402L5 19L8.69347 18.034C9.71357 18.587 10.8603 18.881 12.0281 18.881C15.8693 18.881 19 15.766 19 11.944C19 10.089 18.2754 8.34603 16.9598 7.03704ZM12.0281 17.705C10.9869 17.705 9.96683 17.425 9.07337 16.9L8.86231 16.774L6.66734 17.348L7.25126 15.22L7.11055 15.003C6.53208 14.0839 6.22492 13.0215 6.22412 11.937C6.22412 8.75903 8.82714 6.16904 12.0211 6.16904C13.5688 6.16904 15.0251 6.77104 16.1156 7.86303C16.6555 8.39781 17.0834 9.03389 17.3744 9.73443C17.6655 10.435 17.8139 11.186 17.8111 11.944C17.8251 15.122 15.2221 17.705 12.0281 17.705ZM15.208 13.393C15.0322 13.309 14.1739 12.889 14.0191 12.826C13.8573 12.77 13.7447 12.742 13.6251 12.91C13.5055 13.085 13.1749 13.477 13.0764 13.589C12.9779 13.708 12.8724 13.722 12.6965 13.631C12.5206 13.547 11.9578 13.358 11.2965 12.77C10.7759 12.308 10.4312 11.741 10.3256 11.566C10.2271 11.391 10.3116 11.3 10.403 11.209C10.4804 11.132 10.5789 11.006 10.6633 10.908C10.7477 10.81 10.7829 10.733 10.8392 10.621C10.8955 10.502 10.8673 10.404 10.8251 10.32C10.7829 10.236 10.4312 9.38203 10.2905 9.03203C10.1497 8.69603 10.002 8.73803 9.89648 8.73103H9.55879C9.4392 8.73103 9.25628 8.77303 9.09447 8.94803C8.9397 9.12303 8.48945 9.54303 8.48945 10.397C8.48945 11.251 9.11558 12.077 9.2 12.189C9.28442 12.308 10.4312 14.058 12.1759 14.807C12.591 14.989 12.9146 15.094 13.1678 15.171C13.5829 15.304 13.9628 15.283 14.2653 15.241C14.603 15.192 15.2995 14.821 15.4402 14.415C15.5879 14.009 15.5879 13.666 15.5387 13.589C15.4894 13.512 15.3839 13.477 15.208 13.393Z" fill="white" />
                                </svg>


                            </div>

                        </div> */}
            </div>
          </div>
        )}

        {/* Campus Tour */}

        {currentSection === 3 && (
          <div className="about-compus-tour fade-in ">
            <h1>Campus Tour</h1>
            <div className="about-compus-tour-box">
              <img src={AboutCompusTourImg1} alt="" className="bigImg" />
              <img src={AboutCompusTourImg2} alt="" />
              <img src={AboutCompusTourImg3} alt="" />
            </div>

            <div className="about-compus-tour-box reverse">
              <img src={AboutCompusTourImg4} alt="" className="bigImg" />
              <img src={AboutCompusTourImg5} alt="" />
              <img src={AboutCompusTourImg6} alt="" />
            </div>

            <div className="about-compus-tour-box">
              <img src={AboutCompusTourImg7} alt="" className="bigImg" />
              <img src={AboutCompusTourImg8} alt="" />
              <img src={AboutCompusTourImg9} alt="" />
            </div>

            <div className="about-compus-tour-box reverse">
              <img src={AboutCompusTourImg10} alt="" className="bigImg" />
              <img src={AboutCompusTourImg11} alt="" />
              <img src={AboutCompusTourImg12} alt="" />
            </div>

            <div className="about-compus-tour-box">
              <img src={AboutCompusTourImg13} alt="" className="bigImg" />
              <img src={AboutCompusTourImg14} alt="" />
              <img src={AboutCompusTourImg15} alt="" />
            </div>

            <div className="about-compus-tour-box">
              <img src={AboutCompusTourImg16} alt="" className="bigImg" />
              <img src={AboutCompusTourImg17} alt="" />
              <img src={AboutCompusTourImg18} alt="" />
            </div>

            <div className="about-compus-tour-box">
              <img src={AboutCompusTourImg19} alt="" className="bigImg" />
              <img src={AboutCompusTourImg20} alt="" />
              <img src={AboutCompusTourImg21} alt="" />
            </div>

            {/* <div className="about-compus-tour-box">
              <img src={AboutCompusTourImg22} alt="" className="bigImg" />
              <img src={AboutCompusTourImg23} alt="" />
              <img src={AboutCompusTourImg24} alt="" />
            </div> */}

          </div>
        )}
      </div>
      <FooterCTASection />
    </div>
  );
}

export default About;

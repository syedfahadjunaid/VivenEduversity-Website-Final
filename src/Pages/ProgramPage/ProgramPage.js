import React from "react";
import "./ProgramPage.css";

import { Link } from "react-router-dom";

import ProgramDetailsCard from "../../Components/programDetailsCard/ProgramDetailsCard";

import ProgramPageBanner from "../../Components/ProgramPageBanner/ProgramPageBanner";

import ProgramPageBannerImg from "../../Assets/ProgramPage/programpagebannerimg.png";

import ProgramDetailsCardImg1 from "../../Assets/ProgramPage/programDetailsCardImg1.png";
import ProgramDetailsCardImg2 from "../../Assets/ProgramPage/programDetailsCardImg2.png";
import ProgramDetailsCardImg3 from "../../Assets/ProgramPage/programDetailsCardImg3.png";
import ProgramDetailsCardImg4 from "../../Assets/ProgramPage/programDetailsCardImg4.png";
import ProgramDetailsCardImg5 from "../../Assets/ProgramPage/programDetailsCardImg5.png";

import BackgroundImgProgramDetailsCard from "../../Assets/ProgramPage/bg img.png";
import bgImage2 from "../../Assets/ProgramPage/bg img(1).png";

import eligibilityImage from "../../Assets/ProgramPage/Group(3).png";

import outComeImage from "../../Assets/ProgramPage/18133612_Isometric_flat_illustration_concept_courses_and_online_learning2 1.png";

import rectImage from "../../Assets/ProgramPage/Rectangle 72.jpg";

import ContactUsComp from "../../Components/contactCard/contactCard";

import FooterCTASection from "../../Components/footerCTASection/footerCTASection";

import ProgramButtons from "../../Components/ProgramButtons/ProgramButtons";

function ProgramPage() {
  const programDetailsCardData = [
    {
      img: ProgramDetailsCardImg1,
      number: "4",
      heading: "Semester in 2 years",
    },
    {
      img: ProgramDetailsCardImg2,
      number: "1500+",
      heading: "Learning Hours",
    },
    {
      img: ProgramDetailsCardImg3,
      number: "500+",
      heading: " Practical Learning hours ",
    },
    {
      img: ProgramDetailsCardImg4,
      number: "200+",
      heading: "CXOs and Startups Leaders",
    },
    {
      img: ProgramDetailsCardImg5,
      number: "75+",
      heading: "Corporate Partners",
    },
    {
      img: ProgramDetailsCardImg1,
      number: "50+",
      heading: "Case study",
    },
    {
      img: ProgramDetailsCardImg2,
      number: "25+",
      heading: "Workshops",
    },
    {
      img: ProgramDetailsCardImg3,
      number: "7+",
      heading: "Additional Certification",
    },
    {
      img: ProgramDetailsCardImg4,
      number: "2+",
      heading: "Real Life Start up Built",
    },
    {
      img: ProgramDetailsCardImg5,
      number: "1+",
      heading: "International Summer Internship",
    },
  ];
  const renderedProgramDetailsCard = programDetailsCardData.map(
    (data, index) => (
      <ProgramDetailsCard
        key={index}
        img={data.img}
        number={data.number}
        heading={data.heading}
      />
    )
  );
  return (
    <>
      <div className='app-page-sections  program-page-section'>
        <div className='app-page-sub-sections sub-program-page-section'>
          <ProgramPageBanner
            img={ProgramPageBannerImg}
            heading='PGP in Entrepreneurship & Family Business (PGPEFB)'
          />

          <h3>Learning Philosophy</h3>

          <div className='program-page-learning-philosophy'>
            <div className='program-page-learning-philosophy-box'>
              <li>
                <b>Build strong business fundamentals</b>
              </li>
              <p>
                We prioritize depth over breadth, our curriculum is curated by
                startup experts to build a deep understanding of core concepts,
                taught via cutting edge case studies, simulations and real-world
                capstone projects.
              </p>
              <br />
              <li>
                <b>Become a part of the startup ecosystem</b>
              </li>
              <p>
                The best way to learn skills that are important in the real
                world is to truly immerse oneself in an ecosystem. To develop
                startup leaders we immerse each of our candidate in Mumbai’s
                startup ecosystem: Visit startups, network with VCs, learn from
                startup CXOs/practitioners.
              </p>
            </div>

            <div className='program-page-learning-philosophy-box box-border-right'>
              <li>
                <b>Unlearn, Learn & Be Perfect</b>
              </li>
              <p>
                All business concepts learnt are applied to real world contexts
                via live projects with startups, short 1-day challenges while
                building small businesses. We believe it is important for
                candidates to try, fail, get feedback (from CXOs) and iterate on
                solutions to truly grasp concepts.
              </p>
              <br />
              <li>
                <b>Develop into an honest and brave leader </b>
              </li>
              <p>
                Success in the business world requires more than just technical
                skills and business knowledge. At Viven, we focus on developing
                an allrounder individual by having them go through extensive
                workshops that develop personality, emotional intelligence,
                awareness of environment and empathy.
              </p>
            </div>
          </div>

          {/* <div className='program-page-learning-philosophy-apply-button'>
          <button className='apply-button'>Apply Now</button>
          <button className='download-button'>
            DOWNLOAD BROCHURE
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='19'
              viewBox='0 0 18 19'
              fill='none'>
              <path
                d='M8.93378 9.12785V15.4556M8.93378 15.4556L11.1671 13.2223M8.93378 15.4556L6.70045 13.2223M5.956 5.80465C6.51307 5.88432 7.02912 6.14299 7.42628 6.54165M13.0282 10.989C14.159 10.989 14.8893 10.0726 14.8893 8.94174C14.8893 8.49405 14.7425 8.05871 14.4714 7.7024C14.2004 7.34609 13.82 7.08846 13.3885 6.96897C13.3222 6.13404 12.9761 5.3459 12.4064 4.73198C11.8366 4.11806 11.0765 3.71423 10.2488 3.58578C9.42119 3.45734 8.57441 3.61179 7.8454 4.02416C7.11639 4.43653 6.54776 5.08272 6.23145 5.85825C5.56549 5.67365 4.85347 5.76116 4.25203 6.10153C3.65058 6.4419 3.20899 7.00725 3.02438 7.67321C2.83978 8.33917 2.92728 9.05119 3.26765 9.65263C3.60802 10.2541 4.17338 10.6957 4.83934 10.8803'
                stroke='#52525B'
                stroke-width='1.48889'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </div> */}
          <ProgramButtons />

          <div
            className='program-page-program-details-main'
            style={{
              backgroundImage: `url("${BackgroundImgProgramDetailsCard}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPositionY: "bottom",
            }}>
            <div className='program-page-program-details'>
              <h3>Program Details </h3>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='83'
                height='149'
                viewBox='0 0 83 149'
                fill='none'>
                <path
                  d='M4.37769 9.91455C1.66345 9.4062 -0.124763 6.79378 0.383591 4.07955C0.891937 1.36532 3.50436 -0.422897 6.21858 0.085453L4.37769 9.91455ZM22.5285 148.5C19.7671 148.516 17.5158 146.29 17.5 143.529L17.2428 98.5293C17.2271 95.7679 19.4528 93.5166 22.2142 93.5008C24.9756 93.485 27.2269 95.7108 27.2427 98.4722L27.4713 138.472L67.4706 138.243C70.232 138.227 72.4833 140.453 72.4991 143.214C72.5149 145.976 70.2891 148.227 67.5278 148.243L22.5285 148.5ZM6.21858 0.085453C26.1005 3.80915 43.0497 8.93197 55.8311 16.1179C68.6656 23.3336 77.7423 32.9012 80.8557 45.5781C83.9426 58.1476 80.8825 72.65 71.9696 89.1778C63.0439 105.729 47.9658 124.853 26.0556 147.015L18.9442 139.985C40.534 118.147 54.8809 99.7983 63.1678 84.4314C71.4675 69.0407 73.4074 57.1784 71.1442 47.9631C68.9074 38.8552 62.2839 31.2178 50.9304 24.8347C39.5237 18.4217 23.7971 13.5516 4.37769 9.91455L6.21858 0.085453Z'
                  fill='#11458F'
                />
              </svg>
              <br />
              <br />
            </div>

            <div className='program-page-program-details-card'>
              {renderedProgramDetailsCard}
            </div>
          </div>

          <div className='program-page-gain-comp'>
            <h2>What would you gain at the end of Program?</h2>
            <div className='program-page-gain-comp-main'>
              <div className='program-page-gain-comp-main-heading'>
                <h3>Marketing Strategies</h3>
                <div className='program-page-gain-comp-main-heading-points'>
                  <p>Startup Business Models</p>
                  <p>Understanding the Customer</p>
                  <p>Business Analytics</p>
                  <p>Applications of AI in Business</p>
                </div>
              </div>
              <div className='program-page-gain-comp-main-heading'>
                <h3>Financial Statements</h3>
                <div className='program-page-gain-comp-main-heading-points'>
                  <p>Startup Business Models</p>
                  <p>Understanding the Customer</p>
                  <p>Business Analytics</p>
                  <p>Applications of AI in Business</p>
                </div>
              </div>
              <div className='program-page-gain-comp-main-heading'>
                <h3>Financial Statements</h3>
                <div className='program-page-gain-comp-main-heading-points'>
                  <p>Startup Business Models</p>
                  <p>Understanding the Customer</p>
                  <p>Business Analytics</p>
                  <p>Applications of AI in Business</p>
                </div>
              </div>
              <div className='program-page-gain-comp-main-heading'>
                <h3>Financial Statements</h3>
                <div className='program-page-gain-comp-main-heading-points'>
                  <p>Startup Business Models</p>
                  <p>Understanding the Customer</p>
                  <p>Business Analytics</p>
                  <p>Applications of AI in Business</p>
                </div>
              </div>
              <div className='program-page-gain-comp-main-heading'>
                <h3>Financial Statements</h3>
                <div className='program-page-gain-comp-main-heading-points'>
                  <p>Startup Business Models</p>
                  <p>Understanding the Customer</p>
                  <p>Business Analytics</p>
                  <p>Applications of AI in Business</p>
                </div>
              </div>
              <div className='program-page-gain-comp-main-heading-img-div'>
                <img
                  src={rectImage}
                  className='program-page-gain-comp-main-heading-img'
                  alt='rectImg'
                />
              </div>
            </div>
          </div>

          <div className='program-page-outcome-comp'>
            <h2>Program outcome through Workshops & Case Study?</h2>
            <div className='program-page-outcome-comp-main'>
              <ul className='program-page-outcome-comp-main-points'>
                <li>Business Storytelling</li>
                <li>Writing and Structuring Business Insights</li>
                <li>Selling Yourself and Your idea</li>
                <li>Creating a Winner's mindset</li>
              </ul>
              <ul className='program-page-outcome-comp-main-points'>
                <li>How to Influence without authority</li>
                <li>The art of Negotiation</li>
                <li>People First or Profits?</li>
                <li>Gamification Principles in business</li>
              </ul>
              <ul className='program-page-outcome-comp-main-points'>
                <li>Personal Branding</li>
                <li>Common Frameworks for Decision Making</li>
                <li>The Art of Managing Conflicts</li>
                <li>Leveraging AI tools to your advantage</li>
              </ul>
              <ul className='program-page-outcome-comp-main-points'>
                <li>Talking to Customers</li>
                <li>Building an ecommerce store - Shopify</li>
                <li>Decoding Marketing Funnel</li>
                <li>The emerging Landscape in India: Agri-tech</li>
              </ul>
              <ul className='program-page-outcome-comp-main-points'>
                <li>Gaming industry in India</li>
                <li>Economics of Cloud Kitchens</li>
                <li>Hyper-local Delivery Businesses</li>
                <li>How to craft great presentations - Canva</li>
              </ul>
              <div className='program-page-outcome-comp-main-img-div'>
                <img
                  className='program-page-outcome-comp-main-img'
                  src={outComeImage}
                  alt='outComeImage'
                />
              </div>
            </div>
          </div>

          <div className='program-page-eligibility'>
            <div className='program-page-eligibility-heading'>
              <h2>Eligibility</h2>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='83'
                height='149'
                viewBox='0 0 83 149'
                fill='none'>
                <path
                  d='M4.37769 9.91455C1.66345 9.4062 -0.124763 6.79378 0.383591 4.07955C0.891937 1.36532 3.50436 -0.422897 6.21858 0.085453L4.37769 9.91455ZM22.5285 148.5C19.7671 148.516 17.5158 146.29 17.5 143.529L17.2428 98.5293C17.2271 95.7679 19.4528 93.5166 22.2142 93.5008C24.9756 93.485 27.2269 95.7108 27.2427 98.4722L27.4713 138.472L67.4706 138.243C70.232 138.227 72.4833 140.453 72.4991 143.214C72.5149 145.976 70.2891 148.227 67.5278 148.243L22.5285 148.5ZM6.21858 0.085453C26.1005 3.80915 43.0497 8.93197 55.8311 16.1179C68.6656 23.3336 77.7423 32.9012 80.8557 45.5781C83.9426 58.1476 80.8825 72.65 71.9696 89.1778C63.0439 105.729 47.9658 124.853 26.0556 147.015L18.9442 139.985C40.534 118.147 54.8809 99.7983 63.1678 84.4314C71.4675 69.0407 73.4074 57.1784 71.1442 47.9631C68.9074 38.8552 62.2839 31.2178 50.9304 24.8347C39.5237 18.4217 23.7971 13.5516 4.37769 9.91455L6.21858 0.085453Z'
                  fill='#11458F'
                />
              </svg>
            </div>
            <div
              className='program-page-eligibility-main'
              style={{
                backgroundImage: `url("${bgImage2}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
              <div className='program-page-eligibility-main-content'>
                <div className='program-page-eligibility-main-content-left'>
                  <div className='program-page-eligibility-main-content-left-heading'>
                    <h3>Principal objective</h3>
                  </div>
                  <div className='program-page-eligibility-main-content-left-point'>
                    <p>Hunger for Start up</p>
                  </div>
                  <div className='program-page-eligibility-main-content-left-heading'>
                    <h3>Entrance Exam</h3>
                  </div>
                  <div className='program-page-eligibility-main-content-left-point'>
                    <p>CAT, CET, CMAT, ATMA, MAT, GMAT, own EE</p>
                  </div>
                  <div className='program-page-eligibility-main-content-left-heading'>
                    <h3>Graduation</h3>
                  </div>
                  <div className='program-page-eligibility-main-content-left-point'>
                    <p>Passout / Appearing</p>
                  </div>
                  <div className='program-page-eligibility-main-content-left-heading'>
                    <h3>Batch Size</h3>
                  </div>
                  <div className='program-page-eligibility-main-content-left-point'>
                    <p>60</p>
                  </div>
                  <div className='program-page-eligibility-main-content-left-heading'>
                    <h3>Admission Process</h3>
                  </div>
                  <div className='program-page-eligibility-main-content-left-point'>
                    <p>Personal Interview</p>
                  </div>
                  <div className='program-page-eligibility-main-content-left-heading'>
                    <h3>Passport</h3>
                  </div>
                  <div className='program-page-eligibility-main-content-left-point'>
                    <p>Valid for atleast next 3 years</p>
                  </div>
                </div>
                <div className='program-page-eligibility-main-content-right'>
                  <img
                    className='program-page-eligibility-main-content-right-img'
                    src={eligibilityImage}
                    alt='eligibilityImage'
                  />
                </div>
              </div>
            </div>
            {/* <div className='program-page-learning-philosophy-apply-button'>
            <button className='apply-button'>Apply Now</button>
            <button className='download-button'>
              DOWNLOAD BROCHURE
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'>
                <path
                  d='M8.93378 9.12785V15.4556M8.93378 15.4556L11.1671 13.2223M8.93378 15.4556L6.70045 13.2223M5.956 5.80465C6.51307 5.88432 7.02912 6.14299 7.42628 6.54165M13.0282 10.989C14.159 10.989 14.8893 10.0726 14.8893 8.94174C14.8893 8.49405 14.7425 8.05871 14.4714 7.7024C14.2004 7.34609 13.82 7.08846 13.3885 6.96897C13.3222 6.13404 12.9761 5.3459 12.4064 4.73198C11.8366 4.11806 11.0765 3.71423 10.2488 3.58578C9.42119 3.45734 8.57441 3.61179 7.8454 4.02416C7.11639 4.43653 6.54776 5.08272 6.23145 5.85825C5.56549 5.67365 4.85347 5.76116 4.25203 6.10153C3.65058 6.4419 3.20899 7.00725 3.02438 7.67321C2.83978 8.33917 2.92728 9.05119 3.26765 9.65263C3.60802 10.2541 4.17338 10.6957 4.83934 10.8803'
                  stroke='#52525B'
                  stroke-width='1.48889'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div> */}
          </div>
        </div>
      </div>
      <div
        className='contactCompInProgramPages'
        style={{ width: "90%", height: "80vh" }}>
        <ContactUsComp />
      </div>
      <FooterCTASection />
    </>
  );
}

export default ProgramPage;

import React from "react";
import "./ProgramPostGraduate.css";

import bannerImage from "../../Assets/ProgramPage/postgraduate/box.jpg";

import ProgramButtons from "../../Components/ProgramButtons/ProgramButtons";

import outComeImage from "../../Assets/ProgramPage/postgraduate/Rectangle 53(1).jpg";

import { Link } from "react-router-dom";

import eligibilityImage from "../../Assets/ProgramPage/postgraduate/OBJECT.png";
import bgImage2 from "../../Assets/ProgramPage/bg img(1).png";
import ContactUsComp from "../../Components/contactCard/contactCard";
import FooterCTASection from "../../Components/footerCTASection/footerCTASection";

import firstSectionImage1 from "../../Assets/ProgramPage/postgraduate/Rectangle 53.jpg";
import firstSectionImage2 from "../../Assets/ProgramPage/postgraduate/Rectangle 54.jpg";
import firstSectionImage3 from "../../Assets/ProgramPage/postgraduate/Rectangle 55.jpg";
import firstSectionImage4 from "../../Assets/ProgramPage/postgraduate/Rectangle 56.jpg";

import cardImage1 from "../../Assets/ProgramPage/postgraduate/training_9919465 1.png";
import cardImage2 from "../../Assets/ProgramPage/postgraduate/Capa_1(1).png";
import cardImage3 from "../../Assets/ProgramPage/postgraduate/Group(4).png";
import cardImage4 from "../../Assets/ProgramPage/postgraduate/online_2989078 1.png";

import ProgramDetailsCard from "../../Components/programDetailsCard/ProgramDetailsCard";

export default function ProgramPostGraduate() {
  const programDetailsCardData = [
    {
      img: cardImage1,
      //   number: "4",
      heading: "Stock/Mutual fund training",
    },
    {
      img: cardImage2,
      //   number: "1500+",
      heading: "Advanced Microsoft Office Training",
    },
    {
      img: cardImage3,
      //   number: "500+",
      heading: "Business English Certification",
    },
    {
      img: cardImage4,
      //   number: "200+",
      heading: "Digital Marketing Training",
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
      <div className='programPostGraduate-page'>
        <div className='programPostGraduate-page-banner'>
          <img src={bannerImage} alt='bannerImage' />
          <div
            className='programPostGraduate-page-banner-text'
            style={{ color: "white" }}>
            <h2>Post Graduate Programme in Management</h2>
          </div>
        </div>
        <div className='programPostGraduate-page-banner-breadcrumbs'>
          <p>
            <Link style={{ fontWeight: 600 }} to='/'>
              Home
            </Link>
            /
          </p>
          <p>Post Graduate Programme in Management</p>
        </div>
        <div className='programPostGraduate-ProgrammeManagement'>
          <h2>Post Graduate Programme in Management (PGPM)</h2>
          <div className='programPostGraduate-ProgrammeManagement-main'>
            <div className='programPostGraduate-ProgrammeManagement-main-left'>
              <p>
                A post-graduate program in management is a degree program
                designed to provide advanced education and training in various
                areas of management. These programs are typically available to
                individuals who have already completed an undergraduate
                degree.The curriculum of a post-graduate program in management
                typically includes a combination of core business courses and
                specialized courses in areas such as finance, marketing, human
                resources, operations, and strategy. The program also includes
                opportunities for international internships or experiential
                learning, allowing students to apply their knowledge in
                real-world business situations. Overall, a post-graduate program
                in management provides individuals with the knowledge, skills,
                and capabilities needed to succeed in managerial and leadership
                roles in today's highly competitive business environment.
              </p>
              <ProgramButtons />
            </div>
            <div className='programPostGraduate-ProgrammeManagement-main-right'>
              <img src={firstSectionImage1} alt='firstSectionImage1' />
              <img src={firstSectionImage2} alt='firstSectionImage2' />
              <img src={firstSectionImage3} alt='firstSectionImage3' />
              <img src={firstSectionImage4} alt='firstSectionImage4' />
            </div>
          </div>
        </div>

        <div className='programPostGraduate-transformation-comp'>
          <h2>What would you gain at the end of Program?</h2>
          <div className='program-page-gain-comp-main'>
            <div className='program-page-gain-comp-main-heading'>
              <h3>Intense 15-day Induction Program</h3>
              <div className='program-page-gain-comp-main-heading-points'>
                <p>Outdoor adventure sport leadership</p>
                <p>Industrial visits</p>
                <p>Digital Marketing Training</p>
                <p>Advanced Microsoft Office Training</p>
              </div>
            </div>
            <div className='program-page-gain-comp-main-heading'>
              <h3>International summer internship</h3>
              <div className='program-page-gain-comp-main-heading-points'>
                <p>Startup Business Models</p>
                <p>Understanding the Customer</p>
                <p>Business Analytics</p>
                <p>Applications of AI in Business</p>
              </div>
            </div>
            <div className='program-page-gain-comp-main-heading'>
              <h3>Simulation and Case Studies </h3>
              <div className='program-page-gain-comp-main-heading-points'>
                <p>Startup Business Models</p>
                <p>Understanding the Customer</p>
                <p>Business Analytics</p>
                <p>Applications of AI in Business</p>
              </div>
            </div>
            <div className='program-page-gain-comp-main-heading'>
              <h3>Student Driven Management Activities</h3>
              <div className='program-page-gain-comp-main-heading-points'>
                <p>Startup Business Models</p>
                <p>Understanding the Customer</p>
                <p>Business Analytics</p>
                <p>Applications of AI in Business</p>
              </div>
            </div>
          </div>
        </div>

        <div className='programPostGraduate-SpecialCertificationsandTraining'>
          <div className='programPostGraduate-SpecialCertificationsandTraining-left'>
            <div className='programPostGraduate-SpecialCertificationsandTraining-left-heading'>
              <h2>Special Certifications and Training</h2>
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
            <div className='programPostGraduate-SpecialCertificationsandTraining-left-cards'>
              {renderedProgramDetailsCard}
            </div>
          </div>
          <div className='programPostGraduate-SpecialCertificationsandTraining-right'>
            <p>
              Intense 15-day Induction Program at the very start of the PGPM
              Program Outdoor adventure sport leadership and team building
              program Industrial visits across both academic years International
              summer internship
            </p>
            <p>
              Simulation and Case Studies Social Sensitization Programs Series
              of guest session by Global Industry Leaders Coffee meets with
              Entrepreneurs Student Driven Management Activities Placement
              Grooming activities CSR Activities Gurukool - Mentor - Mentee
              Interaction program Intensive Project on Startups and Family
              Business Sector Awareness Program - Deep Dive Mock GD / PI
              Exposure to Careers in Various Specializations Industry Driven
              Live projects
            </p>
          </div>
        </div>

        <div className='programPostGraduate-programOutcome'>
          <h2>Program Outcomes</h2>
          <div className='programPostGraduate-programOutcome-main'>
            <p>
              Post Graduate Programs are delivered to achieve the following
              outcomes: To develop students as managers, entrepreneurs & ethical
              business leaders. To expose and develop in depth understanding of
              the domain knowledge as required by the industry To facilitate
              students develop critical- thinking, analytical approach &
              problem-solving skills for effective managerial decision-making.
              To sensitize students to socio-cultural & economic aspects
              impacting the current and future requirements of business
              management. To enable students to adapt to changing global
              business environment. To facilitate and ecosystem for students to
              learn effective communication in teams
            </p>
            <img src={outComeImage} alt='outComeImage' />
          </div>
        </div>

        <div className='program-page-eligibility programPostGraduate-belowSections'>
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
          <ProgramButtons />
          <div className=''></div>
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

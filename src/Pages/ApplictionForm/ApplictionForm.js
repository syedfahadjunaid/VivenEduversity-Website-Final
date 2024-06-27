import React from "react";
import "./ApplictionForm.css";

import ApplicationFormMain from "../../Components/applicationFormMain/ApplicationFormMain";

import { Link } from "react-router-dom";

import aboutboximg1 from "../../Assets/About/aboutboximg1.jpg";
import aboutboximg2 from "../../Assets/About/aboutboximg2.jpg";
import aboutboximg4 from "../../Assets/About/aboutboximg4.jpg";
import HorizontalNonLinearStepper from "../../Components/stepper/Stepper";
import FooterCTASection from "../../Components/footerCTASection/footerCTASection";

function ApplictionForm() {
  return (
    <div className="app-page-sections appliction-form-section">
      <div className="app-page-sub-sections sub-appliction-form-section">
        <div className="application-form-text">
          <h3>
            <Link to="/">Home</Link> / University Application Form
          </h3>
        </div>

        <div className="application-form-img-content-box">
          <div className="application-form-img-box">
            <div className="application-form-sub-img-box">
              <img src={aboutboximg2} alt="" />
              <img src={aboutboximg4} alt="" />
            </div>

            <div className="application-form-sub-img-box">
              <img src={aboutboximg1} alt="" />
            </div>
          </div>

          <div className="application-form-content-main-box">
            <div className="application-form-content-box">
              <div className="application-form-sub-content-box-heading">
                <h3>Step</h3>
                <h2>1</h2>
              </div>

              <div className="application-form-sub-content-box-para">
                <h4>SUBMISSION OF APPLICATION FORM</h4>
                <br />
                <p>
                  Candidate must be graduate with a minimum 50% marks Candidate
                  must have appeared for any entrance exam Submit the
                  Application Form with Educational Documents
                </p>
              </div>
            </div>

            <div className="application-form-content-box">
              <div className="application-form-sub-content-box-heading">
                <h3>Step</h3>
                <h2>2</h2>
              </div>

              <div className="application-form-sub-content-box-para">
                <h4>GETTING SHORTLISTED</h4>
                <br />
                <p>
                  The eligible candidates will be shortlisted Shortlisted
                  Candidates will be evaluated via Personal Interview
                </p>
              </div>
            </div>

            <div className="application-form-content-box">
              <div className="application-form-sub-content-box-heading">
                <h3>Step</h3>
                <h2>3</h2>
              </div>

              <div className="application-form-sub-content-box-para">
                <h4>FINAL STEP</h4>
                <br />
                <p>
                  The Selected candidate will receive an Invitation to Apply'
                  Call or Email. Block Your Seat' by paying the registration
                  fee.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="application-form-section">
          <h1>University Application Form</h1>
          {/* <ApplicationFormMain /> */}
          <HorizontalNonLinearStepper />
        </div>
      </div>
      <FooterCTASection />
    </div>
  );
}

export default ApplictionForm;

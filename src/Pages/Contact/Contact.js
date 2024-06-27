import React from "react";
import "./Contact.css";

import { companyDetails } from "../../Components/companyDetails/companyDetails";

import BannerPage from "../../Components/bannerPage/BannerPage";
import ContactBannerImg from "../../Assets/Contact/contactbannerImg.jpeg";

import ContactFormMain from "../../Components/contactFormMain/contactFormMain";

import contactCapImg from "../../Assets/Contact/contactCapImg.png";
import contactMailImg from "../../Assets/Contact/contactMailImg.png";
import contactCallImg from "../../Assets/Contact/contactCallImg.png";
import contacHourImg from "../../Assets/Contact//contacHourImg.png";

import FooterCTASection from "../../Components/footerCTASection/footerCTASection";

function Contact() {
  return (
    <div className="app-page-sections  contact-section">
      <div className="app-page-sub-sections">
        <BannerPage
          img={ContactBannerImg}
          heading="Contact Us"
          para="Have any queries? We are there to help you out."
        />

        <div className="contactUs-detail">
          <div className="contact-detail-form">
            <ContactFormMain />
          </div>

          <div className="contact-detail-form-icon-data">
            <div className="contact-detail-form-main-box">
              <div className="contact-detail-form-box">
                <img src={contactCapImg} alt="" />
                <h2>Our University</h2>
                <span>
                  <a
                    href="https://www.google.com/maps?q=5th+floor,Technopolis+Knowledge+Park,Hanuman+Nagar,Andheri+East+Mumbai,Maharashtra+400093"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5th floor, Technopolis Knowledge Park, Hanuman Nagar,
                    Andheri East Mumbai, Maharashtra 400093
                  </a>
                </span>
              </div>
              <div className="contact-detail-form-box">
                <img src={contactMailImg} alt="" />
                <h2>Technical</h2>
                <span>
                  <a href="mailto:info@VivenEduversity.com">
                    info@VivenEduversity.com
                  </a>{" "}
                  <br />
                  <br />
                  <a href="mailto:admissions@VivenEduversity.com">
                    admissions@VivenEduversity.com
                  </a>
                </span>
              </div>
            </div>

            <div className="contact-detail-form-main-box">
              <div className="contact-detail-form-box">
                <img src={contactCallImg} alt="" />
                <h2>For Call</h2>
                <span>
                  <a href="tel:+91-9920999904">+91-9920 9999 04</a>
                </span>
              </div>
              <div className="contact-detail-form-box">
                <img src={contacHourImg} alt="" />
                <h2>Open Hour</h2>
                <p>EveryDay 10AM-5PM</p>
              </div>
            </div>
            <h3 className="contact-social-icon">
              Social Media :{" "}
              <a
                href={companyDetails.SocialMediaLinks.companyFb}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="21"
                  viewBox="0 0 12 21"
                  fill="none"
                >
                  <path
                    d="M3.72191 20.4648V11.3107H0.626587V7.74316H3.72191V5.11221C3.72191 2.05901 5.59565 0.396484 8.33239 0.396484C9.64331 0.396484 10.77 0.49362 11.0983 0.537035V3.72781L9.20026 3.72867C7.71186 3.72867 7.42368 4.43255 7.42368 5.46545V7.74316H10.9733L10.5112 11.3107H7.42367V20.4648H3.72191Z"
                    fill="#52525B"
                  />
                </svg>
              </a>
              <a
                href={companyDetails.SocialMediaLinks.companyInsta}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0389 2.92023C15.0346 2.92023 15.3894 2.9314 16.5728 2.9851C17.2843 2.99377 17.9891 3.1238 18.6564 3.36954C19.1404 3.55529 19.5799 3.83984 19.9467 4.20487C20.3135 4.5699 20.5994 5.00732 20.786 5.48898C21.033 6.15316 21.1636 6.85456 21.1723 7.56269C21.2258 8.74045 21.2375 9.09351 21.2375 12.0749C21.2375 15.0562 21.2263 15.4093 21.1723 16.5871C21.1636 17.2952 21.033 17.9966 20.786 18.6608C20.5994 19.1424 20.3135 19.5798 19.9467 19.9449C19.5799 20.3099 19.1404 20.5944 18.6564 20.7802C17.9891 21.0259 17.2843 21.156 16.5728 21.1646C15.3899 21.2178 15.0351 21.2295 12.0389 21.2295C9.04274 21.2295 8.68798 21.2183 7.5051 21.1646C6.79357 21.156 6.0888 21.0259 5.42144 20.7802C4.93747 20.5944 4.49795 20.3099 4.13117 19.9449C3.76439 19.5798 3.47847 19.1424 3.29183 18.6608C3.04491 17.9966 2.91426 17.2952 2.90555 16.5871C2.85212 15.4093 2.84037 15.0562 2.84037 12.0749C2.84037 9.09351 2.85159 8.74045 2.90555 7.56269C2.91426 6.85456 3.04491 6.15316 3.29183 5.48898C3.47847 5.00732 3.76439 4.5699 4.13117 4.20487C4.49795 3.83984 4.93747 3.55529 5.42144 3.36954C6.0888 3.1238 6.79357 2.99377 7.5051 2.9851C8.68851 2.93193 9.04327 2.92023 12.0389 2.92023ZM12.0389 0.908203C8.99358 0.908203 8.60998 0.920964 7.41321 0.9752C6.48199 0.993634 5.56067 1.16911 4.68842 1.49416C3.94016 1.77473 3.26244 2.21441 2.70252 2.78252C2.13117 3.33996 1.68901 4.01483 1.40691 4.75999C1.0803 5.62807 0.903986 6.545 0.885464 7.47176C0.832036 8.66176 0.819214 9.04353 0.819214 12.0743C0.819214 15.1051 0.832036 15.4869 0.886532 16.678C0.905054 17.6047 1.08137 18.5217 1.40798 19.3898C1.68976 20.1348 2.13156 20.8097 2.70252 21.3672C3.26275 21.9355 3.94085 22.3751 4.68948 22.6556C5.56174 22.9806 6.48306 23.1561 7.41427 23.1745C8.61104 23.2277 8.99305 23.2415 12.04 23.2415C15.087 23.2415 15.469 23.2288 16.6657 23.1745C17.5969 23.1561 18.5183 22.9806 19.3905 22.6556C20.1356 22.3682 20.8122 21.9291 21.3771 21.3666C21.9419 20.8041 22.3826 20.1304 22.671 19.3887C22.9976 18.5206 23.1739 17.6037 23.1924 16.6769C23.2458 15.4869 23.2587 15.1051 23.2587 12.0743C23.2587 9.04353 23.2458 8.66176 23.1913 7.4707C23.1728 6.54394 22.9965 5.62701 22.6699 4.75892C22.3881 4.01387 21.9463 3.339 21.3753 2.78146C20.8151 2.21322 20.137 1.77353 19.3884 1.4931C18.5161 1.16804 17.5948 0.99257 16.6636 0.974137C15.4679 0.920964 15.0843 0.908203 12.0389 0.908203Z"
                    fill="#52525B"
                  />
                  <path
                    d="M12.037 6.34082C10.8975 6.34082 9.78351 6.67712 8.83602 7.30719C7.88853 7.93726 7.15005 8.8328 6.71397 9.88056C6.27789 10.9283 6.16379 12.0813 6.3861 13.1936C6.60841 14.3059 7.15715 15.3276 7.96293 16.1295C8.7687 16.9314 9.79532 17.4775 10.913 17.6988C12.0306 17.92 13.1891 17.8065 14.2419 17.3725C15.2946 16.9385 16.1945 16.2035 16.8276 15.2606C17.4607 14.3176 17.7986 13.209 17.7986 12.0749C17.7986 10.5541 17.1916 9.09564 16.111 8.02029C15.0305 6.94495 13.5651 6.34082 12.037 6.34082ZM12.037 15.7969C11.2973 15.7969 10.5742 15.5786 9.95921 15.1697C9.34418 14.7607 8.86483 14.1794 8.58176 13.4993C8.2987 12.8191 8.22464 12.0708 8.36894 11.3488C8.51325 10.6268 8.86944 9.96355 9.39247 9.44301C9.91551 8.92248 10.5819 8.56799 11.3074 8.42437C12.0328 8.28075 12.7848 8.35446 13.4682 8.63618C14.1516 8.91789 14.7357 9.39495 15.1466 10.007C15.5576 10.6191 15.7769 11.3387 15.7769 12.0749C15.7769 13.062 15.3829 14.0088 14.6815 14.7068C13.9801 15.4048 13.0289 15.7969 12.037 15.7969Z"
                    fill="#52525B"
                  />
                  <path
                    d="M18.0279 7.4538C18.7715 7.4538 19.3743 6.85389 19.3743 6.11386C19.3743 5.37384 18.7715 4.77393 18.0279 4.77393C17.2843 4.77393 16.6815 5.37384 16.6815 6.11386C16.6815 6.85389 17.2843 7.4538 18.0279 7.4538Z"
                    fill="#52525B"
                  />
                </svg>
              </a>
            </h3>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.798498463349!2d72.86064247520635!3d19.116493782096477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83a9e07c995%3A0x9fb6744828e4bf1a!2sTechnopolis%20Knowledge%20Park%2C%20Hanuman%20Nagar%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400093!5e0!3m2!1sen!2sin!4v1703935573958!5m2!1sen!2sin"
            width="100%"
            height="100%"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <FooterCTASection />
    </div>
  );
}

export default Contact;

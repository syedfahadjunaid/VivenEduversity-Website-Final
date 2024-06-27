import React from "react";

import "./contactCard.css";

import ContactFormMain from "../contactFormMain/contactFormMain";

function ContactCard() {
  return (
    <div className="app-container-flex-center contact-card">
      <div className="app-container-flex-center contact-card-left">
        <h2>Get in Touch</h2>
        <span>
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </span>
        <div className="app-container-flex-center contact-card-contact-form-section">
          <ContactFormMain />
        </div>
      </div>
      <div className="app-container-flex-center contact-card-right">
        <div className="app-container-flex-center contact-card-right-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.216632795886!2d72.8635481!3d19.1162456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c919d053d7a3%3A0x844d5dceb5f52cf9!2sQuest%20Coworks!5e0!3m2!1sen!2sin!4v1703076615791!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 10 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="app-container-flex-center contact-card-left-details">
          <div className="app-container-flex-center contact-card-details-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                fill="#3D3D3D"
              />
            </svg>
            <div className="app-container-flex-center contact-card-details-head">
              <h4>Location</h4>
              <span>
                5th floor, Technopolis Knowledge Park, Hanuman Nagar, Andheri
                East Mumbai, Maharashtra 400093
                <br />
                <a
                  href="https://www.google.com/maps?q=5th+floor,Technopolis+Knowledge+Park,Hanuman+Nagar,Andheri+East+Mumbai,Maharashtra+400093"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Map
                </a>
              </span>
            </div>
          </div>
          <div className="app-container-flex-center contact-card-details-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <path
                d="M16.2047 0.424316V2.35275C18.1121 2.35275 19.899 2.83486 21.5655 3.79908C23.1516 4.74321 24.4165 6.00875 25.3602 7.59569C26.3239 9.26299 26.8058 11.0508 26.8058 12.9592H28.7332C28.7332 10.6892 28.161 8.58 27.0166 6.63147C25.9123 4.74321 24.4165 3.24666 22.5292 2.14183C20.5817 0.996821 18.4735 0.424316 16.2047 0.424316ZM6.23617 3.31697C5.69408 3.31697 5.22225 3.48772 4.8207 3.82921L1.71869 6.99305L1.80904 6.93279C1.3071 7.35464 0.975821 7.87692 0.815199 8.49965C0.674655 9.12237 0.714811 9.72501 0.935665 10.3076C1.49784 11.8744 2.25075 13.4814 3.1944 15.1286C4.51953 17.3986 6.09563 19.4375 7.9227 21.2454C10.854 24.1983 14.4981 26.5285 18.855 28.236H18.8851C19.4674 28.4369 20.0496 28.477 20.6319 28.3565C21.2342 28.236 21.7663 27.9748 22.228 27.5731L25.2698 24.5298C25.6714 24.128 25.8721 23.6359 25.8721 23.0533C25.8721 22.4507 25.6714 21.9485 25.2698 21.5467L21.3246 17.5693C20.923 17.1676 20.4211 16.9667 19.8187 16.9667C19.2164 16.9667 18.7145 17.1676 18.3129 17.5693L16.4156 19.4978C14.8897 18.7746 13.5645 17.8807 12.4402 16.816C11.3158 15.7313 10.4224 14.4155 9.75981 12.8688L11.6873 10.9403C12.1089 10.4984 12.3197 9.97611 12.3197 9.37347C12.3197 8.75074 12.0788 8.24855 11.5969 7.86688L11.6873 7.95727L7.65165 3.82921C7.2501 3.48772 6.77827 3.31697 6.23617 3.31697ZM16.2047 4.28119V6.20963C17.4295 6.20963 18.5538 6.51095 19.5778 7.11358C20.6218 7.71622 21.445 8.53982 22.0473 9.58439C22.6497 10.6089 22.9508 11.7338 22.9508 12.9592H24.8783C24.8783 11.3923 24.4868 9.93593 23.7038 8.59004C22.9207 7.28433 21.8767 6.23976 20.5716 5.45633C19.2264 4.6729 17.7708 4.28119 16.2047 4.28119ZM6.23617 5.24541C6.29641 5.24541 6.36668 5.27554 6.44699 5.3358L10.3923 9.37347C10.4123 9.45382 10.3923 9.52413 10.332 9.58439L7.47095 12.4168L7.68177 13.0194L8.07328 13.8631C8.39452 14.5461 8.76596 15.209 9.18759 15.8518C9.76985 16.7558 10.4123 17.5292 11.115 18.172C12.0587 19.096 13.1931 19.9397 14.5182 20.703C15.1808 21.0847 15.743 21.3659 16.2047 21.5467L16.8071 21.8179L19.7284 18.8951C19.7685 18.8549 19.7986 18.8349 19.8187 18.8349C19.8388 18.8349 19.8689 18.8549 19.9091 18.8951L23.9748 22.9629C24.015 23.0031 24.035 23.0332 24.035 23.0533C24.035 23.0533 24.015 23.0734 23.9748 23.1136L20.9632 26.0966C20.5214 26.4783 20.0396 26.5787 19.5176 26.398C15.4217 24.811 12.0085 22.6415 9.27794 19.8895C7.59142 18.2021 6.11571 16.2837 4.85081 14.1343C3.94732 12.5875 3.2446 11.091 2.74266 9.64466V9.61452C2.66235 9.43373 2.65231 9.22281 2.71254 8.98176C2.77277 8.72061 2.8832 8.51973 3.04382 8.37912L6.02536 5.3358C6.08559 5.27554 6.15586 5.24541 6.23617 5.24541ZM16.2047 8.13806V10.0665C17.0078 10.0665 17.6905 10.3477 18.2527 10.9102C18.8148 11.4727 19.0959 12.1556 19.0959 12.9592H21.0234C21.0234 12.0954 20.8025 11.2919 20.3608 10.5486C19.9392 9.80536 19.3569 9.22281 18.6141 8.80096C17.8712 8.35903 17.0681 8.13806 16.2047 8.13806Z"
                fill="black"
              />
            </svg>
            <div className="app-container-flex-center contact-card-details-head">
              <h4>Phone</h4>
              <span>
                <a href="tel:+91-9920999904">+91-9920 9999 04</a>
              </span>
            </div>
          </div>
          <div className="app-container-flex-center contact-card-details-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7.95455 2.625V4.59624L1.75 8.63565V25.375H26.5682V8.63565L20.3636 4.59624V2.625H7.95455ZM10.0227 4.69318H18.2955V12.6428L14.1591 15.3249L10.0227 12.6428V4.69318ZM11.0568 6.76136V8.82955H17.2614V6.76136H11.0568ZM7.95455 7.0522V11.2855L4.6907 9.18501L7.95455 7.0522ZM20.3636 7.0522L23.6275 9.18501L20.3636 11.2855V7.0522ZM11.0568 9.86364V11.9318H17.2614V9.86364H11.0568ZM3.81818 11.0916L14.1591 17.7809L24.5 11.0916V23.3068H3.81818V11.0916Z"
                fill="black"
              />
            </svg>
            <div className="app-container-flex-center contact-card-details-head">
              <h4>E-MAIL</h4>
              <span>
                <a href="mailto:info@VivenEduversity.com">
                  info@VivenEduversity.com
                </a>{" "}
                <br />
                <a href="mailto:admissions@VivenEduversity.com">
                  admissions@VivenEduversity.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

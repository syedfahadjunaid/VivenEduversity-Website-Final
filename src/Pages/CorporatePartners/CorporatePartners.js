import React from "react";
import "./CorporatePartners.css";
import heroImage from "../../Assets/corporatePartners/Frame(6).png";

import ProgramButtons from "../../Components/ProgramButtons/ProgramButtons";

import facultyImage1 from "../../Assets/corporatePartners/Rectangle 53(2).jpg";
import facultyImage2 from "../../Assets/corporatePartners/Rectangle 54(1).jpg";
import facultyImage3 from "../../Assets/corporatePartners/Rectangle 55(1).jpg";
import facultyImage4 from "../../Assets/corporatePartners/Rectangle 56(1).jpg";

import magImage1 from "../../Assets/corporatePartners/Rectangle 74(1).jpg";
import magImage2 from "../../Assets/corporatePartners/Rectangle 75(1).jpg";
import magImage3 from "../../Assets/corporatePartners/Vector(4).png";

import ContactCard from "../../Components/contactCard/contactCard";

import FooterCTASection from "../../Components/footerCTASection/footerCTASection";

export default function CorporatePartners() {
  return (
    <div className='corporatePartners-page'>
      <div className='corporatePartners-page-hero'>
        <div className='corporatePartners-page-hero-left'>
          <p className='corporatePartners-page-hero-left-head'>
            Corporate Partners
          </p>
          <p>
            We at Viven Eduversity consistently focus on achieving academic
            excellence and constantly striving to bridge the academia - industry
            gap with High Calibre faculty with rich research, industry,
            consulting and academic experience.
          </p>
          <p>
            Innovation, Excellence, Integrity are precisely the qualities the
            Institute looks for in the students it selects for the PGPM Program
          </p>
          <ProgramButtons />
        </div>
        <div className='corporatePartners-page-hero-right'>
          <img src={heroImage} alt='heroImage' />
        </div>
      </div>

      <div className='corporatePartners-page-faculty'>
        <div className='corporatePartners-page-faculty-left'>
          <h3>VIVEN EDUVERSITY Outstanding Faculty</h3>
          <p>
            Another advantage of Viven Eduversity is that its faculties are rich
            in both industrial and academic experiences. This enables them to
            enrich their lectures with real-world industry scenarios. Thus
            students gain the distinctive aptitude to tackle practical problems.
            VIVEN EDUVERSITY believes that it is the combination of its students
            and its faculty, the academic rigor and all-round development,
            comprehensive curriculum and the course delivery method, that makes
            it the institute of choice for International and Domestic
            recruiters.
          </p>
        </div>
        <div className='corporatePartners-page-faculty-right'>
          <img src={facultyImage1} alt='facultyImage1' />
          <img src={facultyImage2} alt='facultyImage1' />
          <img src={facultyImage3} alt='facultyImage1' />
          <img src={facultyImage4} alt='facultyImage1' />
        </div>
      </div>

      <div className='corporatePartners-page-magnificent'>
        <div className='corporatePartners-page-magnificent-left'>
          <div className='corporatePartners-page-magnificent-left-imageup'>
            <img src={magImage1} alt='magImage' />
          </div>
          <div className='corporatePartners-page-magnificent-left-imagedown'>
            <img src={magImage2} alt='magImage' />
          </div>
        </div>
        <div className='corporatePartners-page-magnificent-right'>
          <h3>Magnificent and World-Class Infrastructure</h3>
          <p>
            At VIVEN EDUVERSITY, students are provided with modern facilities
            including WiFi enabled campus, which are conducive to actively
            pursue their academic and professional interest.
          </p>
          <img src={magImage3} alt='magImage' />
        </div>
      </div>

      <div className='corporatePartners-page-placement'>
        <h2>Final Placements</h2>
        <p>
          VIVEN EDUVERSITY has the vision to be a centre for excellence in
          management education, a multi-disciplinary business school that
          produces the global business leaders of tomorrow. The excellent
          industry interaction and the state-of-art training VIVEN EDUVERSITY
          imparts reflect the large treads VIVEN EDUVERSITY has taken in the
          journey to achieving this vision.
        </p>
      </div>
      <div className='' style={{ width: "90%" }}>
        <ContactCard />
      </div>
      <FooterCTASection />
    </div>
  );
}

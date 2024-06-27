import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import internalLinks from "./internalLinks";

import NavBar from "./Components/NavBar/navbar";
import Home from "./Pages/Home/home";
import FooterMain from "./Components/footerMain/footerMain";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ApplicationForm from "./Pages/ApplictionForm/ApplictionForm";
import PrivacyPage from "./Pages/PrivacyPage/PrivacyPage";
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy";
import WorkWithUs from "./Pages/WorkWithUs/WorkWithUs";
import GeneralTermsAndCondition from "./Pages/GeneralTermsAndcondition/GeneralTermsAndcondition";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import ProgramPage from "./Pages/ProgramPage/ProgramPage";
import ProgramPostGraduate from "./Pages/ProgramPostGraduate/ProgramPostGraduate";
import ProgramPGDMDigitalMarketing from "./Pages/ProgramPGDMDigitalMarketing/ProgramPGDMDigitalMarketing";
import CorporatePartners from "./Pages/CorporatePartners/CorporatePartners";
import Admin from "./Pages/Admin/Admin";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";

function App() {
  const location = window.location.pathname;
  return (
    <Router>
      <div className='App'>
        {location !== "/admin" && location !== "/adminlogin" && <NavBar />}
        <Routes>
          <Route path={internalLinks.home} element={<Home />} />
          <Route path={internalLinks.aboutUs} element={<About />} />
          <Route path={internalLinks.contactUs} element={<Contact />} />
          <Route
            path={internalLinks.applicationForm}
            element={<ApplicationForm />}
          />
          <Route path={internalLinks.privacyPolicy} element={<PrivacyPage />} />
          <Route path={internalLinks.refundPolicy} element={<RefundPolicy />} />
          <Route
            path={internalLinks.generalTermsAndCondtion}
            element={<GeneralTermsAndCondition />}
          />
          <Route path={internalLinks.disclaimer} element={<Disclaimer />} />
          <Route path={internalLinks.workWithUs} element={<WorkWithUs />} />
          <Route
            path={internalLinks.programs.program1}
            element={<ProgramPage />}
          />
          <Route
            path={internalLinks.programs.program2}
            element={<ProgramPostGraduate />}
          />
          <Route
            path={internalLinks.programs.program3}
            element={<ProgramPGDMDigitalMarketing />}
          />
          <Route
            path={internalLinks.corporatePartners}
            element={<CorporatePartners />}
          />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
        </Routes>
        {location !== "/admin" && location !== "/adminlogin" && <FooterMain />}
      </div>
    </Router>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./AdminApplicationPage.css";

import { FaSearch } from "react-icons/fa";

import { getFirestore } from "firebase/firestore";
import app from "../../../firebase";

import { getDocs, collection } from "firebase/firestore";

import { Visibility } from "@mui/icons-material";

import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function AdminApplicationPage({ pageName }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    border: "none",
    outline: "none",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const db = getFirestore(app);

  const [contacts, setContacts] = useState([]);

  const [data, setData] = useState([]);

  const getDocSnap = async () => {
    const doc_refs = await getDocs(collection(db, "applicationformdata"));

    const res = [];

    doc_refs.forEach((applicationformdata) => {
      res.push({
        id: applicationformdata.id,
        ...applicationformdata.data(),
      });
    });

    setContacts([...res]);
  };
  //   console.log(contacts);

  const [search, setSearch] = useState("");

  const filteredData = contacts?.filter((data) => {
    if (search !== "") {
      const searchItems = data.Email.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedRows = filteredData?.map((data, index) => {
    return (
      <tr key={index} onClick={() => setData(data)}>
        <td style={{ width: "80px" }}>{index + 1}</td>
        {/* <td>{data.id}</td> */}
        <td>{data.Email}</td>
        <td>{data.DOB}</td>
        <td>{`${data.FirstName} ${data.MiddleName} ${data.LastName}`}</td>
        <td>{data.Phone}</td>
        {/* <td>{data.program}</td> */}

        <td>
          <Visibility style={{ cursor: "pointer" }} onClick={handleOpen} />
        </td>
      </tr>
    );
  });
  useEffect(() => {
    getDocSnap();
  }, []);

  const ModalData = (
    <div className='modalData'>
      <div className='modalData-content'>
        <h4>ID</h4>
        <h4>{data.id}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Aadhar Number</h4>
        <h4>{data.AadharNumber}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Address</h4>
        <h4>{data.Address}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Blood Group</h4>
        <h4>{data.BloodGroup}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Cast</h4>
        <h4>{data.Cast}</h4>
      </div>
      <div className='modalData-content'>
        <h4>City</h4>
        <h4>{data.City}</h4>
      </div>
      <div className='modalData-content'>
        <h4>College Name</h4>
        <h4>{data.CollegeName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>College Stream</h4>
        <h4>{data.CollegeStream}</h4>
      </div>
      <div className='modalData-content'>
        <h4>College Percentage</h4>
        <h4>{data.College_Percentage}</h4>
      </div>
      <div className='modalData-content'>
        <h4>College YearOfPassing</h4>
        <h4>{data.College_YearOfPassing}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Competitive Exam Name</h4>
        <h4>{data.CompetitiveExamName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Competitive Exam Name Education Qualification</h4>
        <h4>{data.CompetitiveExamNameEducationQualification}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Competitive Exam Percentile</h4>
        <h4>{data.CompetitiveExamPercentile}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Competitive Exam Rank</h4>
        <h4>{data.CompetitiveExamRank}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Competitive Exam Score</h4>
        <h4>{data.CompetitiveExamScore}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Competitive Exam fund for MBA</h4>
        <h4>{data.CompetitiveExamfundforMBA}</h4>
      </div>
      <div className='modalData-content'>
        <h4>DOB</h4>
        <h4>{data.DOB}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Education Qualification</h4>
        <h4>{data.EducationQualification}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Email</h4>
        <h4>{data.Email}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Father Annual Income</h4>
        <h4>{data.FatherAnnualIncome}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Father Designation</h4>
        <h4>{data.FatherDesignation}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Father Email</h4>
        <h4>{data.FatherEmail}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Father Name</h4>
        <h4>{data.FatherName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Father Number</h4>
        <h4>{data.FatherNumber}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Father Occupation</h4>
        <h4>{data.FatherOccupation}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Father Qualification</h4>
        <h4>{data.FatherQualification}</h4>
      </div>
      <div className='modalData-content'>
        <h4>First Name</h4>
        <h4>{data.FirstName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Middle Name</h4>
        <h4>{data.MiddleName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>LastName</h4>
        <h4>{data.LastName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Gender</h4>
        <h4>{data.Gender}</h4>
      </div>
      <div className='modalData-content'>
        <h4>HighSchool CollegName</h4>
        <h4>{data.HighSchool_CollegName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>HighSchool Details</h4>
        <h4>{data.HighSchool_Details}</h4>
      </div>
      <div className='modalData-content'>
        <h4>HighSchool Percentage</h4>
        <h4>{data.HighSchool_Percentage}</h4>
      </div>
      <div className='modalData-content'>
        <h4>HighSchool Stream</h4>
        <h4>{data.HighSchool_Stream}</h4>
      </div>
      <div className='modalData-content'>
        <h4>HighSchool Year Of Passing</h4>
        <h4>{data.HighSchool_YearOfPassing}</h4>
      </div>
      <div className='modalData-content'>
        <h4>How Did You Learn About Confirm College</h4>
        <h4>{data.HowDidYouLearnAboutConfirmCollege}</h4>
      </div>
      <div className='modalData-content'>
        <h4>MotherAnnualIncome</h4>
        <h4>{data.MotherAnnualIncome}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Mother Designation</h4>
        <h4>{data.MotherDesignation}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Mother Email</h4>
        <h4>{data.MotherEmail}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Mother Mobile</h4>
        <h4>{data.MotherMobile}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Mother Name</h4>
        <h4>{data.MotherName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Mother Occupation</h4>
        <h4>{data.MotherOccupation}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Mother Qualification</h4>
        <h4>{data.MotherQualification}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Phone</h4>
        <h4>{data.Phone}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Pincode</h4>
        <h4>{data.Pincode}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Religion</h4>
        <h4>{data.Religion}</h4>
      </div>
      <div className='modalData-content'>
        <h4>SSC College Name</h4>
        <h4>{data.SSC_CollegName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>SSC Details</h4>
        <h4>{data.SSC_Details}</h4>
      </div>
      <div className='modalData-content'>
        <h4>SSC Percentage</h4>
        <h4>{data.SSC_Percentage}</h4>
      </div>
      <div className='modalData-content'>
        <h4>SSC Stream</h4>
        <h4>{data.SSC_Stream}</h4>
      </div>
      <div className='modalData-content'>
        <h4>SSC Year Of Passing</h4>
        <h4>{data.SSC_YearOfPassing}</h4>
      </div>
      <div className='modalData-content'>
        <h4>State</h4>
        <h4>{data.State}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Undertaking</h4>
        <h4>{data.Undertaking ? "Yes" : "No"}</h4>
      </div>
      <div className='modalData-content'>
        <h4>University Name</h4>
        <h4>{data.UniversityName}</h4>
      </div>
      <div className='modalData-content'>
        <h4>WhatsApp Number</h4>
        <h4>{data.WhatsAppNumber}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Work Experience</h4>
        <h4>{data.WorkExperience ? "Yes" : "No"}</h4>
      </div>
      <div className='modalData-content'>
        <h4>SSC Year Of Passing</h4>
        <h4>{data.SSC_YearOfPassing}</h4>
      </div>
      <div className='modalData-content'>
        <h4>Aadhar Document</h4>
        <h4>
          <a
            style={{ textDecoration: "underline" }}
            href={data.AadharDocument}
            target='_blank'
            rel='noreferrer'>
            link
          </a>
        </h4>
      </div>
      <div className='modalData-content'>
        <h4>Gradution Document</h4>
        <h4>
          <a
            style={{ textDecoration: "underline" }}
            href={data.GradutionDocument}
            target='_blank'
            rel='noreferrer'>
            link
          </a>
        </h4>
      </div>
      <div className='modalData-content'>
        <h4>HighSchool Document</h4>
        <h4>
          <a
            style={{ textDecoration: "underline" }}
            href={data.HighSchoolDocument}
            target='_blank'
            rel='noreferrer'>
            link
          </a>
        </h4>
      </div>
      <div className='modalData-content'>
        <h4>PAN Document</h4>
        <h4>
          <a
            style={{ textDecoration: "underline" }}
            href={data.PAN_Document}
            target='_blank'
            rel='noreferrer'>
            link
          </a>
        </h4>
      </div>
      <div className='modalData-content'>
        <h4>SSC Document</h4>
        <h4>
          <a
            style={{ textDecoration: "underline" }}
            href={data.SSC_Document}
            target='_blank'
            rel='noreferrer'>
            link
          </a>
        </h4>
      </div>
      <div className='modalData-content'>
        <h4>Signature Document</h4>
        <h4>
          <a
            style={{ textDecoration: "underline" }}
            href={data.SignatureDocument}
            target='_blank'
            rel='noreferrer'>
            link
          </a>
        </h4>
      </div>
      <div className='modalData-content'>
        <h4>Entrance Document</h4>
        <h4>
          <a
            style={{ textDecoration: "underline" }}
            href={data.EntranceDocument}
            target='_blank'
            rel='noreferrer'>
            link
          </a>
        </h4>
      </div>
    </div>
  );

  return (
    <>
      <div className='Admin-section-page'>
        <div className='Admin-section-page-header'>
          <h3>{pageName}</h3>
          <div className='Admin-section-page-header-search'>
            <input
              className='Admin-section-page-header-input'
              placeholder='Search with email...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch />
          </div>
        </div>

        <div className='Admin-section-page-table'>
          <table>
            <thead>
              <tr>
                <th style={{ width: "80px" }}>S/N</th>
                {/* <th>Order Code</th> */}
                <th>Email</th>
                <th>City</th>
                <th>Full Name</th>
                {/* <th>Payment Status</th> */}
                <th>Phone</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                    <td>#G-Store:22</td>
                    <td style={{ width: "250px" }}>Nemesis</td>
                    <td>NEMESIS@gmail.com</td>
                    <td>9454545454</td>
                    <td>Processing</td>
                    <td>Room</td>
                    <td>
                      <Visibility onClick={handleOpen} />
                    </td>
                  </tr> */}
              {renderedRows.reverse()}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Application Form Data
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {ModalData}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

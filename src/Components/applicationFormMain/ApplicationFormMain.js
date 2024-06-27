import React, { useEffect, useRef, useState } from "react";
import "./ApplicationFormMain.css";

import Stepper from "../../Components/stepper/Stepper";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Modal,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { FaCheckDouble } from "react-icons/fa";

// import { Stepper } from '@mui/material'

import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../../firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

function ApplicationFormMain({ step, setActiveStep }) {
  const [showAllForms, setShowAllForms] = useState(true);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid translate",
    outline: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const myRef = useRef();
  const scrollHandle = () => {
    myRef.current.scrollInView();
    console.log("scroll");
  };
  const [workExperison, setWorkExperison] = useState(false);
  const [signatureImage, setSignatureImage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();
  const {
    register: register3,
    formState: { errors: errors3 },
    handleSubmit: handleSubmit3,
  } = useForm();

  const [formData1, setFormData1] = useState();
  const [formData2, setFormData2] = useState();
  const [formData3, setFormData3] = useState();

  const [aadhardoc, setAadhardoc] = useState();
  const [enterancedoc, setEnterancedoc] = useState();
  const [gradutiondoc, setGradutiondoc] = useState();
  const [hscdoc, setHscdoc] = useState();
  const [pandoc, setPandoc] = useState();
  const [signaturedoc, setSignaturedoc] = useState();
  const [sscdoc, setSscdoc] = useState();

  console.log(formData1, "1");
  console.log(formData2, "2");
  console.log(formData3, "3");

  const onSubmit = (data) => {
    console.log(data, "data");
    setFormData1(data);
    // myRef.current.scrollInView();
    window.scroll(0, 400);

    setActiveStep(1);
  };
  const onSubmit1 = (data) => {
    console.log(data, "data1");
    setFormData2(data);
    setActiveStep(2);
    window.scroll(0, 400);
  };

  const db = getFirestore(app);

  const storage = getStorage(app);

  const [url1, seturl1] = useState();
  const [url2, seturl2] = useState();
  const [url3, seturl3] = useState();
  const [url4, seturl4] = useState();
  const [url5, seturl5] = useState();
  const [url6, seturl6] = useState();
  const [url7, seturl7] = useState();

  const [urls, setUrls] = useState([]);
  const [allData, setAllData] = useState();

  useEffect(() => {
    if (url1 && url2 && url3 && url4 && url5 && url6 && url7) {
      const date = new Date().toLocaleString();
      const submitData = {
        FirstName: formData1.fname,
        MiddleName: formData1.mname,
        LastName: formData1.lname,
        Gender: formData1.gender,
        DOB: formData1.dob,
        Phone: formData1.phone,
        WhatsAppNumber: formData1.whatsappNumber,
        Email: formData1.email,
        AadharNumber: formData1.aadharNumber,
        BloodGroup: formData1.bloodGroup,
        Cast: formData1.cast,
        Religion: formData1.religion,

        UniversityName: formData2.universityName,
        SSC_YearOfPassing: formData2.sscyop,
        SSC_Stream: formData2.sscstream,
        SSC_Percentage: formData2.sscpg,
        SSC_Details: formData2.sscd,
        SSC_CollegName: formData2.ssccn,
        HighSchool_YearOfPassing: formData2.hscyop,
        HighSchool_Stream: formData2.hscstream,
        HighSchool_Percentage: formData2.hscpg,
        HighSchool_CollegName: formData2.hsccn,
        HighSchool_Details: formData2.hsc,
        EducationQualification: formData2.educationQualification,
        College_YearOfPassing: formData2.cyop,
        College_Percentage: formData2.cpg,
        CompetitiveExamfundforMBA: formData2.competitiveExamfundforMBA,
        CompetitiveExamScore: formData2.competitiveExamScore,
        CompetitiveExamRank: formData2.competitiveExamRank,
        CompetitiveExamPercentile: formData2.competitiveExamPercentile,
        CompetitiveExamNameEducationQualification:
          formData2.competitiveExamNameEducationQualification,
        CompetitiveExamName: formData2.competitiveExamName,
        CollegeName: formData2.collegeName,
        CollegeStream: formData2.Stream,
        HowDidYouLearnAboutConfirmCollege: formData2.ConfirmCollege,
        WorkExperience: workExperison,

        Address: formData3.Address,
        City: formData3.City,
        Pincode: formData3.Pincode,
        State: formData3.State,
        Undertaking: formData3.Undertaking,
        AadharDocument: url1,
        EntranceDocument: url2,
        GradutionDocument: url3,
        HighSchoolDocument: url4,
        PAN_Document: url5,
        SignatureDocument: url6,
        SSC_Document: url7,
        FatherAnnualIncome: formData3.fatherAnnualIncome,
        FatherDesignation: formData3.fatherDesignation,
        FatherOccupation: formData3.fatherOccupation,
        FatherEmail: formData3.fatheremail,
        FatherName: formData3.fathername,
        FatherNumber: formData3.fathernum,
        FatherQualification: formData3.fatherqualification,
        MotherAnnualIncome: formData3.motherAnnualIncome,
        MotherDesignation: formData3.motherDesignation,
        MotherName: formData3.motherName,
        MotherOccupation: formData3.motherOccupation,
        MotherEmail: formData3.motheremail,
        MotherMobile: formData3.mothermobile,
        MotherQualification: formData3.motherqualification,

        date: date,
      };
      const docRef = addDoc(collection(db, "applicationformdata"), submitData);
      console.log("Document written with ID: ", docRef.id);
      setTimeout(() => {
        setShowAllForms(false);
        // window.scroll(0, 0);
      }, [2000]);
    }
  }, [url1, url2, url3, url4, url5, url6, url7]);

  const onSubmit2 = async (data) => {
    console.log(data, "data2");

    setFormData3(data);

    const urlArray = [];

    const storageRef1 = ref(
      storage,
      `/files/Aadhar/${formData1.email}/${aadhardoc.name}`
    );
    const storageRef2 = ref(
      storage,
      `/files/EntranceExam/${formData1.email}/${enterancedoc.name}`
    );
    const storageRef3 = ref(
      storage,
      `/files/Graduation/${formData1.email}/${gradutiondoc.name}`
    );
    const storageRef4 = ref(
      storage,
      `/files/HighSchool/${formData1.email}/${hscdoc.name}`
    );
    const storageRef5 = ref(
      storage,
      `/files/PAN/${formData1.email}/${pandoc.name}`
    );
    const storageRef6 = ref(
      storage,
      `/files/Signature/${formData1.email}/${signaturedoc.name}`
    );
    const storageRef7 = ref(
      storage,
      `/files/SeniorSecondarySchool/${formData1.email}/${sscdoc.name}`
    );

    const uploadTask1 = uploadBytesResumable(storageRef1, aadhardoc);
    const uploadTask2 = uploadBytesResumable(storageRef2, enterancedoc);
    const uploadTask3 = uploadBytesResumable(storageRef3, gradutiondoc);
    const uploadTask4 = uploadBytesResumable(storageRef4, hscdoc);
    const uploadTask5 = uploadBytesResumable(storageRef5, pandoc);
    const uploadTask6 = uploadBytesResumable(storageRef6, signaturedoc);
    const uploadTask7 = uploadBytesResumable(storageRef7, sscdoc);

    uploadTask1.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask1.snapshot.ref).then((url) => {
          seturl1(url);
        });
      }
    );

    uploadTask2.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask2.snapshot.ref).then((url) => {
          seturl2(url);
        });
      }
    );
    uploadTask3.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask3.snapshot.ref).then((url) => {
          seturl3(url);
        });
      }
    );
    uploadTask4.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask4.snapshot.ref).then((url) => {
          seturl4(url);
        });
      }
    );
    uploadTask5.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask5.snapshot.ref).then((url) => {
          seturl5(url);
        });
      }
    );
    uploadTask6.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask6.snapshot.ref).then((url) => {
          seturl6(url);
        });
      }
    );
    uploadTask7.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask7.snapshot.ref).then((url) => {
          seturl7(url);
        });
      }
    );

    setUrls([...urlArray]);

    const date = new Date().toLocaleString();

    // const submitData = {
    //   FirstName: formData1.fname,
    //   MiddleName: formData1.mname,
    //   LastName: formData1.lname,
    //   Gender: formData1.gender,
    //   DOB: formData1.dob,
    //   Phone: formData1.phone,
    //   WhatsAppNumber: formData1.whatsappNumber,
    //   Email: formData1.email,
    //   AadharNumber: formData1.aadharNumber,
    //   BloodGroup: formData1.bloodGroup,
    //   Cast: formData1.cast,
    //   Religion: formData1.religion,

    //   UniversityName: formData2.universityName,
    //   SSC_YearOfPassing: formData2.sscyop,
    //   SSC_Stream: formData2.sscstream,
    //   SSC_Percentage: formData2.sscpg,
    //   SSC_Details: formData2.sscd,
    //   SSC_CollegName: formData2.ssccn,
    //   HighSchool_YearOfPassing: formData2.hscyop,
    //   HighSchool_Stream: formData2.hscstream,
    //   HighSchool_Percentage: formData2.hscpg,
    //   HighSchool_CollegName: formData2.hsccn,
    //   HighSchool_Details: formData2.hsc,
    //   EducationQualification: formData2.educationQualification,
    //   College_YearOfPassing: formData2.cyop,
    //   College_Percentage: formData2.cpg,
    //   CompetitiveExamfundforMBA: formData2.competitiveExamfundforMBA,
    //   CompetitiveExamScore: formData2.competitiveExamScore,
    //   CompetitiveExamRank: formData2.competitiveExamRank,
    //   CompetitiveExamPercentile: formData2.competitiveExamPercentile,
    //   CompetitiveExamNameEducationQualification:
    //     formData2.competitiveExamNameEducationQualification,
    //   CompetitiveExamName: formData2.competitiveExamName,
    //   CollegeName: formData2.collegeName,
    //   CollegeStream: formData2.Stream,
    //   HowDidYouLearnAboutConfirmCollege: formData2.ConfirmCollege,
    //   WorkExperience: workExperison,

    //   Address: data.Address,
    //   City: data.City,
    //   Pincode: data.Pincode,
    //   State: data.State,
    //   Undertaking: data.Undertaking,
    //   AadharDocument: url1,
    //   EntranceDocument: url2,
    //   GradutionDocument: url3,
    //   HighSchoolDocument: url4,
    //   PAN_Document: url5,
    //   SignatureDocument: url6,
    //   SSC_Document: url7,
    //   FatherAnnualIncome: data.fatherAnnualIncome,
    //   FatherDesignation: data.fatherDesignation,
    //   FatherOccupation: data.fatherOccupation,
    //   FatherEmail: data.fatheremail,
    //   FatherName: data.fathername,
    //   FatherNumber: data.fathernum,
    //   FatherQualification: data.fatherqualification,
    //   MotherAnnualIncome: data.motherAnnualIncome,
    //   MotherDesignation: data.motherDesignation,
    //   MotherName: data.motherName,
    //   MotherOccupation: data.motherOccupation,
    //   MotherEmail: data.motheremail,
    //   MotherMobile: data.mothermobile,
    //   MotherQualification: data.motherqualification,

    //   date: date,
    // };

    // const docRef = await addDoc(collection(db, "applicationformdata"), {
    //   submitData,
    // });
    // console.log("Document written with ID: ", docRef.id);

    handleOpen();
    // setActiveStep(2);
  };
  useEffect(() => {
    console.log(errors, "errors");
  }, []);
  useEffect(() => {
    console.log(errors2, "errors1");
  }, [errors]);
  useEffect(() => {
    console.log(errors3, "errors2");
  }, [errors3]);
  useEffect(() => {
    // console.log(signatureImage === null);
    console.log(workExperison, "workExperison");
  }, [workExperison]);

  return (
    <>
      {showAllForms ? (
        <div className='application-form-main-section' ref={myRef}>
          {/* <Stepper /> */}

          {/* Student Details  */}
          <div className='application-form-box'>
            <form
              className='application-form-main-field'
              style={{ display: step === 0 ? "" : "none" }}
              onSubmit={handleSubmit(onSubmit)}>
              <div className='student-details'>
                <div className='application-form-field'>
                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>First Name</label>
                    <input
                      type='text'
                      {...register("fname", {
                        required: true,
                        maxLength: 20,
                        validate: (value) => {
                          return !!value.trim();
                        },
                      })}
                    />
                    {errors.fname && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid First Name
                      </p>
                    )}
                  </div>

                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>Middle Name</label>
                    <input type='text' {...register("mname")} />
                  </div>
                  {errors.mname && (
                    <p
                      className='loginFormError'
                      style={{ marginLeft: "10px" }}>
                      Please Enter Valid Name
                    </p>
                  )}
                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>Last Name</label>
                    <input
                      type='text'
                      {...register("lname", {
                        required: true,
                        maxLength: 20,
                        validate: (value) => {
                          return !!value.trim();
                        },
                      })}
                    />
                    {errors.lname && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Last Name
                      </p>
                    )}
                  </div>
                </div>

                <div className='application-form-field'>
                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>Gender</label>
                    <select
                      name='Gender'
                      id='Gender'
                      {...register("gender", {
                        required: true,
                      })}>
                      <option value=''>Select One</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                      <option value='Others'>Others</option>
                    </select>
                    {errors.gender && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Gender
                      </p>
                    )}
                  </div>

                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>Date OF Birth</label>
                    <input
                      type='date'
                      {...register("dob", {
                        required: true,
                      })}
                    />
                    {errors.dob && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Dob
                      </p>
                    )}
                  </div>

                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>Phone Number</label>
                    <input
                      type='number'
                      {...register("phone", {
                        required: true,
                        pattern: /^[0-9+-]+$/,
                        minLength: 10,
                        maxLength: 10,
                      })}
                    />
                    {errors.phone && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Phone Number
                      </p>
                    )}
                  </div>
                </div>

                <div className='application-form-field'>
                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>What's App Number</label>
                    <input
                      type='text'
                      {...register("whatsappNumber", {
                        pattern: /^[0-9+-]+$/,
                        minLength: 10,
                        maxLength: 10,
                      })}
                    />
                    {errors.phone && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Whatsapp Number
                      </p>
                    )}
                  </div>

                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>E-Mail Address</label>
                    <input
                      type='text'
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.email && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Email
                      </p>
                    )}
                  </div>

                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>Aadhar NUmber</label>
                    <input
                      type='text'
                      {...register("aadharNumber", {
                        pattern: /^[0-9+-]+$/,
                        minLength: 16,
                        maxLength: 16,
                      })}
                    />
                    {errors.aadharNumber && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Aadhar Number
                      </p>
                    )}
                  </div>
                </div>

                <div className='application-form-field'>
                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>Blood Group</label>
                    <input type='text' {...register("bloodGroup")} />
                    {errors.bloodGroup && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Blood Group
                      </p>
                    )}
                  </div>

                  <div className='application-form-field-input application-form-field-input_flex_3'>
                    <label htmlFor=''>Religion</label>
                    <input type='text' {...register("religion")} />
                    {errors.religion && (
                      <p
                        className='loginFormError'
                        style={{ marginLeft: "10px" }}>
                        Please Enter Valid Religion
                      </p>
                    )}
                  </div>

                  {/* <div className='application-form-field-input'>
    <label htmlFor="">Phone Number</label>
    <input  type="text" />
</div> */}
                </div>

                <h2>
                  Caste Category: (Please put √ in the appropriate box below) *
                </h2>

                <div className='application-form-cast-field'>
                  <div className='application-form-cast-field-box'>
                    <input
                      type='radio'
                      id='ST'
                      name='category'
                      value='ST'
                      {...register("cast", {
                        required: true,
                      })}
                    />
                    <label for='vehicle1'>ST</label>
                    <br />
                  </div>

                  <div className='application-form-cast-field-box'>
                    <input
                      type='radio'
                      id='SC'
                      name='category'
                      value='SC'
                      {...register("cast", {
                        required: true,
                      })}
                    />
                    <label for='vehicle2'>SC</label>
                    <br />
                  </div>

                  <div className='application-form-cast-field-box'>
                    <input
                      type='radio'
                      id='OBC'
                      name='category'
                      value='OBC'
                      {...register("cast", {
                        required: true,
                      })}
                    />
                    <label for='vehicle3'> OBC</label>
                    <br />
                  </div>

                  <div className='application-form-cast-field-box'>
                    <input
                      type='radio'
                      id='NT(A)'
                      name='category'
                      value='NT(A)'
                      {...register("cast", {
                        required: true,
                      })}
                    />
                    <label for='vehicle1'>NT(A)</label>
                    <br />
                  </div>

                  <div className='application-form-cast-field-box'>
                    <input
                      type='radio'
                      id='NT(B)'
                      name='category'
                      value='NT(B)'
                      {...register("cast", {
                        required: true,
                      })}
                    />
                    <label for='vehicle2'>NT</label>
                    <br />
                  </div>

                  <div className='application-form-cast-field-box'>
                    <input
                      type='radio'
                      id='NT(C)'
                      name='category'
                      value='NT(C)'
                      {...register("cast", {
                        required: true,
                      })}
                    />
                    <label for='vehicle3'>Other</label>
                    <br />
                  </div>
                </div>
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}>
                  {errors.cast && (
                    <p
                      className='loginFormError'
                      style={{ marginLeft: "10px" }}>
                      Please Enter Valid Cast
                    </p>
                  )}
                </div>
              </div>
              <div className='form_button'>
                <button type='submit' onSubmit={scrollHandle}>
                  Next
                </button>
              </div>
            </form>
            <form
              className='application-form-main-field'
              onSubmit={handleSubmit2(onSubmit1)}>
              <FormGroup sx={{ display: step === 1 ? "" : "none" }}>
                <div className='academics-details'>
                  <h2>Academics Details</h2>

                  <div className='graduation-details'>
                    <h3>Graduation Details</h3>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_5'>
                        <label htmlFor=''>
                          Current Education Qualification Status *
                        </label>
                        <select
                          name='Education Qualification'
                          id='Gender'
                          {...register2("educationQualification", {
                            required: true,
                          })}>
                          <option value=''>select One</option>
                          <option value='Pursuing'>Pursuing</option>
                          <option value='Passed Graduation'>
                            Passed Graduation
                          </option>
                        </select>
                        {errors2.educationQualification && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Education Qualification
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_5'>
                        <label htmlFor=''>University Name *</label>
                        <input
                          type='text'
                          {...register2("universityName", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors2.universityName && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid University Name
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>College Name *</label>
                        <input
                          type='text'
                          {...register2("collegeName", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors2.collegeName && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid College Name
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Stream*</label>
                        <input
                          type='text'
                          {...register2("Stream", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors2.Stream && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Stream
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Year of Passing*</label>
                        <input
                          type='text'
                          {...register2("cyop", {
                            required: true,

                            pattern: /^[0-9+-]+$/,
                            minLength: 4,
                            maxLength: 4,
                          })}
                        />
                        {errors2.cyop && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Year of Passing
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Percentage/Grade*</label>
                        <input
                          type='text'
                          {...register2("cpg", {
                            required: true,
                            pattern: /^[0-9+-]+$/,
                            minLength: 2,
                            maxLength: 4,
                          })}
                        />
                        {errors2.cpg && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Percentage/Grade
                          </p>
                        )}
                      </div>
                    </div>
                    <h3>12th Details</h3>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_5'>
                        <label htmlFor=''>12th / HSC Details</label>
                        <input type='text' {...register2("hsc")} />
                        {errors2.hsc && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Name
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_5'>
                        <label htmlFor=''>College Name</label>
                        <input type='text' {...register2("hsccn")} />
                        {errors2.hsccn && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Name
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Stream</label>
                        <input type='text' {...register2("hscstream")} />
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Year of Passing</label>
                        <input
                          type='text'
                          {...register2("hscyop", {
                            pattern: /^[0-9+-]+$/,
                            minLength: 4,
                            maxLength: 4,
                          })}
                        />
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Percentage/Grade</label>
                        <input
                          type='text'
                          {...register2("hscpg", {
                            pattern: /^[0-9+-]+$/,
                            minLength: 2,
                            maxLength: 4,
                          })}
                        />
                      </div>
                    </div>
                    <h3>10th Details</h3>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_5'>
                        <label htmlFor=''>10th / SSC Details</label>
                        <input type='text' {...register2("sscd")} />
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_5'>
                        <label htmlFor=''>College Name</label>
                        <input type='text' {...register2("ssccn")} />
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Stream*</label>
                        <input type='text' {...register2("sscstream")} />
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Year of Passing</label>
                        <input
                          type='text'
                          {...register2("sscyop", {
                            pattern: /^[0-9+-]+$/,
                            minLength: 4,
                            maxLength: 4,
                          })}
                        />
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Percentage/Grade</label>
                        <input
                          type='text'
                          {...register2("sscpg", {
                            pattern: /^[0-9+-]+$/,
                            minLength: 2,
                            maxLength: 4,
                          })}
                        />
                      </div>
                    </div>
                    <h3>Competitive Exam Details</h3>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_5'>
                        <label htmlFor=''>Exam Name *</label>
                        <select
                          name='Education Qualification'
                          id='Gender'
                          {...register2("competitiveExamName", {
                            required: true,
                          })}>
                          <option value=''>select One</option>
                          <option value='cat'>CAT</option>
                          <option value='cet'>CET</option>
                          <option value='cmat'>CMAT</option>
                          <option value='gmat'>GMAT</option>
                          <option value='atma'>ATMA</option>
                          <option value='mat'>MAT</option>
                          <option value='Others'>other</option>
                        </select>
                        {errors2.competitiveExamName && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Exam Name
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_5'>
                        <label htmlFor=''>Year of Exam *</label>
                        <select
                          name='Education Qualification'
                          id='Gender'
                          {...register2(
                            "competitiveExamNameEducationQualification",
                            {
                              required: true,
                            }
                          )}>
                          <option value=''>select One</option>

                          <option value='2024'>2024</option>
                          <option value='20323'>2023</option>
                          <option value='2022'>2022</option>
                          <option value='Others'>Other</option>
                        </select>
                        {errors2.competitiveExamNameEducationQualification && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Year of Exam
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Rank</label>
                        <input
                          type='text'
                          {...register2("competitiveExamRank")}
                        />
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Percentile</label>
                        <input
                          type='text'
                          {...register2("competitiveExamPercentile")}
                        />
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Score*</label>
                        <input
                          type='text'
                          {...register2("competitiveExamScore", {
                            required: true,
                          })}
                        />
                        {errors2.competitiveExamScore && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Score
                          </p>
                        )}
                      </div>
                    </div>
                    <div
                      className='application-form-field application-form-field1'
                      style={{ alignItems: "center" }}>
                      <p>Do you have work experience?</p>
                      <div className='application-form-cast-field-box'>
                        <input
                          type='radio'
                          name='work'
                          value='Yes'
                          onChange={() => setWorkExperison(true)}
                        />
                        <label for='vehicle1'>Yes</label>
                      </div>
                      <div className='application-form-cast-field-box'>
                        <input
                          type='radio'
                          name='work'
                          value='No'
                          onChange={() => setWorkExperison(false)}
                        />
                        <label for='vehicle1'>NO</label>
                      </div>
                    </div>

                    {workExperison === true && (
                      <div
                        className='application-form-field'
                        style={{ alignItems: "center" }}>
                        <p>If Yes, kindly mention in months?</p>
                        <div className='application-form-field-input application-form-field-input_flex_3'>
                          <input type='text' required />
                        </div>
                      </div>
                    )}
                    <div
                      className='application-form-field'
                      style={{ alignItems: "center" }}>
                      <p>How did you learn about ConfirmCollege? </p>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <input type='text' {...register2("ConfirmCollege")} />
                      </div>
                    </div>
                    <div
                      className='application-form-field'
                      style={{ alignItems: "center" }}>
                      <p>How would you fund for MBA? </p>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <select
                          name='MBA Fund'
                          id='Gender'
                          {...register2("competitiveExamfundforMBA", {
                            required: true,
                          })}>
                          <option value=''>select One</option>
                          <option value='OWN'>OWN</option>
                          <option value='LOAN'>LOAN</option>
                        </select>
                        {errors2.competitiveExamfundforMBA && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid MBA Fund
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='form_button'
                  style={{ justifyContent: "space-between" }}>
                  <button
                    type='submit'
                    style={{ color: "black" }}
                    onClick={() => setActiveStep(0)}>
                    Back
                  </button>
                  <button type='submit' onSubmit={() => scrollHandle()}>
                    Next
                  </button>
                </div>
              </FormGroup>
            </form>
            <form
              className='application-form-main-field'
              onSubmit={handleSubmit3(onSubmit2)}>
              <FormGroup sx={{ display: step === 2 ? "" : "none" }}>
                <div className='academics-details'>
                  <h2>Parent Details</h2>

                  <div className='graduation-details'>
                    <div className='application-form-field '>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Father's Name *</label>
                        <input
                          type='text'
                          {...register3("fathername", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors3.fathername && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Father Name
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Father's Mobile Number *</label>
                        <input
                          type='text'
                          {...register3("fathernum", {
                            required: true,
                            pattern: /^[0-9+-]+$/,
                            minLength: 10,
                            maxLength: 10,
                          })}
                        />
                        {errors3.fathernum && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Father Mobile Number
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Father's Email Address *</label>
                        <input
                          type='text'
                          {...register3("fatheremail", {
                            required: true,
                            pattern:
                              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                        />
                        {errors3.fatheremail && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Father Email
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Father's Qualification</label>
                        <input
                          type='text'
                          {...register3("fatherqualification", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors3.fatherqualification && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Father's Qualification
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Father's Occupation *</label>
                        <input
                          type='text'
                          {...register3("fatherOccupation", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors3.fatherOccupation && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Father's Occupation
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Father's Designation</label>
                        <input
                          type='text'
                          {...register3("fatherDesignation")}
                        />
                        {errors3.fatherDesignation && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Father Designation
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Father's Annual Income *</label>
                        <input
                          type='text'
                          {...register3("fatherAnnualIncome", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors3.fatherAnnualIncome && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Father Income
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Mother's Name *</label>
                        <input
                          type='text'
                          {...register3("motherName", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors3.motherName && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Mother Name
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Mother's Mobile Number </label>
                        <input
                          type='text'
                          {...register3("mothermobile", {
                            pattern: /^[0-9+-]+$/,
                            minLength: 10,
                            maxLength: 10,
                          })}
                        />
                        {errors3.mothermobile && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Name
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Mother's Email Address</label>
                        <input
                          type='text'
                          {...register3("motheremail", {
                            pattern:
                              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                        />
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Mother's Qualification </label>
                        <input
                          type='text'
                          {...register3("motherqualification")}
                        />
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Mother's Occupation </label>
                        <input type='text' {...register3("motherOccupation")} />
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Mother's Designation </label>
                        <input
                          type='text'
                          {...register3("motherDesignation")}
                        />
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Mother's Annual Income</label>
                        <input
                          type='text'
                          {...register3("motherAnnualIncome")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Address Details    */}

                <div className='academics-details'>
                  <h2>Address Details</h2>

                  <div className='graduation-details'>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_1'>
                        <label htmlFor=''>Address *</label>
                        <input
                          type='text'
                          {...register3("Address", {
                            required: true,

                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors3.Address && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Address
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>State *</label>
                        <input
                          type='text'
                          {...register3("State", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors3.State && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid State
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>City *</label>
                        <input
                          type='text'
                          {...register3("City", {
                            required: true,
                            maxLength: 50,
                            validate: (value) => {
                              return !!value.trim();
                            },
                          })}
                        />
                        {errors3.City && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid City
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_3'>
                        <label htmlFor=''>Pin code *</label>
                        <input
                          type='text'
                          {...register3("Pincode", {
                            required: true,
                            pattern: /^[0-9+-]+$/,
                            minLength: 6,
                            maxLength: 6,
                          })}
                        />

                        {errors3.Pincode && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Pincode
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Upload documents Details    */}
                <div className='academics-details'>
                  <h2>Address Details</h2>

                  <div className='graduation-details'>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>10th / SSC *</label>
                        <div class='upload-btn-wrapper'>
                          <button class='btn'>Upload a file</button>
                          <input
                            type='file'
                            name='myfile'
                            onChange={(e) => setSscdoc(e.target.files[0])}
                            required
                            // {...register3("sscdoc", {
                            //   required: true,
                            // })}
                          />
                        </div>
                        {errors3.sscdoc && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Document
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>12th / HSC *</label>
                        <div class='upload-btn-wrapper'>
                          <button class='btn'>Upload a file</button>
                          <input
                            type='file'
                            name='myfile'
                            onChange={(e) => setHscdoc(e.target.files[0])}
                            required
                            // {...register3("hscdoc", {
                            //   required: true,
                            // })}
                          />
                        </div>
                        {errors3.hscdoc && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Document
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Graduation *</label>
                        <div class='upload-btn-wrapper'>
                          <button class='btn'>Upload a file</button>
                          <input
                            type='file'
                            name='myfile'
                            onChange={(e) => setGradutiondoc(e.target.files[0])}
                            required
                            // {...register3("gradutiondoc", {
                            //   required: true,
                            // })}
                          />
                        </div>
                        {errors3.gradutiondoc && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Document
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Entrance Exam *</label>
                        <div class='upload-btn-wrapper'>
                          <button class='btn'>Upload a file</button>
                          <input
                            type='file'
                            name='myfile'
                            onChange={(e) => setEnterancedoc(e.target.files[0])}
                            required
                            // {...register3("enterancedoc", {
                            //   required: true,
                            // })}
                          />
                        </div>
                        {errors3.enterancedoc && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Document
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='application-form-field'>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Adhar Card *</label>
                        <div class='upload-btn-wrapper'>
                          <button class='btn'>Upload a file</button>
                          <input
                            type='file'
                            name='myfile'
                            onChange={(e) => setAadhardoc(e.target.files[0])}
                            required
                            // {...register3("aadhardoc", {
                            //   required: true,
                            // })}
                          />
                        </div>
                        {errors3.aadhardoc && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Document
                          </p>
                        )}
                      </div>
                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Pancard</label>
                        <div class='upload-btn-wrapper'>
                          <button class='btn'>Upload a file</button>
                          <input
                            type='file'
                            name='myfile'
                            onChange={(e) => setPandoc(e.target.files[0])}
                            required
                            // {...register3("pandoc")}
                          />
                        </div>
                        {errors3.pandoc && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Document
                          </p>
                        )}
                      </div>

                      <div className='application-form-field-input application-form-field-input_flex_25'>
                        <label htmlFor=''>Signature *</label>
                        <div class='upload-btn-wrapper'>
                          <button class='btn'>Upload a file</button>
                          <input
                            type='file'
                            name='myfile'
                            required
                            // {...register3("signaturedoc", {
                            //   required: true,
                            // })}
                            onChange={(e) => {
                              setSignatureImage(e.target.files[0]);
                              setSignaturedoc(e.target.files[0]);
                            }}
                          />
                        </div>
                        {errors3.signaturedoc && (
                          <p
                            className='loginFormError'
                            style={{ marginLeft: "10px" }}>
                            Please Enter Valid Document
                          </p>
                        )}
                      </div>
                      {signatureImage != null && (
                        <div className='application-form-field-input application-form-field-input_flex_25'>
                          <label htmlFor=''>Signature Preview</label>
                          <div class='upload-btn-wrapper Signature_preview'>
                            <img
                              src={
                                signatureImage?.length === 0
                                  ? ""
                                  : URL.createObjectURL(signatureImage)
                              }
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                              alt='signature'
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    gap: "15px",
                    marginBottom: "20px",
                    padding: "0 10px",
                  }}>
                  <h3>Undertaking by the student</h3>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "15px",
                    }}>
                    <input
                      type='checkbox'
                      {...register3("Undertaking", {
                        required: true,
                      })}
                    />
                    <p>
                      I hereby declare that the above information provided is
                      complete and correct to the best of my knowledge.
                    </p>
                  </span>
                </div>
                <div>
                  {errors3.Undertaking && (
                    <p
                      className='loginFormError'
                      style={{ marginLeft: "10px", textAlign: "start" }}>
                      Please Check the Term and Comdition
                    </p>
                  )}
                </div>
                <div
                  className='form_button'
                  style={{ justifyContent: "space-between" }}>
                  <button
                    type='submit'
                    style={{ color: "black" }}
                    onClick={() => setActiveStep(1)}>
                    Back
                  </button>
                  <button
                    className='app-primary-buttons-round'
                    type='submit'
                    style={{
                      width: "180px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                    }}>
                    Apply Now &nbsp;
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='52'
                      height='29'
                      viewBox='0 0 52 29'
                      fill='none'>
                      <path
                        d='M36.83 0H14.35C6.42472 0 0 6.42472 0 14.35C0 22.2753 6.42472 28.7 14.35 28.7H36.83C44.7553 28.7 51.18 22.2753 51.18 14.35C51.18 6.42472 44.7553 0 36.83 0Z'
                        fill='white'
                      />
                      <path
                        d='M25.7025 19.2875C25.3141 18.8964 25.3152 18.2648 25.705 17.875L28.1673 15.4127C28.9478 14.6322 28.9485 13.3671 28.1689 12.5858L25.7038 10.1154C25.315 9.72569 25.3153 9.09466 25.7046 8.70538C26.0942 8.31581 26.7258 8.31581 27.1154 8.70538L30.9958 12.5858C31.7768 13.3668 31.7768 14.6332 30.9958 15.4142L27.12 19.29C26.7283 19.6817 26.0928 19.6806 25.7025 19.2875Z'
                        fill='black'
                      />
                      <path
                        d='M19.7025 19.2875C19.3141 18.8964 19.3152 18.2648 19.705 17.875L22.1673 15.4127C22.9478 14.6322 22.9485 13.3671 22.1689 12.5858L19.7038 10.1154C19.315 9.72569 19.3153 9.09466 19.7046 8.70538C20.0942 8.31581 20.7258 8.31581 21.1154 8.70538L24.9958 12.5858C25.7768 13.3668 25.7768 14.6332 24.9958 15.4142L21.12 19.29C20.7283 19.6817 20.0928 19.6806 19.7025 19.2875Z'
                        fill='black'
                      />
                    </svg>
                  </button>
                </div>
              </FormGroup>
            </form>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Form Submitted Successfuly
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                Our Team Will Connect You Soon.
              </Typography>
            </Box>
          </Modal>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
            paddingTop: "2rem",
          }}>
          <FaCheckDouble style={{ color: "green", fontSize: "25px" }} />
          <h3>Application Successfully Submitted</h3>
        </div>
      )}
    </>
  );
}

export default ApplicationFormMain;

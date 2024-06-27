import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./contactFormMain.css";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../../firebase";

import axios from "axios";

function ContactFormMain() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const programOptions = ["Program 1", "Program 2", "Program 3"]; // Replace with your program options

  const db = getFirestore(app);
  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      // Simulate an asynchronous submission (you can replace this with your actual form submission logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const date = new Date().toLocaleString();
      const docRef = await addDoc(collection(db, "contact"), {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        city: data.city,
        program: data.program,
        date: date,
      });

      // await axios
      //   .get(
      //     "https://script.google.com/macros/s/AKfycbyykM-Qa_UEeUOvgCKO93hQZJTGxo99UELZ3wiGbOTIBf9FHq1edqAnt3ygWZU7RmLbeQ/exec"
      //   )
      //   .then((r) => console.log(r));
      // After successful submission, update state to show success message
      console.log("Document written with ID: ", docRef.id);
      setSubmissionSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="app-container-flex-center contact-form-main">
      {isSubmitting ? (
        // Display loading spinner while submitting
        <div className="contact-submisiion-wait">
          <div className="loading-spinner"></div>
          <h4>Please Wait..</h4>
        </div>
      ) : submissionSuccess ? (
        // Display success message after successful submission
        <div className="submission-success">
          <span role="img" aria-label="Tick Mark">
            ✅
          </span>{" "}
          Thank you for contacting us!
        </div>
      ) : (
        <form
          className="app-container-flex-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              id="firstName"
              placeholder="Name"
              {...register("fullName", {
                required: "Full name is required",
                validate: (value) => !!value.trim() || "Full name is required",
              })}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName.message}</span>
            )}
          </div>

          {/* <div>
            <input
              type="text"
              id="street"
              placeholder="Street"
              {...register("street", {
                required: "Street is required",
                validate: (value) => !!value.trim() || "Street is required",
              })}
            />
            {errors.street && (
              <span className="error">{errors.street.message}</span>
            )}
          </div> */}

          {/* <div>
            <input
              type="text"
              id="postcode"
              placeholder="Postcode"
              {...register("postcode", {
                required: "Postcode is required",
                validate: (value) => !!value.trim() || "Postcode is required",
              })}
            />
            {errors.postcode && (
              <span className="error">{errors.postcode.message}</span>
            )}
          </div> */}

          <div>
            <input
              type="tel"
              id="phone"
              placeholder="Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^(?!\s*$)[\d\s+()-]{8,15}$/,
                  message: "Invalid phone number format",
                },
              })}
            />
            {errors.phone && (
              <span className="error">{errors.phone.message}</span>
            )}
          </div>

          <div>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              {...register("email", {
                required: "Invalid email format",
                validate: (value) =>
                  (!!value.trim() &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) ||
                  "Invalid email format",
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              id="city"
              placeholder="City"
              {...register("city", {
                required: "City is required",
                validate: (value) => !!value.trim() || "City is required",
              })}
            />
            {errors.city && (
              <span className="error">{errors.city.message}</span>
            )}
          </div>

          <div className="contact-form-main-program-input">
            {/* <label htmlFor="program">Select a Program:</label> */}

            <select
              id="program"
              {...register("program", {
                required: "Program selection is required",
              })}
            >
              <option value="">Select a Program</option>
              {programOptions.map((program, index) => (
                <option key={index} value={program}>
                  {program}
                </option>
              ))}
            </select>
            {errors.program && (
              <span className="error">{errors.program.message}</span>
            )}
          </div>

          {/* <div>
            <textarea
              id="message"
              placeholder="Let's talk about your idea..."
              {...register("message", {
                required: "Message is required",
                validate: (value) => !!value.trim() || "Message is required",
              })}
            />
            {errors.message && (
              <span className="error">{errors.message.message}</span>
            )}
          </div> */}

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactFormMain;

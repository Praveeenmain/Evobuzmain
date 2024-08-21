import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS for additional styling

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccessMessage("Your query is successfully registered. Our agent will contact you soon.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setErrorMessage("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center ">Contact Us</h1>
      
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <div className="mb-3 ">
          <input
            type="text"
            name="from_name"
            placeholder="Enter Name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="phone_number"
            placeholder="Enter Phone Number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Enter your message"
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      {successMessage && <p className="text-success text-center mt-3">{successMessage}</p>}
      {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
    </div>
  );
};

export default Contact;

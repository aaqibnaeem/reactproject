import React, { useState } from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";

let Contact = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [msg, setMsg] = useState("");

  const validationSchema = yup.object({
    firstName: yup
      .string("Enter first name")
      .required("First name is required"),
    lastName: yup.string("Enter last name").required("First last is required"),
    email: yup
      .string("Enter your email")
      .email("Invalid email")
      .required("Email is required"),
    msg: yup.string("Enter message").required("messageis required"),
  });

  let formReset = () => {
    let inpForm = document.getElementsByTagName("form")[0];
    inpForm.childNodes[0].childNodes[0].value = ''
    inpForm.childNodes[1].childNodes[0].value = ''
    inpForm.childNodes[2].childNodes[0].value = ''
    inpForm.childNodes[3].childNodes[0].value = ''
  };

  const myFormik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      msg: msg,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const notify = toast.success("Message sent...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setFirstName(values.firstName)
      setLastName(values.lastName)
      setEmail(values.email)
      setMsg(values.msg)

      let msgData = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        msg : msg,
      }
      console.log(msgData)

      // formReset()
    },
  },[firstName,lastName,email,msg]);

  return (
    <>
      <MyNav />

      <div
        className="container-fluid about-heading bg-light shadow"
        style={{ height: 300, display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>

      <Container>
        <div className="container py-2 d-flex flex-column flex-lg-row align-items-center justify-content-center my-5">
          <div className="form-control my-2 bg-light h-100 border-none">
            <h5 className="text-center m-2">Message us</h5>
            <div className="row">
              <form onSubmit={myFormik.handleSubmit}>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control my-1 shadow-none"
                    id="firstName"
                    placeholder="First Name"
                    value={myFormik.values.firstName}
                    onChange={myFormik.handleChange}
                  />
                  {myFormik.touched.firstName && myFormik.errors.firstName}
                </div>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control my-1 shadow-none"
                    id="lastName"
                    placeholder="Last Name"
                    value={myFormik.values.lastName}
                    onChange={myFormik.handleChange}
                  />
                  {myFormik.touched.lastName && myFormik.errors.lastName}
                </div>
                <div className="col-sm-12">
                  <input
                    type="email"
                    className="form-control my-1 shadow-none"
                    id="email"
                    placeholder="Email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                  />
                  {myFormik.touched.email && myFormik.errors.email}
                </div>
                <div className="col-sm-12">
                  <textarea
                    rows="4"
                    className="form-control my-1 shadow-none"
                    id="msg"
                    placeholder="Message"
                    value={myFormik.values.msg}
                    onChange={myFormik.handleChange}
                  ></textarea>
                  {myFormik.touched.msg && myFormik.errors.msg}
                </div>
                <div>
                  <button
                    className="btn btn-secondary w-100 my-1"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="container bg-light m-2 border rounded">
            <h5 className="text-center m-2">Our Location</h5>
            <iframe
              className=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.050862043041!2d68.35913359999999!3d25.369611799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c713e8cb32343%3A0xd640028bfd277317!2sInTech%20Solusions!5e0!3m2!1sen!2s!4v1670608216858!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: "0px" }}
            ></iframe>
          </div>
        </div>
      </Container>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Contact;

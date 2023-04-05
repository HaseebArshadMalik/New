import Link from "next/link";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useRouter } from "next/router";
import Image from "next/legacy/image";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  speciality: Yup.string().required("Speciality is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const Signup = () => {
  const router = useRouter();

  const handleSignup = async (values, { setSubmitting }) => {
    const res = await fetch(
      "http://localhost/NewProject/api/Doctor/SignupDoctor",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        M.toast({
          html: "Doctor added successfully",
          classes: "green",
        });
        router.push("/Login");
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="container ">
      <Image
        src="/bkimage1.jpg"
        layout="fill"
        className="roadmap2"
        alt="noimage"
      ></Image>
      <div className="row">
        <div
          className="col-lg-6 mt-5 center-align h-100 shadow-lg p-3 mb-5 bg-white rounded"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              fill="#2196F3"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <h3>Sign Up</h3>
          <Formik
            initialValues={{
              name: "",
              gender: "male",
              email: "",
              speciality: "",
              password: "",
              phone: "",
              address: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSignup}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormControl>
                  <div className="d-flex">
                  <Field type="text" name="name" placeholder="Name" className="mx-2" />
                  <ErrorMessage name="name" component="div" />

                  <Field type="email" name="email" placeholder="Email" className="mx-2" />
                  <ErrorMessage name="email" component="div" />
              </div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" />
                  
              <div className="d-flex">
                  <FormControl component="fieldset">
                    <RadioGroup name="gender">
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                    <ErrorMessage name="gender" component="div" />
                  </FormControl>
                  </div>
              <div className="d-flex">
                  <Field
                    type="text"
                    name="speciality"
                    placeholder="Speciality" className="mx-2"
                  />
                  <ErrorMessage name="speciality" component="div" />

                  <Field type="text" name="phone" placeholder="Phone Number" className="mx-2" />
                  <ErrorMessage name="phone" component="div" />
              </div>
                  <Field type="text" name="address" placeholder="Address" />
                  <ErrorMessage name="address" component="div" />

                  <button
                    className="btn waves-effect waves-light blue fw-bold text-white"
                    type="submit"
                  >
                    signup
                    <i className="material-icons right"></i>
                  </button>
                  <Link href="/Login">
                    <h5>Already have a account ?</h5>
                  </Link>
                </FormControl>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Signup;

import Link from "next/link";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/router";
import Router from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/legacy/image";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handlelogin = async (values) => {
    try {
      const res = await fetch("http://localhost/NewProject/api/Doctor/Loginpatient", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          EMAIL: values.email,
          PASSWORD: values.password,
        }),
      });
      const res2 = await res.json();
      if (res2.error) {
        setError(res2.error);
      } else if (
        res2.EMAIL != values.email &&
        res2.PASSWORD != values.password
      ) {
        setError("Invalid email or password.");
      } else {
        localStorage.setItem('docId', res2.PATID);
        console.log(res2);
        Router.push({
          pathname: "./Patientview",
        });
      }
    } catch (error) {}
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
          className="col-lg-4 mt-5 center-align h-100 shadow-lg p-3 mb-5 bg-white rounded"
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
          <h3>Login Form</h3>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              handlelogin(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormControl>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="mt-3"
                  />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    className="mt-3"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" />
                  {error && <div className="error">{error}</div>}
                  <button
                    className=" mt-5 text-white fw-bold btn waves-effect waves-light blue"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                    <i className="material-icons right"></i>
                  </button>
                 
                </FormControl>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

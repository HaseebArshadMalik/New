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
import React from "react";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  // speciality: Yup.string().required("Speciality is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const AddPatient = () => {
  const router = useRouter();

  const handleSignup = async (values, { setSubmitting }) => {
    const res = await fetch(
      "http://localhost/NewProject/api/Doctor/InsertPatient",
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
          html: "Patient added successfully",
          classes: "green",
        });
        router.push("/Doctorview");
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="container">
      <div className="card center-align">
        <h3>AddPatient</h3>
        <Formik
          initialValues={{
            name: "",
            gender: "male",
            email: "",
            // speciality: "",
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
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" />

                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" />

                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
                 
               
                
                
                
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
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

                <Field type="text" name="phone" placeholder="Phone Number" />
                <ErrorMessage name="phone" component="div" />

                <Field type="text" name="address" placeholder="Address" />
                <ErrorMessage name="address" component="div" />

                <button
                  className="btn waves-effect waves-light blue fw-bold text-white"
                  type="submit"
                >
                  AddPatient
                  <i className="material-icons right"></i>
                </button>
              </FormControl>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default AddPatient;

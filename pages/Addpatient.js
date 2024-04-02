import Link from "next/link";
import { useState,useEffect } from "react";
import Router from "next/router";
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
  name: Yup.string().matches(/^[a-zA-Z]+$/, "Name is not valid").required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  // speciality: Yup.string().required("Speciality is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string().matches(/^\d{11}$/, "Phone number is not valid").required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const AddPatient = () => {
  const router = useRouter();
  const { id,name} = router.query;
  
  const [uniqueNumber, setUniqueNumber] = useState("");
  const [patientid, setpatientid] = useState("");
  const [array, setarray] = useState([]);

  const generateUniqueNumber = () => {
    const num = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    const formattedNum = num.toString().padStart(3, "0"); // Ensure the number is exactly 3 digits long
    setUniqueNumber(formattedNum);
  };
 const getemr=async(formik)=>{
  const res=await fetch("http://localhost/NewProject/api/Patient/getpatientemr",
  {
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id:patientid}),
  })
  let data = await res.json();
    
    
    if (data) {
      let arr2=[];
      let arr1=[];
      for(let i=0;i<data.length;i++){
      
        arr1=data[i].split(',');
       arr2.push({PATID:arr1[0],NAME:arr1[1],GENDER:arr1[2],ADDRESS:arr1[3],EMAIL:arr1[4],PHONE:arr1[5],PASSWORD:arr1[6]})
      }
      setarray(arr2)
      if (arr2.length > 0) {
        const { PATID, NAME, GENDER, ADDRESS, EMAIL, PHONE, PASSWORD } = arr2[0];
        setUniqueNumber(PATID);
        formik.setFieldValue("name", NAME);
        formik.setFieldValue("gender", GENDER);
        formik.setFieldValue("email", EMAIL);
        formik.setFieldValue("password", PASSWORD);
        formik.setFieldValue("phone", PHONE);
        formik.setFieldValue("address", ADDRESS);
      }
     
    //navigation.navigate('DoctorsList',{array:arr});
    } else {
          
      //Alert.alert('you do not have Doctors Contact info')
    } 
 }

  const handleSignup = async (values, { setSubmitting }) => {
    values.uniqueNumber = uniqueNumber
    values.id=id
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/insertpatient",
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
        Router.push({
          pathname: "./Doctorview",
          query: {
            id,
            name,
            
          },
        });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setSubmitting(false);
      });
  };
  useEffect(() => {
    generateUniqueNumber();
  }, []);
  return (
    <div className="container">
      <div className="card center-align">
        <h3>AddPatient</h3>
        <Formik
          initialValues={{
            uniqueNumber: uniqueNumber,
            name: "",
            gender: "male",
            email: "",
            password: "",
            phone: "",
            address: "",
            id:id,
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {(formik) => (
            <Form>
              <FormControl>
                <div className="row">
              <div className="d-flex col-md-6">
                    <input
                      type="text"
                      name="uniqueNumber"
                      value={uniqueNumber}
                      readOnly
                    />
                    </div>
                    <div className="d-flex col-md-6">
                    <input
                      type="text"
                      name="patientid"
                      placeholder="Search Id" 
                      value={patientid}
                      onChange={(e) => setpatientid(e.target.value)}
                    />
                    </div>
                    <div className=" d-flex col-md-6">
                    <button
                                className="btn btn-info fw-bold mx-3"
                                 
                                 onClick={() => getemr(formik)}
                                style={{ fontSize: "12px !important" }}
                              >
                                Search
                              </button>

                    </div>
                    </div>
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

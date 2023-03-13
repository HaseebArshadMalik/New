import Link from "next/link";
import { useState } from "react";
import * as React from 'react';
import dayjs from "dayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/router";
const AddVital = () => {
  const [tem, settem] = useState("");
  const [bloodPressure, setpressure] = useState("");
  const [heartRate, setrate] = useState("");
  const [patId, setid] = useState("");
  const [value, setValue] = useState(dayjs('2022-04-17'));
  
  const router = useRouter();
  const{
    query:{id},
  }=router
  const pro={ id}

  const handleSignup = async (e) => {
     e.preventDefault();
      const res=await fetch('http://localhost/NewProject/api/Doctor/InsertVital', {
      method: 'POST',
      
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
    },
      body:JSON.stringify({
        "temperature": tem,
        "bloodPressure": bloodPressure,
        "heartRate": heartRate,
        "vitDate": value,
        "patId": patId,
      }),
    }).then(response => response.json())
      .then(data => {
        M.toast({ html: "Vitals added successfully", classes: "green" });
      router.push("/Doctorchat");

      })
      .catch(error => console.error(error))
    

      // const response = await fetch(
      //   `http://localhost/NewProject/api/Doctor/SignupDoctor`,
      //   {
      //     mode:"no-cors",
      //     method: 'POST',
      //     headers: {"Content-Type": "application/json"},
         
      //   },
       
        
      // );
  
      // if (response.ok) {
      //   const data = await response.json();
      //   console.log(data);
      //   // navigation.navigate('DirDashboard');
      // } else {
      //  console.log('Invalid Username or password!');
      // }


    // const requestOption = {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "application/json; ",
    //   },
      
    };
  
      // const res = await fetch(
    //   `http://localhost:80/NewProject/api/Doctor/SignupDoctor`,
    //   requestOption
    // );

    return (
    <div className="container  ">
      <div className=" card center-align ">
        <h3>AddVitals</h3>
        <form onSubmit={(e) => handleSignup(e)}>
          <FormControl>
            <input
              type="text"
              placeholder="Temperature"
              value={tem}
              onChange={(e) => settem(e.target.value)}
            />
            <input
              type="text"
              placeholder="BloodPressure"
              value={bloodPressure}
              onChange={(e) => setpressure(e.target.value)}
            />
            <input
              type="text"
              placeholder="HeartRate"
              value={heartRate}
              onChange={(e) => setrate(e.target.value)}
            />

            <input
              type="text"
              placeholder="PatientId"
              value={patId}
              onChange={(e) => setid(e.target.value)}
            />
            
            <button
              className="btn waves-effect waves-light #1565c0 blue darken-3"
              type="submit"
            >
              AddVitals
              <i className="material-icons right"></i>
            </button>
    
            {/* <button
            variant="contained"
            color="success"
            // className="btn waves-effect waves-light #1565c0 blue darken-4"
            type="submit"
            
          >
            Signup
            <Link href="/">SIGNUP</Link>
            </button> */}
           
          </FormControl>
        </form>
      </div>
    </div>
  );
};
export default AddVital;

import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useRouter } from "next/router";
const AddPatient = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
     e.preventDefault();
      const res=await fetch('http://localhost/NewProject/api/Doctor/InsertPatient', {
      method: 'POST',
      
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
    },
      body:JSON.stringify({
        "NAME": name,
        "GENDER": gender,
        "ADDRESS": address,
        "EMAIL": email,
        "PHONE": phone,
        "PASSWORD": password,
      }),
    }).then(response => response.json())
      .then(data => {
        M.toast({ html: "Patient added successfully", classes: "green" });
      router.push("/Doctorview");

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
        <h3>AddPatient</h3>
        <form onSubmit={(e) => handleSignup(e)}>
          <FormControl>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <input
              type="text"
              placeholder="PhoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              className="btn waves-effect waves-light #1565c0 blue darken-3"
              type="submit"
            >
              AddPatient
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
export default AddPatient;

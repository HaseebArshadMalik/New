// import { useRouter } from "next/router";
// import { Tabs, Tab, Box } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Router from "next/router";
// import Image from "next/legacy/image";
// import Link from "next/link";
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   useEffect(() => {
//     if (localStorage) {
//       const docID = localStorage.getItem('docId')
//       console.log("docId", docID)
//     }
// }, []);

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost/NewProject/api/Doctor/GetAllVital`);
//   const res1 = await fetch(
//     `http://localhost/NewProject/api/Doctor/GetAllSymptom`
//   );

//   const res2 = await fetch(`http://localhost/NewProject/api/Doctor/GetMed`);

//   const data = await res.json();
//   const data1 = await res1.json();
//   const data2 = await res2.json();
//   return {
//     props: {
//       data,
//       data1,
//       data2,
//     },
//   };
// };

// const tabs = ({ data, data1, data2 }) => {
//   const [value, setValue] = useState();
//   const [vitalsarray,setvitalsarray] = useState([]);
//   const [diseasearray,setdiseasearray] = useState([]);
//   const [prescriptionarray,setprescriptionarray] = useState([]);
//   const router = useRouter();
//   const { id, name,dbname } = router.query;
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // const router = useRouter();
//   // const {
//   //   query: { id, name },
//   // } = router;
//   // const pro = { id, name };

//   const getVitals = async () => {

//         const res = await fetch(
//           'http://localhost/NewProject/api/Patient/getpatientvitals', {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name:dbname,
//             patid:id,
//           }),
//         }
//         );
//         // console.log(response+'    joijoijoiji');
//         let data = await res.json();

//         console.log(data)
//         if (data) {
//           let arr2=[];
//           for(let i=0;i<data.length;i++){

//            let arr1=data[i].split(',');
//            arr2.push({tp:arr1[0],bp:arr1[1],hr:arr1[2],br:arr1[3],d:arr1[4],t:arr1[5]})
//           }
//           setvitalsarray(arr2)

//         //navigation.navigate('DoctorsList',{array:arr});
//         } else {
//           //Alert.alert('you do not have Doctors Contact info')
//         }
//     }
//   const getSymptoms = async () => {

//     const res = await fetch(
//       'http://localhost/NewProject/api/Patient/getDisease', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name:dbname,
//         patid:id,
//       }),
//     }
//     );
//     // console.log(response+'    joijoijoiji');
//     let data = await res.json();

//     console.log(data)
//     if (data) {
//       let arr2=[];
//       for(let i=0;i<data.length;i++){

//        let arr1=data[i].split('=');
//        arr2.push({NAME:arr1[0],DATE:arr1[1],TIME:arr1[2],SYMPTOMS:arr1[3],TREATMENT:arr1[4]})
//       }
//       setdiseasearray(arr2)

//     //navigation.navigate('DoctorsList',{array:arr});
//     } else {
//       //Alert.alert('you do not have Doctors Contact info')
//     }
// }
//   const getMedicine = async () => {

//     const res = await fetch(
//       'http://localhost/NewProject/api/Patient/getPrescription', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name:dbname,
//         patid:id,
//       }),
//     }
//     );

//     let data = await res.json();

//     console.log(data)
//     if (data) {
//       let arr2=[];
//       for(let i=0;i<data.length;i++){

//        let arr1=data[i].split(',');
//        arr2.push({MEDTYPE:arr1[0],MEDNAME:arr1[1],WEIGHT:arr1[2],MRNG:arr1[3],NOON:arr1[4],EVE:arr1[5],NIGHT:arr1[6],DATE:arr1[7],Time:arr1[8],Days:arr1[9]})
//       }
//       setprescriptionarray(arr2)

//     //navigation.navigate('DoctorsList',{array:arr});
//     } else {
//       //Alert.alert('you do not have Doctors Contact info')
//     }
// }
//       useEffect(()=>{

//         // setpatarr([]);
//          getVitals();
//          getSymptoms();
//          getMedicine();
//         },[id]);

//   function sendProps() {
//     Router.push({
//       pathname: "./AddVitals",
//       query: {
//         id,
//         dbname,
//       },
//     });
//   }
//   function addSymptoms() {
//     Router.push({
//       pathname: "./AddSymptoms",
//       query: {
//         id,
//         dbname,

//       },
//     });
//   }
//   function prescribe() {
//     Router.push({
//       pathname: "../Prescribe",
//       query: {
//         id,
//         dbname,
//       },
//     });
//   }

//   return (
//     <>
//       <div style={{ backgroundColor: "#ee6e73", padding:'1rem 0' }}>
//         <div className="row align-items-center mb-0">
//           <div className="col-md-4 col-4">
//           <Link className="my-btn " href="/Login">
//               Logout
//             </Link>
//           </div>
//           <div className="col-md-4 col-5">
//             <h4 className="text-center text-white">{name}</h4>
//           </div>
//           <div className="col-md-4 col-3"></div>
//         </div>
//       </div>

//       {/* <MyTabs /> */}
//       <Box sx={{ width: "100%" }}>
//         <Tabs value={value} onChange={handleChange} aria-label="My tabs">
//           <Tab label="Vitals" id="tab-0" />
//           <Tab label="Symptoms" id="tab-1" />
//           <Tab label="Prescription" id="tab-2" />
//         </Tabs>
//         <TabPanel value={value} index={0}>
//           <div className="container">
//             <div className="row">
//               <nav>
//                 <div className="col-lg-12">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <h3>Vitals</h3>
//                     <span>
//                       <svg
//                         onClick={() => sendProps()}
//                         style={{ cursor: "pointer" }}
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </nav>
//               <div className="col-lg-md-12">
//                 <div style={{ overflowX: "auto" }}>
//                   <table className="table table-striped">
//                     <thead className="thead-dark">
//                       <tr>
//                         <th className="fw-bold fs-6" scope="col" style={{textAlign:'left'}}>
//                           Temperature
//                         </th>
//                         <th className="fw-bold fs-6" scope="col" style={{textAlign:'left'}}>
//                         BloodPressure
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           HeartRate
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Date
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Time
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           BreathRate
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                     {vitalsarray.map((curElem) => {
//                                   return (
//                                     <tr key={curElem.t}>
//                                       <td>{`${curElem.tp}`}</td>
//                                       <td>{`${curElem.bp}`}</td>
//                                       <td>{`${curElem.hr}`}</td>
//                                       <td>{`${curElem.d}`}</td>
//                                       <td>{`${curElem.t}`}</td>
//                                       <td>{`${curElem.br}`}</td>
//                                     </tr>
//                                   );
//                                 })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           <div className="container">
//             <div className="row">
//               <nav>
//                 <div className="col-lg-12">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <h3> Symptoms</h3>
//                     <span>
//                       <svg
//                         onClick={() => addSymptoms()}
//                         style={{ cursor: "pointer" }}
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </nav>

//               <div className="col-lg-md-12">
//                 <div style={{ overflowX: "auto" }}>
//                   <table className="table table-striped">
//                     <thead className="thead-dark">
//                       <tr>
//                         <th className="fw-bold" scope="col">
//                           NAME
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           SYMPTOMS
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Procedure
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           DATE
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           TIME
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                     {diseasearray.map((curElem) => {
//                                   return (
//                                     <tr key={curElem.TIME}>
//                                       <td>{`${curElem.NAME}`}</td>
//                                       <td>{`${curElem.SYMPTOMS}`}</td>
//                                       <td>{`${curElem.TREATMENT}`}</td>
//                                       <td>{`${curElem.DATE}`}</td>
//                                       <td>{`${curElem.TIME}`}</td>
//                                     </tr>
//                                   );
//                                 })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           <div className="container">
//             <div className="row">
//               <nav>
//                 <div className="col-lg-12">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <h3> Prescribe Medicine</h3>
//                     <span>
//                       <svg
//                         onClick={() => prescribe()}
//                         style={{ cursor: "pointer" }}
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="bi bi-plus-circle"
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </nav>

//               <div className="col-lg-md-12">
//                 <div style={{ overflowX: "auto" }}>
//                   <table className="table table-striped">
//                     <thead className="thead-dark">
//                       <tr>
//                         <th className="fw-bold" scope="col">
//                           Type
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Name
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Dozes
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Date
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Time
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Days
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Weight
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                     {prescriptionarray.map((curElem) => {
//                                   return (
//                                     <tr key={curElem.Time}>
//                                       <td>{`${curElem.MEDTYPE}`}</td>
//                                       <td>{`${curElem.MEDNAME}`}</td>
//                                       <td>
//                                         {`${curElem.MRNG}`}+{`${curElem.NOON}`}+
//                                         {`${curElem.EVE}`}+{`${curElem.NIGHT}`}
//                                       </td>
//                                       <td>{`${curElem.DATE}`}</td>
//                                       <td>{`${curElem.Time}`}</td>
//                                       <td>{`${curElem.Days}`}</td>
//                                       <td>{`${curElem.WEIGHT}`}</td>
//                                     </tr>
//                                   );
//                                 })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//           <div className="container">
//             <div
//               className="row align-item-center "
//               style={{ backgroundColor: "black" }}
//             >
//               <div className="col-lg-3 text-center ">
//                 <button
//                   className=" my-3 text-white fw-bold btn waves-effect waves-light blue"
//                   type="submit"
//                 >
//                   History
//                   <i className="material-icons right"></i>
//                 </button>
//               </div>
//               <div className="col-lg-3 text-center">
//                 <button
//                   className=" my-3 text-white fw-bold btn waves-effect waves-light blue"
//                   type="submit"
//                 >
//                   Prescription
//                   <i className="material-icons right"></i>
//                 </button>
//               </div>
//               <div className="col-lg-3 text-center">
//                 <button
//                   className=" my-3 text-white fw-bold btn waves-effect waves-light blue"
//                   type="submit"
//                 >
//                   Refer
//                   <i className="material-icons right"></i>
//                 </button>
//               </div>
//               <div className="col-lg-3 text-center">
//                 <button
//                   className=" my-3 text-white fw-bold btn waves-effect waves-light blue"
//                   type="submit"
//                 >
//                   Vitals
//                   <i className="material-icons right"></i>
//                 </button>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12" style={{ height: "16rem" }}>
//                 <Image
//                   src="/whatsapp.jpeg"
//                   height={400}
//                   width={1600}
//                   className="roadmap3"
//                   alt="noimage"
//                 ></Image>
//               </div>
//             </div>
//             <div className="row ">
//               <div className="col-lg-12 d-flex">
//                 <input className="p-2" type="text" placeholder="Message" />
//                 <button
//                   className=" my-3 text-white fw-bold btn waves-effect waves-light blue"
//                   type="submit"
//                 >
//                   Send
//                   <i className="material-icons right"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//       </Box>
//     </>
//   );
// };
// export default tabs;

import { useRouter } from "next/router";
import Router from "next/router";
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import Link from "next/link";
import ReactPlayer from 'react-player';
import io from "socket.io-client";
import axios from "axios";
import { date } from "yup";
import Prescribe from "./Prescribe";

const App = (props) => {
  const { children, value, index, ...other } = props;
  const router = useRouter();
  const { id, name, dbname, docid, docname } = router.query;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [vitalsarray, setvitalsarray] = useState([]);
  const [diseasearray, setdiseasearray] = useState([]);
  const [prescriptionarray, setprescriptionarray] = useState([]);
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [partner, setPartner] = useState(null);
  const [username, setUsername] = useState(null);
  const { divname, setdivname } = useState("");

  const messagesEndRef = useRef(null);
  const chatEndRef = useRef(null);
  const scrollRef = useRef(null);
  const [msg, setmsg] = useState("");
  const [vitdateselect, setvitaldateselect] = useState("");
  const [disdateselect, setdisdateselect] = useState("");
  const [presdateselect, setpresdateselect] = useState("");
  const [repdateselect, setrepdateselect] = useState("");
  const [vitdate, setvitdate] = useState([]);
  const [repdate, setrepdate] = useState([]);
  const [presdate, setpresdate] = useState([]);
  const [disdate, setdisdate] = useState([]);
  const [vitbydate, setvitbydate] = useState([]);
  const [presbydate, setpresbydate] = useState([]);
  const [disbydate, setdisbydate] = useState([]);
  const [repbydate, setrepbydate] = useState([]);
  const [msgarr, setmsgarr] = useState([]);
  const [allMsg, setAllMsg] = useState([]);
  const [renderState, setRenderState] = useState(0);
  const [date, setDate] = useState("");
  const [vitflag, setvitflag] = useState(false);
  const [disflag, setdisflag] = useState(false);
  const [presflag, setpresflag] = useState(false);
  const [repflag, setrepflag] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

   const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [clickState, setclickState] = useState(false);
 

  const generateRSAKeyPair = () => {
    const p = getPrimeNumber();
    const q = getPrimeNumber();

    const n = p * q;

    const phi = (p - 1) * (q - 1);

    const e = 65537;

    const d = modularInverse(e, phi);
    const publicKey1 = { n, e };

    const privateKey1 = { n, d };

    console.log(" Public key     n   " + n + "  e   " + e);
    console.log("Private key      n   " + n + "  d   " + d);
    return { publicKey1, privateKey1 };
  };
  const modularExponentiation = (base, exponent, modulus) => {
    if (modulus === 1) {
      return 0;
    }
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulus;
    }
    return result;
  };

  const encryptRSA = (message, publicKey) => {
    const { n, e } = publicKey;

    const unicodeValues = message.split("").map((char) => char.charCodeAt(0));
    const encryptedValues = unicodeValues.map((value) =>
      modularExponentiation(value, e, n)
    );

    return encryptedValues;
  };
  const decryptRSA = (encryptedValues, privateKey) => {
    const { n, d } = privateKey;

    // // Apply modular exponentiation with the private key to decrypt each encrypted value
    // const decryptedValues = encryptedValues.map(value => modularExponentiation(value, d, n));

    // // Convert each decrypted Unicode value back to its corresponding character
    // const decryptedMessage = decryptedValues.map(value => String.fromCharCode(value)).join('');
    const decryptedValues = encryptedValues.map((value) =>
      modularExponentiation(value, d, n)
    );

    // Convert each decrypted value back to its corresponding Unicode character
    const decryptedMessage = decryptedValues
      .map((value) => String.fromCharCode(value))
      .join("");

    return decryptedMessage;
  };

  const getPrimeNumber = () => {
    const isPrime = (num) => {
      if (num === 2) {
        return true;
      }
      if (num < 2 || num % 2 === 0) {
        return false;
      }
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };

    let prime;
    do {
      prime = Math.floor(Math.random() * 100) + 1; // Adjust the range as needed
    } while (!isPrime(prime));

    return prime;
  };

  const modularInverse = (a, m) => {
    const extendedEuclidean = (a, b) => {
      if (b === 0) {
        return [a, 1, 0];
      }
      const [d, x, y] = extendedEuclidean(b, a % b);
      return [d, y, x - Math.floor(a / b) * y];
    };

    const [gcd, x] = extendedEuclidean(a, m);
    if (gcd !== 1) {
      throw new Error("Modular inverse does not exist.");
    }
    return ((x % m) + m) % m;
  };
  const getSymptoms = async () => {
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/getDisease",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dbname,
          patid: id,
        }),
      }
    );
    // console.log(response+'    joijoijoiji');
    let data = await res.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split("=");
        arr2.push({
          NAME: arr1[0],
          DATE: arr1[1],
          TIME: arr1[2],
          SYMPTOMS: arr1[3],
          TREATMENT: arr1[4],
        });
      }
      setdiseasearray(arr2);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };
  const getMedicine = async () => {
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/getPrescription",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dbname,
          patid: id,
        }),
      }
    );

    let data = await res.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split(",");
        arr2.push({
          MEDTYPE: arr1[0],
          MEDNAME: arr1[1],
          WEIGHT: arr1[2],
          MRNG: arr1[3],
          NOON: arr1[4],
          EVE: arr1[5],
          NIGHT: arr1[6],
          DATE: arr1[7],
          Time: arr1[8],
          Days: arr1[9],
        });
      }
      setprescriptionarray(arr2);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };
  const getdiseasesdate = async () => {
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/getdiseasesdate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dbname,
          patid: id,
        }),
      }
    );

    let data = await res.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        arr2.push({ d: data[i].toString() });
      }
      setdisdate(arr2);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };
  const getprescriptiondate = async () => {
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/getprescriptiondate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dbname,
          patid: id,
        }),
      }
    );

    let data = await res.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        arr2.push({
          d: data[i].toString(),
        });
      }
      setpresdate(arr2);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };
  const getreportdate = async () => {
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/getreportdate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dbname,
          patid: id,
        }),
      }
    );

    let data = await res.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split(",");
        arr2.push({ d: arr1[0].toString() });
      }
      setrepdate(arr2);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };
  const getVitalsdate = async () => {
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/getvitalsdate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dbname,
          patid: id,
        }),
      }
    );

    let data = await res.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split(",");
        arr2.push({ d: arr1[0].toString() });
      }
      setvitdate(arr2);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };
  const getVitals = async () => {
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/getpatientvitals",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dbname,
          patid: id,
        }),
      }
    );

    let data = await res.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split(",");
        arr2.push({
          tp: arr1[0],
          bp: arr1[1],
          hr: arr1[2],
          br: arr1[3],
          d: arr1[4],
          t: arr1[5],
        });
      }
      setvitalsarray(arr2);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };

  const getAllReports = async () => {
    try {
      console.log("Post Called");

      const response = await fetch(
        "http://localhost/NewProject/api/Image/AllImages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id, // Replace with the actual patient ID
            dbname, // Replace with the actual database name
          }),
        }
      );
      let temp = [];
      let data = await response.json();
      if (data) {
        let arr1 = [];
        let arr3 = [];

        for (let i = 0; i < data.length; i++) {
          arr1 = data[i].split(",");
          arr3.push({
            type: arr1[0],
            name: arr1[1],
            path: arr1[2],
            dat: arr1[3],
          });
        }
        setImages(arr3);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const openModal = (image) => {
    setSelectedImage(image);
  };
  const close = () => {
    setclickState(!clickState)
  }
  const finish = async (msg,date,time) => {
   
   console.log(msg,date,time);
   let rt = dbname + "Chat";
   const response = await fetch(
    "http://localhost/NewProject/api/Chat/insertstarmessage",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: rt,
        docid: docid,
        patid: id,
        msg,
        time:date,
        date:time,
        type:"Text",
      }),
    }
  );
  let data = await response.json();
  if (data=="already"){
    alert("you already star this message");
  }
  else{
    alert("you star a message");
  }
  }
  const finish1 = async(msg,date,time) => {
   
   console.log(msg,date,time);
   let rt = dbname + "Chat";
   const response = await fetch(
    "http://localhost/NewProject/api/Chat/insertstarmessage",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: rt,
        docid: docid,
        patid: id,
        msg,
        time:date,
        date:time,
        type:"audio",
      }),
    }
  );
  let data = await response.json();
  if (data=="already"){
    alert("you already star this message");
  }
  else{
    alert("you star a message");
  }
  }
  const closeModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    // setpatarr([]);
    getVitals();
    getSymptoms();
    getMedicine();
    getVitalsdate();
    getprescriptiondate();
    getdiseasesdate();
    getAllReports();
    getreportdate();
  }, [id]);

  useEffect(() => {
    getchat();
  }, [renderState]);

  useEffect(() => {
    let x = renderState;
    x = x + 1;
    setTimeout(() => {
      setRenderState(x);

      console.log("i am in");
    }, 5000);
  }, [msgarr]);

  const handleChangeMessage = (e) => {
    e.preventDefault();
    setmsg(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addchat();
      getchat();
      setmsg("");
    }
  };
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

    // Scroll to the latest message when the component loads or messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgarr]);

  const addchat = async () => {
    let n = dbname + "Chat";
    try {
      if (msg == "") {
        // toast('Plz type message');
      } else {
        const { publicKey1, privateKey1 } = generateRSAKeyPair();
        let m = encryptRSA(msg, publicKey1);
        let y = m.toString();
        let w= getTimeWithAmPm();
        // let m=modifyString(message)
        const response = await fetch(
          "http://localhost/NewProject/api/Chat/insertmsg",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: n,
              from: docid,
              to: id,
              msg: msg,
              time:w,
              type: "Text",
              n: publicKey1.n,
              ek: publicKey1.e,
              pk: privateKey1.d,
            }),
          }
        );
      }
      console.log(name, from, to, msg, type);
      setmsg("");
      getchat();
    } catch (error) {
      console.log(error);
    }
  };

  const getchat = async () => {
    let rt = dbname + "Chat";
    const response = await fetch(
      "http://localhost/NewProject/api/Chat/getmsgexample",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: rt,
          from: id,
          to: docid,
        }),
      }
    );

    let data = await response.json();
    if (data) {
      let arr2 = [];
    
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split("=");
        if(arr1[5]==='Text'){
        let a = parseInt(arr1[6]);
        let b = parseInt(arr1[8]);

        let c = { n: a, d: b };
        let f = arr1[2];
        let encryptedValuesArray = [];

        if (f && typeof f === "string") {
          encryptedValuesArray = f.split(",").map(Number);
        } else {
          console.log("Invalid variable:");
        }

        const decryptedMessage = decryptRSA(encryptedValuesArray, c);
        arr2.push({
          ptid: arr1[0],
          did: arr1[1],
          msgs: arr1[2], //decryptedMessage,
          time: arr1[3],
          date: arr1[4],
          type:arr1[5],
          n: arr1[6],
          ek: arr1[7],
          pk: arr1[8],
        });
      }
    else if(arr1[5]==='audio'){
      arr2.push({
        ptid: arr1[0],
        did: arr1[1],
        msgs: arr1[2],
        time: arr1[3],
        date: arr1[4],
        type:arr1[5],
        n: arr1[6],
        ek: arr1[7],
        pk: arr1[8],
      });
    }
    
    }
   
    setmsgarr(arr2);
  };
}


// const getchat = async () => {
//   let rt = dbname + "Chat";
//   const response = await fetch(
//     "http://localhost/NewProject/api/Chat/msgexample",
//     {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: rt,
//         from: id,
//         to: docid,
//       }),
//     }
//   );

//   let data = await response.json();
//   if (data) {
//     let arr2 = [];

//     for (let i = 0; i < data.length; i++) {
//       let message = data[i];

//       if (message.type === "Text") {
//         arr2.push({
//           ptid: message.ptid,
//           did: message.did,
//           msgs: message.msgs,
//           time: message.time,
//           date: message.date,
//           type: message.type,
//           n: message.n,
//           ek: message.ek,
//           pk: message.pk,
//         });
//       } else if (message.type === "audio") {
//         arr2.push({
//           ptid: message.ptid,
//           did: message.did,
//           msgs: await fetchAudioData(message.msgs), // Fetch audio data separately
//           time: message.time,
//           date: message.date,
//           type: message.type,
//           n: message.n,
//           ek: message.ek,
//           pk: message.pk,
//         });
//       }
//     }

//     setmsgarr(arr2);
//   }
// };

// const fetchAudioData = async (audioUrl) => {
//   const response = await fetch(audioUrl);
//   const audioBlob = await response.blob();
//   const audioDataUrl = URL.createObjectURL(audioBlob);
//   return audioDataUrl;
// };



  const disebydate = () => {
    let arr3 = [];
    // setvitflag(false)

    for (let i = 0; i < diseasearray.length; i++) {
      if (diseasearray[i].DATE === disdateselect) {
        console.log(
          "Hy  " + vitalsarray[i].d + "   array length  " + vitalsarray.length
        );
        arr3.push({
          NAME: diseasearray[i].NAME,
          DATE: diseasearray[i].DATE,
          TIME: diseasearray[i].TIME,
          SYMPTOMS: diseasearray[i].SYMPTOMS,
          TREATMENT: diseasearray[i].TREATMENT,
        });
      }
    }

    setdisflag(true);
    setdisbydate(arr3);
  };
  const prescbydate = () => {
    let arr3 = [];
    // setvitflag(false)
    // console.log('Vitals seected date '+vitdateselect)
    for (let i = 0; i < prescriptionarray.length; i++) {
      if (prescriptionarray[i].DATE === presdateselect) {
        arr3.push({
          MEDTYPE: prescriptionarray[i].MEDTYPE,
          MEDNAME: prescriptionarray[i].MEDNAME,
          WEIGHT: prescriptionarray[i].WEIGHT,
          MRNG: prescriptionarray[i].MRNG,
          NOON: prescriptionarray[i].NOON,
          EVE: prescriptionarray[i].EVE,
          NIGHT: prescriptionarray[i].NIGHT,
          DATE: prescriptionarray[i].DATE,
          Time: prescriptionarray[i].Time,
          Days: prescriptionarray[i].Days,
        });
      }
    }

    setpresflag(true);
    setpresbydate(arr3);
  };
  const vitalsbydate = () => {
    let arr3 = [];
    // setvitflag(false)
    console.log("Vitals seected date " + vitdateselect);
    for (let i = 0; i < vitalsarray.length; i++) {
      if (vitalsarray[i].d === vitdateselect) {
        console.log(
          "Hy  " + vitalsarray[i].d + "   array length  " + vitalsarray.length
        );
        arr3.push({
          tps: vitalsarray[i].tp,
          bps: vitalsarray[i].bp,
          hrs: vitalsarray[i].hr,
          brs: vitalsarray[i].br,
          ds: vitalsarray[i].d,
          ts: vitalsarray[i].t,
        });
      }
    }

    setvitflag(true);
    setvitbydate(arr3);
  };
  const repobydate = () => {
    let arr3 = [];
    // setvitflag(false)
    console.log("Vitals seected date " + vitdateselect);
    for (let i = 0; i < images.length; i++) {
      if (images[i].dat === repdateselect) {
        console.log(
          "Hy  " + vitalsarray[i].d + "   array length  " + vitalsarray.length
        );
        arr3.push({
          dat: images[i].dat,
          type: images[i].type,
          name: images[i].name,
          path:images[i].path,
        });
      }
    }

    setrepflag(true);
    setrepbydate(arr3);
  };
  const handlevitalsChange = (event) => {
    setvitaldateselect(event.target.value);
    setvitbydate([]);
  };
  const handledisChange = (event) => {
    setdisdateselect(event.target.value);
    setdisbydate([]);
  };
  const handlepresChange = (event) => {
    setpresdateselect(event.target.value);
    setpresbydate([]);
  };
  const handlerepChange = (event) => {
    setrepdateselect(event.target.value);
    setrepbydate([]);
  };
  function gotostar() {
    let rt = dbname + "Chat";
    Router.push({
      pathname: "./StarMessages",
      query: {
        from:docid,
        to:id,
        name:rt,
      },
    });
  }
  function refer() {
    Router.push({
      pathname: "./Refer",
      query: {
        id,
        name,
        vitdate: JSON.stringify(vitdate),
        disdate: JSON.stringify(disdate),
        presdate: JSON.stringify(presdate),
        repdate: JSON.stringify(repdate),
        doctorid: docid,
        dbname,
        doctorname: docname,
      },
    });
  }

  function getMessageFieldValue(data) {
    return `${data.MEDTYPE} ${data.MEDNAME} ${data.MRNG} ${data.NOON} ${data.EVE} ${data.NIGHT} ${data.DATE} ${data.Time} ${data.Days} ${data.WEIGHT}`;
  }

  const handleStartRecording = () => {
    
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          setAudioBlob(audioBlob);
        });

        mediaRecorder.start();
        setRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };
  const saveAudio = () => {
    console.log(audioBlob);
    if (audioBlob) {
      const { publicKey1, privateKey1 } = generateRSAKeyPair();
      let n = dbname + "Chat";
      let x=getTimeWithAmPm();
      const formData = new FormData();
      formData.append("name", n);
      formData.append("from", docid);
      formData.append("to", id);
      formData.append("time", x);
      
      formData.append("type", "audio");
      formData.append("n", publicKey1.n);
      formData.append("ek", publicKey1.e);
      formData.append("pk", privateKey1.d);

      // Append the audio file
      formData.append("msg", audioBlob, "recorded_audio.wav");

      fetch("http://localhost/NewProject/api/Chat/InsertMsgWithAudio", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setAudioBlob(null);
            console.log("Audio and message saved successfully.");
          } else {
            console.error("Error saving audio and message:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error saving audio and message:", error);
        });
    }
  };
  

  const getTimeWithAmPm = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    const twelveHourFormat = hours % 12 || 12;

    // Pad the minutes with leading zeros if needed
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedTime = `${twelveHourFormat}:${paddedMinutes} ${ampm}`;

    //setCurrentTime(formattedTime);
    return formattedTime;
  };
  
  const baseUrl ="http://192.168.18.113/NewProject/Audio/";
  return (
    <div>
      <div
        className="p-2 pb-0 pt-0 mt-0"
        style={{ backgroundColor: "#D4F1F4" }}
      >
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-lg-9 col-md-6 col-sm-6">
              <h3 className="fw-bold fs-6 text-capitalize">{name}</h3>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-6 p-2">
              <button
                className="btn btn-success fw-bold"
                onClick=""
                style={{ fontSize: "14px !important" }}
              >
                Refer
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div
        className="p-2 pb-0 pt-0"
        style={{
          backgroundColor: "#B1D4E0",
          height: "19rem",
        }}
      >
        <div className="container">
          <div className="row text-center mb-0">
            {/* <div className="col-lg-3 col-md-6 col-6 p-3">
              <button className="btn btn-info fw-bold" onClick="">
                History
              </button>
            </div>
            <div className="col-lg-3 col-md-6 col-6 p-3">
              <button className="btn btn-info fw-bold" onClick="">
                Prescription
              </button>
            </div>
            <div className="col-lg-3 col-md-6 col-6 p-3">
              <button className="btn btn-info fw-bold" onClick="">
                Vitals
              </button>
            </div>
            <div className="col-lg-3 col-md-6 col-6 p-3">
              <button className="btn btn-info fw-bold">Reports</button>
            </div> */}
            <div id="exTab2" class="container">
              <div className="tab-content mt-1">
                <div className="tab-pane active show" id="1">
                  <div id="history">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-md-12 bg-light">
                          <div style={{ overflow: "auto", height: "12rem" }}>
                            <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                              <select
                                id="datefilter"
                                className="form-select"
                                value={vitdateselect}
                                onChange={handlevitalsChange}
                                aria-label="Default select example"
                              >
                                {vitdate.map((item, index) => {
                                  return (
                                    <option
                                      value={`${item.d}`}
                                      key={index}
                                    >{`${item.d}`}</option>
                                  );
                                })}
                                ;
                                
                              </select>
                              <button
                                className="btn btn-info fw-bold mx-3"
                                onClick={vitalsbydate}
                                style={{ fontSize: "12px !important" }}
                              >
                                OK
                              </button>
                            </div>
                            <table className="table table-striped" id="myTable">
                              <thead className="thead-dark">
                                <tr>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Temperature
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    BloodPressure
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    HeartRate
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Date
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Time
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    BreathRate
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {!vitflag &&
                                  vitalsarray.map((curElem) => {
                                    return (
                                      <tr key={curElem.t}>
                                        <td>{`${curElem.tp}`}</td>
                                        <td>{`${curElem.bp}`}</td>
                                        <td>{`${curElem.hr}`}</td>
                                        <td>{`${curElem.d}`}</td>
                                        <td>{`${curElem.t}`}</td>
                                        <td>{`${curElem.br}`}</td>
                                      </tr>
                                    );
                                  })}
                                {vitflag &&
                                  vitbydate.map((curElem) => {
                                    return (
                                      <tr key={curElem.ts}>
                                        <td>{`${curElem.tps}`}</td>
                                        <td>{`${curElem.bps}`}</td>
                                        <td>{`${curElem.hrs}`}</td>
                                        <td>{`${curElem.ds}`}</td>
                                        <td>{`${curElem.ts}`}</td>
                                        <td>{`${curElem.brs}`}</td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="2">
                  <div id="disease">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-md-12 bg-light">
                          <div style={{ overflow: "auto", height: "12rem" }}>
                            <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                              <select
                                id="datefilter"
                                className="form-select"
                                value={disdateselect}
                                onChange={handledisChange}
                                aria-label="Default select example"
                              >
                                {" "}
                                {disdate.map((item, index) => {
                                  return (
                                    <option
                                      value={`${item.d}`}
                                      key={index}
                                    >{`${item.d}`}</option>
                                  );
                                })}
                                ;
                              </select>
                              <button
                                className="btn btn-info fw-bold mx-3"
                                onClick={disebydate}
                                style={{ fontSize: "12px !important" }}
                              >
                                OK
                              </button>
                            </div>
                            <table className="table table-striped">
                              <thead className="thead-dark">
                                <tr>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    NAME
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    SYMPTOMS
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Procedure
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    DATE
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    TIME
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {!disflag &&
                                  diseasearray.map((curElem) => {
                                    return (
                                      <tr key={curElem.TIME}>
                                        <td>{`${curElem.NAME}`}</td>
                                        <td>{`${curElem.SYMPTOMS}`}</td>
                                        <td>{`${curElem.TREATMENT}`}</td>
                                        <td>{`${curElem.DATE}`}</td>
                                        <td>{`${curElem.TIME}`}</td>
                                      </tr>
                                    );
                                  })}
                                {disflag &&
                                  disbydate.map((curElem) => {
                                    return (
                                      <tr key={curElem.TIME}>
                                        <td>{`${curElem.NAME}`}</td>
                                        <td>{`${curElem.SYMPTOMS}`}</td>
                                        <td>{`${curElem.TREATMENT}`}</td>
                                        <td>{`${curElem.DATE}`}</td>
                                        <td>{`${curElem.TIME}`}</td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="3">
                  <div id="prescribe">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-md-12 bg-light">
                          <div style={{ overflow: "auto", height: "12rem" }}>
                            <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                              <select
                                id="datefilter"
                                className="form-select"
                                value={presdateselect}
                                onChange={handlepresChange}
                                aria-label="Default select example"
                              >
                                {" "}
                                {presdate.map((item, index) => {
                                  return (
                                    <option
                                      value={`${item.d}`}
                                      key={index}
                                    >{`${item.d}`}</option>
                                  );
                                })}
                                ;
                              </select>
                              <button
                                className="btn btn-info fw-bold mx-3"
                                onClick={prescbydate}
                                style={{ fontSize: "12px !important" }}
                              >
                                OK
                              </button>
                            </div>
                            <table className="table table-striped" id="myTable">
                              <thead className="thead-dark">
                                <tr>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Type
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Name
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Dozes
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Date
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Time
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Days
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Weight
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {!presflag &&
                                  prescriptionarray.map((curElem) => {
                                    return (
                                      <tr
                                        key={curElem.Time}
                                        onClick={() =>
                                          setmsg(getMessageFieldValue(curElem))
                                        }
                                      >
                                        <td>{`${curElem.MEDTYPE}`}</td>
                                        <td>{`${curElem.MEDNAME}`}</td>
                                        <td>
                                          {`${curElem.MRNG}`}+
                                          {`${curElem.NOON}`}+{`${curElem.EVE}`}
                                          +{`${curElem.NIGHT}`}
                                        </td>
                                        <td>{`${curElem.DATE}`}</td>
                                        <td>{`${curElem.Time}`}</td>
                                        <td>{`${curElem.Days}`}</td>
                                        <td>{`${curElem.WEIGHT}`}</td>
                                      </tr>
                                    );
                                  })}
                                {presflag &&
                                  presbydate.map((curElem) => {
                                    return (
                                      <tr
                                        key={curElem.Time}
                                        onClick={() =>
                                          setmsg(getMessageFieldValue(curElem))
                                        }
                                      >
                                        <td>{`${curElem.MEDTYPE}`}</td>
                                        <td>{`${curElem.MEDNAME}`}</td>
                                        <td>
                                          {`${curElem.MRNG}`}+
                                          {`${curElem.NOON}`}+{`${curElem.EVE}`}
                                          +{`${curElem.NIGHT}`}
                                        </td>
                                        <td>{`${curElem.DATE}`}</td>
                                        <td>{`${curElem.Time}`}</td>
                                        <td>{`${curElem.Days}`}</td>
                                        <td>{`${curElem.WEIGHT}`}</td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="4">
                  <div id="prescribe">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-md-12 bg-light">
                          <div style={{ overflow: "auto", height: "12rem" }}>
                            <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                              <select
                                id="datefilter"
                                className="form-select"
                                value={repdateselect}
                                onChange={handlerepChange}
                                aria-label="Default selrepobydateect example"
                              >
                                {" "}
                                {repdate.map((item, index) => {
                                  return (
                                    <option
                                      value={`${item.d}`}
                                      key={index}
                                    >{`${item.d}`}</option>
                                  );
                                })}
                                ;
                              </select>
                              <button
                                className="btn btn-info fw-bold mx-3"
                                onClick={repobydate}
                                style={{ fontSize: "12px !important" }}
                              >
                                OK
                              </button>
                            </div>
                            <table className="table table-striped" id="myTable">
                              <thead className="thead-dark">
                                <tr>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Date
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Type
                                  </th>
                                  <th
                                    className="fw-bold fs-6"
                                    scope="col"
                                    style={{ textAlign: "left" }}
                                  >
                                    Name
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {!repflag &&
                                  images.map((curElem) => {
                                    return (
                                      <tr
                                        key={curElem}
                                        onClick={() => openModal(curElem.path)}
                                      >
                                        <td>{`${curElem.dat}`}</td>
                                        <td>{`${curElem.type}`}</td>
                                        <td>{`${curElem.name}`}</td>
                                      </tr>
                                    );
                                  })}
                                <Modal
                                  isOpen={!!selectedImage}
                                  onRequestClose={closeModal}
                                  contentLabel="Selected Image"
                                >
                                  <h2>Selected Image</h2>
                                  <button onClick={closeModal}>Close</button>
                                  {selectedImage && (
                                    <img
                                      src={`data:image/jpeg;base64,${selectedImage}`}
                                      alt="Selected Image"
                                      className="img-fluid"
                                    />
                                  )}
                                </Modal>
                                {repflag &&
                                  repbydate.map((curElem) => {
                                    return (
                                      <tr
                                        key={curElem}
                                        onClick={() => openModal(curElem.path)}
                                      >
                                        <td>{`${curElem.dat}`}</td>
                                        <td>{`${curElem.type}`}</td>
                                        <td>{`${curElem.name}`}</td>
                                      </tr>
                                    );
                                  })}

                                <Modal
                                  isOpen={!!selectedImage}
                                  onRequestClose={closeModal}
                                  contentLabel="Selected Image"
                                >
                                  <h2>Selected Image</h2>
                                  <button onClick={closeModal}>Close</button>
                                  {selectedImage && (
                                    <img
                                      src={`data:image/jpeg;base64,${selectedImage}`}
                                      alt="Selected Image"
                                      className="img-fluid"
                                    />
                                  )}
                                </Modal>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs pb-3">
                <li>
                  <a href="#1" className="nav-link" data-toggle="tab">
                    Vitals
                  </a>
                </li>
                <li>
                  <a href="#2" className="nav-link" data-toggle="tab">
                    History
                  </a>
                </li>
                <li>
                  <a href="#3" className="nav-link" data-toggle="tab">
                    Prescription
                  </a>
                </li>
                <li>
                  <a href="#4" className="nav-link" data-toggle="tab">
                    Reports
                  </a>
                </li>
                <li>
                  <button
                    className="btn btn-success fw-bold mx-3"
                    onClick={refer}
                    style={{ fontSize: "14px !important" }}
                  >
                    Refer
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
      {/* <Link className=" mt-5 text-white fw-bold btn waves-effect waves-light blue" href="/Login">
              Starred Messages
            </Link> */}

            <button
            onClick={() => {
              
              gotostar();
              
              
            }}
            className=" mt-5 text-white fw-bold btn waves-effect waves-light blue"
          >
            Starred Messages
          </button>
      </div>
      <div id="messages" style={{ overflowY: "scroll", height: "260px" }}>
        {msgarr.map((data, index) => (
          
          
          <div 
            key={index}
            style={{
              display: "flex",
              justifyContent: data.did === docid ? " flex-start" : "flex-end",
              marginBottom: "10px",
            }}
          >
            {data.type==="Text" &&(
            <div 
            onClick={close}
              style={{
                backgroundColor:
                  data.did === docid    ? "lightblue" : "lightgreen",
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "fit-content",
                
              }}
              
            >
              
              {/* <p style={{ margin: 0 }}> {data.date}:{data.msgs}</p> */}
               
              <p  style={{ marginRight: '10px', marginBottom: '0' }} >
        {data.msgs}
        
      </p>
      <p style={{ marginBottom: '0' }}>{data.time}</p>
      
              
            </div>
            
            
          )}
          
            
         { data.ptid==id  && data.type=="Text" &&(
            <div 
            onClick={close}
              // style={{
              //   backgroundColor:
              //     data.did === docid    ? "lightblue" : "lightgreen",
              //   padding: "10px",
              //   borderRadius: "10px",
              //   maxWidth: "fit-content",
                
              // }}
              
            >
              
              {/* <p style={{ margin: 0 }}> {data.date}:{data.msgs}</p> */}
               
              {/* <p  style={{ marginRight: '10px', marginBottom: '0' }} >
        {data.msgs}
        
      </p> */}
      {/* <p style={{ marginBottom: '0' }}>{data.time}</p> */}
      {clickState &&(
        <svg  onClick={() => finish(data.msgs,data.time,data.date)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      )}
              
            </div>
            
            
          )}
          { data.ptid==id  && data.type=="audio" &&(
            <div 
            onClick={close}
              // style={{
              //   backgroundColor:
              //     data.did === docid    ? "lightblue" : "lightgreen",
              //   padding: "10px",
              //   borderRadius: "10px",
              //   maxWidth: "fit-content",
                
              // }}
              
            >
              
              {/* <p style={{ margin: 0 }}> {data.date}:{data.msgs}</p> */}
               
              {/* <p  style={{ marginRight: '10px', marginBottom: '0' }} >
        {data.msgs}
        
      </p> */}
      {/* <p style={{ marginBottom: '0' }}>{data.time}</p> */}
      {clickState &&(
        <svg  onClick={() => finish1(data.msgs,data.time,data.date)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      )}
              
            </div>
            
            
          )}
          
           { data.type==="audio"&& (
            
              <div  onClick={close}
              style={{
                backgroundColor:
                  data.did === docid    ? "lightblue" : "lightgreen",
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "fit-content",
              }}
            >
              <audio  controls   >
            <source src={baseUrl+data.msgs} type="audio/wav" />
           
          </audio>
          <p style={{ marginBottom: '0' }}>{data.time}</p>
           
           
              
            </div>
            )}
            
          </div>
          
        ))}
        
        <div ref={messagesEndRef}></div>{" "}
        {/* add a ref to the end of the messages */}
      </div>
      <div className="d-flex p-2 align-items-center">
        <input className="msg-tab"
          id="message"
          type="text"
          name="message"
          placeholder="Message"
          value={msg}
          onChange={(e) => handleChangeMessage(e)}
          onkeypress={(e) => handleKeyPress(e)}
        />


<div className="d-flex p-2 align-items-center">
      <div>
        {recording ? (
          // <p>Recording is in progress...</p>
          <audio ref={audioRef} controls />
        ) : (
          <p></p>
        )}
      </div>
    
  <div className="d-flex p-2 align-items-center">
    
      <svg
        onClick={handleStartRecording}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill={recording ? 'red' : 'currentColor'}
        className="bi bi-mic-fill"
        viewBox="0 0 16 16"
      >
        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
      </svg>
  
      
 <svg  onClick={handleStopRecording} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-stop-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
</svg>
    
 </div>
     
      {/* <audio ref={audioRef} controls /> */}
      <audio ref={audioRef} controls={false} />
   </div>
        <div className="text-end px-3">
          <button
            onClick={() => {
              if(audioBlob){
                saveAudio();
              }else if(msg!=''){
              addchat();
              }else if(audioBlob==null || msg==''){
                alert('Type a message or record the mesage');
              }
              getchat();
              setmsg("");
              
            }}
            className="btn btn-info fw-bold"
          >
            Send
          </button>
        </div>
      </div>
      {/* <div className="position-absolute w-100 " style={{ top: "3rem" }}>
        <div
          className="container bg-light shadow"
          id="report">
          <div className="row">
            <span className="text-end p-3">
              <svg
                onClick=""
                style={{ cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </span>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div>
                <label htmlFor="docName">Select Doctor</label>
                <select class="form-select">
                  <option value="">Danish</option>
                  <option value="">Haseeb</option>
                  <option value="">Saeed</option>
                  <option value="">Hassan</option>
                </select>
              </div>
              <div className=" mt-3">
                <label>
                  <input type="checkbox" className="filled-in" />
                  <span>History</span>
                </label>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="form-group">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    value={startDate}
                    onChange={(event) => setstartDate({ startDate })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    value={endDate}
                    onChange={(event) => setendDate({ endDate })}
                    required
                  />
                </div>
              </div>

              <div className=" mt-3">
                <label>
                  <input type="checkbox" className="filled-in" />
                  <span>Vitals</span>
                </label>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="form-group">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    value={startDate}
                    onChange={(event) => setstartDate({ startDate })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    value={endDate}
                    onChange={(event) => setendDate({ endDate })}
                    required
                  />
                </div>
              </div>

              <div className=" mt-3">
                <label>
                  <input type="checkbox" className="filled-in" />
                  <span>Reports</span>
                </label>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="form-group">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    value={startDate}
                    onChange={(event) => setstartDate({ startDate })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    value={endDate}
                    onChange={(event) => setendDate({ endDate })}
                    required
                  />
                </div>
              </div>

              <div className="text-end mb-5">
                <button className="btn btn-info fw-bold">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default App;

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
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const router = useRouter();
//   const {
//     query: { id, name },
//   } = router;
//   const pro = { id, name };

//   function sendProps() {
//     Router.push({
//       pathname: "./AddVitals",
//       query: {
//         id,
//       },
//     });
//   }
//   function addSymptoms() {
//     Router.push({
//       pathname: "./AddSymptoms",
//       query: {
//         id,
//       },
//     });
//   }
//   function prescribe() {
//     Router.push({
//       pathname: "../Prescribe",
//       query: {
//         id,
//       },
//     });
//   }

//   return (
//     <>
//       <div style={{ backgroundColor: "#ee6e73" }}>
//         <div className="row align-items-center ">
//           <div className="col-lg-2 mt-3 ">
//             <Link className="my-btn " href="/Login">
//               Logout
//             </Link>
//           </div>
//           <div className="col-8 col-md-12 text-center ">
//             <h4 className="text-center text-white">{pro.name}</h4>
//           </div>
//         </div>
//       </div>

//       {/* <MyTabs /> */}
//       <Box sx={{ width: "100%" }}>
//         <Tabs value={value} onChange={handleChange} aria-label="My tabs">
//           <Tab label="Vitals" id="tab-0" />
//           <Tab label="Symptoms" id="tab-1" />
//           <Tab label="Prescription" id="tab-2" />
//           <Tab label="Chat" id="tab-3" />
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
//                         <th className="fw-bold" scope="col">
//                           Temperature
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           BloodPressure
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           HeartRate
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Date
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {data.map((curElem) => {
//                         return (
//                           <tr key={curElem.VITID}>
//                             <td>{`${curElem.TEMPERATURE}`}</td>
//                             <td>{`${curElem.BLOODPRESSURE}`}</td>
//                             <td>{`${curElem.HEARTRATE}`}</td>
//                             <td>{`${curElem.VITDATE}`}</td>
//                           </tr>
//                         );
//                       })}
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
//                           DISEASE NAME
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
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {data1.map((curElem) => {
//                         return (
//                           <tr key={curElem.DISID}>
//                             <td>{`${curElem.NAME}`}</td>
//                             <td>{`${curElem.SYMPTOMS}`}</td>
//                             <td>{`${curElem.TREATMENT}`}</td>
//                             <td>{`${curElem.DATE}`}</td>
//                           </tr>
//                         );
//                       })}
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
//                           Medicine Type
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Medicine Name
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           Dozes
//                         </th>
//                         <th className="fw-bold" scope="col">
//                           DATE
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {data2.map((curElem) => {
//                         return (
//                           <tr key={curElem.PRID}>
//                             <td>{`${curElem.MEDTYPE}`}</td>
//                             <td>{`${curElem.MEDNAME}`}</td>
//                             <td>
//                               {`${curElem.MRNG}`}+{`${curElem.NOON}`}+
//                               {`${curElem.EVE}`}+{`${curElem.NIGHT}`}
//                             </td>
//                             <td>{`${curElem.DATE}`}</td>
//                           </tr>
//                         );
//                       })}
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
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const axios = require('axios');

const socket = io("http://localhost:5000");

function App(props) {
  const { children, value, index, ...other } = props;
  const router = useRouter();
  const { id, name } = router.query;
  console.log("roter", id,name);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [partner, setPartner] = useState(null);
  const [username, setUsername] = useState(null);

  const setNames =async (docID, patID) => {
    console.log("in get  id", docID, patID)
   await axios.request(`http://localhost:5000/chat?username1=${docID}&username2=${patID}`)
.then((response) => {
  console.log("ressss",JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
      }
      useEffect(() => {
        if (localStorage) {
          const docID = localStorage.getItem('docId')
          const patID = localStorage.getItem('patientId')
          setUsername(docID)
          setPartner(patID)
          setNames(docID,patID)
        }
        socket.on("message", ({ from, message, to }) => {
          console.log("message", message)
          console.log("partner", username, partner)
          // if(from == username && to == partner || from == partner && to == from){
            console.log("condition pass")
            setMessages((prevMessages) => [...prevMessages, { from, message }]);
            console.log("data", messages)
          // }
        });
      },[username,partner]);
  const handleSendMessage = () => {
    console.log("test", message, username, partner)
    if (message && username && partner) {
      console.log("in msg")
      socket.emit("message", { message, from: username, to: partner });
      // setMessages([...messages, { username, message }]);
      setMessage("");
    }
  };
  const handleChangeMessage=(e)=>{
    e.preventDefault();
    setMessage(e.target.value)
  }

  return (
    <div>
      <div id="messages">
        <input
          id="message"
          type="text"
          name="message"
          placeholder="Message"
          // value={message}
          onChange={(e)=>handleChangeMessage(e)}
        />
        <br />
        <br />
        <button onClick={handleSendMessage}>Send</button>
        <br />
        <br />
        {messages.map(({ from, message }, index) => (
          <div key={index}>
            <h5>{`${from}: ${message}`}</h5>
          </div>
        ))}
      </div>

      <div id="joined">
        {joinedUsers.map((user, index) => (
          <div key={index}>
            <h5>{`${user} has joined`}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;



// import { useRouter } from "next/router";
// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// const axios = require('axios');
// const socket = io("http://localhost:5000");

// function App(props) {

//   const router = useRouter();
//   const { id, name } = router.query;
//   console.log("roter", id,name);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [joinedUsers, setJoinedUsers] = useState([]);
//   const [partner, setPartner] = useState(null);
//   const [username, setUsername] = useState(null);

//   const setNames =async (docID, patID) => {
//     console.log("in get  id", docID, patID)
//    await axios.request(`http://localhost:5000/chat?username1=${docID}&username2=${patID}`)
// .then((response) => {
//   console.log("ressss",JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
//       }
//       useEffect(() => {
//         if (localStorage) {
//           const docID = localStorage.getItem('docId')
//           const patID = localStorage.getItem('patientId')
//           setUsername(docID)
//           setPartner(patID)
//           setNames(docID,patID)
//         }
//         socket.on("message", ({ from, message, to }) => {
//           console.log("userData", username, partner)
//       console.log("msg data",from, to, message)
//           if(from == username && to == partner || from == partner && to == from){
//             console.log("condition pass")
//             setMessages((prevMessages) => [...prevMessages, { from, message }]);
//             console.log("data", messages)
//           }
//         });
//       }, [username, partner]);
    
//   const handleSendMessage = () => {
//     console.log("test", message, username, partner)
//     if (message && username && partner) {
//       console.log("in msg")
//       socket.emit("message", { message, from: username, to: partner });
//       // setMessages([...messages, { username, message }]);
//       setMessage("");
//     }
//   };
//   const handleChangeMessage=(e)=>{
//     e.preventDefault();
//     setMessage(e.target.value)
//   }

//   return (
//     <div>
//       <div id="messages">
//         <input
//           id="message"
//           type="text"
//           name="message"
//           placeholder="Message"
//           // value={message}
//           onChange={(e)=>handleChangeMessage(e)}
//         />
//         <br />
//         <br />
//         <button onClick={handleSendMessage}>Send</button>
//         <br />
//         <br />
//         {messages.map(({ from, message }, index) => (
//           <div key={index}>
//             <h5>{`${from}: ${message}`}</h5>
//           </div>
//         ))}
//       </div>

//       <div id="joined">
//         {joinedUsers.map((user, index) => (
//           <div key={index}>
//             <h5>{`${user} has joined`}</h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



// import { useRouter } from "next/router";
// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// const axios = require("axios");

// const socket = io("http://localhost:5000");

// function App(props) {
//   const { children, value, index, ...other } = props;
//   const router = useRouter();
//   const { id, name } = router.query;
//   console.log("roter", id, name);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [joinedUsers, setJoinedUsers] = useState([]);
//   const [partner, setPartner] = useState(null);
//   const [username, setUsername] = useState(null);

//   const setNames = async (docID, patID) => {
//     console.log("in get  id", docID, patID);
//     await axios
//       .request(
//         `http://localhost:5000/chat?username1=${docID}&username2=${patID}`
//       )
//       .then((response) => {
//         console.log("ressss", JSON.stringify(response.data));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const [isMessageFetched, setIsMessagesFetched] = useState(false);

//   useEffect(() => {
//     if (localStorage) {
//       const docID = localStorage.getItem("docId");
//       const patID = localStorage.getItem("patientId");
//       setUsername(docID);
//       setPartner(patID);
//       setNames(docID, patID);
//     }
//     if (!isMessageFetched) {
//       setIsMessagesFetched(true);
//       socket.on("message", ({ from, message, to }) => {
//         console.log("Mujy Q nikala!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//         console.log("partner", username, partner);
//         // if(from == username && to == partner || from == partner && to == from){
//         console.log("condition pass");
//         setMessages((prevMessages) => [...prevMessages, { from, message }]);
//         console.log("data", messages);
//         // }
//       });
//     }
//   }, [username, partner]);

//   const handleSendMessage = () => {
//     console.log("test", message, username, partner);
//     if (message && username && partner) {
//       console.log("in msg");
//       socket.emit("message", { message, from: username, to: partner });
//       // setMessages([...messages, { username, message }]);
//       setMessage("");
//     }
//   };

//   const handleChangeMessage = (e) => {
//     e.preventDefault();
//     setMessage(e.target.value);
//   };

//   return (
//     <div>
//       <div id="messages">
//         <input
//           id="message"
//           type="text"
//           name="message"
//           placeholder="Message"
//           value={message}
//           onChange={(e) => handleChangeMessage(e)}
//         />
//         <br />
//         <br />
//         <button onClick={handleSendMessage}>Send</button>
//         <br />
//         <br />
//         {messages.map(({ from, message }, index) => (
//           <div key={index}>
//             <h5>{`${from}: ${message}`}</h5>
//           </div>
//         ))}
//       </div>

//       <div id="joined">
//         {joinedUsers.map((user, index) => (
//           <div key={index}>
//             <h5>{`${user} has joined`}</h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

//true wala
// import { useRouter } from "next/router";
// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import axios from "axios";

// const socket = io("http://localhost:5000");

// function App(props) {
//   const { children, value, index, ...other } = props;
//   const router = useRouter();
//   const { id, name } = router.query;
//   console.log("router", id, name);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [joinedUsers, setJoinedUsers] = useState([]);
//   const [partner, setPartner] = useState(null);
//   const [username, setUsername] = useState(null);

//   const setNames = async (docID, patID) => {
//     console.log("in get id", docID, patID);
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/chat?username1=${docID}&username2=${patID}`
//       );
//       console.log("response", JSON.stringify(response.data));
     
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   useEffect(() => {
//     if (localStorage) {
//       const docID = localStorage.getItem("docId");
//       const patID = localStorage.getItem("patientId");
//       setUsername(docID);
//       setPartner(patID);
//       setNames(docID, patID);

//       // Retrieve the messages from local storage
//       const storedMessages = localStorage.getItem(`messages_${docID}_${patID}`);
//       if (storedMessages) {
//         setMessages(JSON.parse(storedMessages));
//       }
//     }

//     socket.on("message", ({ from, message, to }) => {
//       console.log("message received", from, message, to, username, partner);
//       if (
//         (from === username && to === partner) ||
//         (from === partner && to === username)
//       ) {
//         console.log("condition pass");
//         setMessages((prevMessages) => [...prevMessages, { from, message }]);
//       }
//     });
//   }, [username, partner]);

//   // Save the messages in local storage whenever they change
//   useEffect(() => {
//     if (localStorage && username && partner) {
//       localStorage.setItem(`messages_${username}_${partner}`, JSON.stringify(messages));
//     }
//   }, [messages, username, partner]);

//   const handleSendMessage = () => {
//     console.log("test", message, username, partner);
//     if (message && username && partner) {
//       console.log("in msg");
//       socket.emit("message", { message, from: username, to: partner });
//       setMessage("");
//     }
//   };

//   const handleChangeMessage = (e) => {
//     e.preventDefault();
//     setMessage(e.target.value);
//   };


//   return (
//         <div>
//           <div id="messages">
//             <input
//               id="message"
//               type="text"
//               name="message"
//               placeholder="Message"
//               value={message}
//               onChange={(e) => handleChangeMessage(e)}
//             />
//             <br />
//             <br />
//             <button onClick={handleSendMessage}>Send</button>
//             <br />
//             <br />
//             {messages.map(({ from, message }, index) => (
              
//               <div key={index}>
//                 <h5>{`${from}: ${message}`}</h5>
//               </div>
              
//             ))}
            
    
//           </div>
    
//           <div id="joined">
//             {joinedUsers.map((user, index) => (
//               <div key={index}>
//                 <h5>{`${user} has joined`}</h5>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     }
    
//      export default App;
    ///this using//
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";



function App(props) {
  const { children, value, index, ...other } = props;
  const router = useRouter();
  const { id, name,patid,dbname } = router.query;
  console.log("router", id, name);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [partner, setPartner] = useState(null);
  const [username, setUsername] = useState(null);
  const messagesEndRef = useRef(null);
  const chatEndRef = useRef(null);
  const scrollRef = useRef(null);
  const [msg,setmsg]=useState('');
  const [msgarr,setmsgarr]=useState([]);
  const [allMsg,setAllMsg] = useState([])
  const [renderState,setRenderState]=useState(0);
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');

  const [searchTerm, setSearchTerm] = useState("");

  
const [searchResults, setSearchResults] = useState([]);
const [searchNotFound, setSearchNotFound] = useState(false);
 

  const generateRSAKeyPair = () => {
    
    const p = getPrimeNumber();
    const q = getPrimeNumber();
 
    const n = p * q;
   
 
    const phi = (p - 1) * (q - 1);

    const e = 65537;
    
    const d = modularInverse(e, phi);
    const publicKey1 = { n, e };

    const privateKey1 = { n, d };
   
  console.log(' Public key     n   '+n+'  e   '+e);
  console.log('Private key      n   '+n+'  d   '+d);
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
  
    
    const unicodeValues = message.split('').map(char => char.charCodeAt(0));
    const encryptedValues = unicodeValues.map(value => modularExponentiation(value,e,n));
  
    return encryptedValues;
  };
  const decryptRSA = (encryptedValues, privateKey) => {
    const { n, d } = privateKey;
  
    
    const decryptedValues = encryptedValues.map(value => modularExponentiation(value, d, n));

    const decryptedMessage = decryptedValues.map(value => String.fromCharCode(value)).join('');
  
     return decryptedMessage;
        
  }
  
 
  const getPrimeNumber = () => {
    const isPrime = num => {
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
      prime = Math.floor(Math.random() * 100) + 1; 
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
      throw new Error('Modular inverse does not exist.');
    }
    return (x % m + m) % m; 
  };

    useEffect(()=>{
      getchat();
    },[renderState])
    
    useEffect(()=>{
      let x = renderState
      x = x+1
      setTimeout(()=>{
      setRenderState(x)
    
        console.log('i am in');
      },5000)
    },[msgarr])

    const handleChangeMessage = (e) => {
      e.preventDefault();
    setmsg(e.target.value);
    };
    const addchat = async () => {
      let n = dbname + "Chat";
      let w= getTimeWithAmPm();
      try {
        if (msg == "") {
          // toast('Plz type message');
        } else {
          const { publicKey1, privateKey1 } = generateRSAKeyPair();
          let m=encryptRSA(msg,publicKey1);
          let y=m.toString();
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
                from: patid,
                to: id,
                msg:msg,
                time:w,
                type:"Text",
                n:publicKey1.n,
                ek:publicKey1.e,
                pk:privateKey1.d,
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
          to: patid,
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
          msgs: arr1[2],//decryptedMessage,
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

  
  useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  
      // Scroll to the latest message when the component loads or messages change
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgarr]);



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
        let w= getTimeWithAmPm();
        const formData = new FormData();
        formData.append("name", n);
        formData.append("from", patid);
        formData.append("to", id);
        formData.append("time", w);
        
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

    const handleSearchSubmit = () => {
      const filteredResults = msgarr.filter((data) =>
        data.msgs.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      if (filteredResults.length > 0) {
        setSearchResults(filteredResults);
        setSearchNotFound(false);
    
        // Scroll to the first search result
        const firstSearchResultIndex = msgarr.findIndex(
          (data) => data === filteredResults[0]
        );
        scrollToMessage(firstSearchResultIndex);
      } else {
        setSearchResults([]);
        setSearchNotFound(true);
      }
    };
   
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    // Function to scroll to the searched message
    const scrollToMessage = () => {
      
      const index = msgarr.findIndex(
        (data) => data.msgs.toLowerCase() === searchTerm.toLowerCase()
      );
      if (index !== -1) {
        const element = document.getElementById(`message-${index}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        alert("Message not found");
      }
    };


//   return (


    
//     <div>
//      <div
//         className="p-2 pb-0 pt-0 mt-0"
//         style={{ backgroundColor: "#D4F1F4" }}
//       >
//         <div className="container">
//           <div className="row text-center align-items-center">
//             <div className="col-lg-9 col-md-6 col-6">
//               <h3 className="fw-bold text-capitalize">Doctor {name}</h3>
//             </div>
           
//           </div>
//         </div>
//       </div>
      
//       <div id="messages" style={{ overflowY: "scroll", height: "450px" }}>
//         {msgarr.map((data, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent: data.did === patid ? " flex-start" : "flex-end",
//               marginBottom: "10px",
//             }}
//           >
//          {data.type==="Text"&&(
//             <div
//               style={{
//                 backgroundColor:
//                   data.did === patid    ? "lightblue" : "lightgreen",
//                 padding: "10px",
//                 borderRadius: "10px",
//                 maxWidth: "fit-content",
//               }}
//             >
//               <p style={{ margin: 0 }}>{data.msgs}</p>
              
              
//             </div>
//           )}
//            { data.type==="audio"&& (
            
//               <div
//               style={{
//                 backgroundColor:
//                   data.did === patid    ? "lightblue" : "lightgreen",
//                 padding: "10px",
//                 borderRadius: "10px",
//                 maxWidth: "fit-content",
//               }}
//             >
//               <audio  controls   >
//             <source src={baseUrl+data.msgs} type="audio/wav" />
           
//           </audio>
      
           
              
//             </div>
//             )}
//           </div>
//         ))}
        
//         <div ref={messagesEndRef}></div>{" "}
//         {/* add a ref to the end of the messages */}
//       </div>

//       <div className="d-flex p-2 align-items-center">
//         <input  className="msg-tab"
//           id="message"
//           type="text"
//           name="message"
//           placeholder="Message"
//           value={msg}
//           onChange={(e) => handleChangeMessage(e)}
//         />


// <div className="d-flex p-2 align-items-center">
//       <div>
//         {recording ? (
//           // <p>Recording is in progress...</p>
//           <audio ref={audioRef} controls />
//         ) : (
//           <p></p>
//         )}
//       </div>
    
//   <div className="d-flex p-2 align-items-center">
    
//       <svg
//         onClick={handleStartRecording}
//         xmlns="http://www.w3.org/2000/svg"
//         width="30"
//         height="30"
//         fill={recording ? 'red' : 'currentColor'}
//         className="bi bi-mic-fill"
//         viewBox="0 0 16 16"
//       >
//         <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
//         <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
//       </svg>
  
      
//  <svg  onClick={handleStopRecording} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-stop-circle" viewBox="0 0 16 16">
//   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//   <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
// </svg>
    
//  </div>
     
//       {/* <audio ref={audioRef} controls /> */}
//       <audio ref={audioRef} controls={false} />
//    </div>


//    <div className="text-end px-3">
//           <button
//             onClick={() => {
//               if(audioBlob){
//                 saveAudio();
//               }else if(msg!=''){
//               addchat();
//               }else if(audioBlob==null || msg==''){
//                 alert('Type a message or record the mesage');
//               }
//               getchat();
//               setmsg("");
              
//             }}
//             className="btn btn-info fw-bold"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
  
// );



return (
  <div>
    <div className="p-2 pb-0 pt-0 mt-0" style={{ backgroundColor: "#D4F1F4" }}>
      <div className="container">
        <div className="row text-center align-items-center">
          <div className="col-lg-9 col-md-6 col-6">
            <h3 className="fw-bold text-capitalize">Doctor {name}</h3>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
        onClick={handleSearchSubmit}
        className="btn btn-primary"
        style={{ marginLeft: "10px" }}
      >
        Search
      </button>
          </div> */}
        </div>
      </div>
    </div>

    <div id="messages" style={{ overflowY: "scroll", height: "450px" }}>
      {msgarr.map((data, index) => (
        <div
          key={index}
          id={`message-${index}`}
          style={{
            display: "flex",
            justifyContent:
              data.did === patid ? " flex-start" : "flex-end",
            marginBottom: "10px",
          }}
        >
          {data.type === "Text" && (
            <div
              style={{
                backgroundColor:
                  data.did === patid ? "lightblue" : "lightgreen",
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "fit-content",
              }}
            >
              <p style={{ margin: 0 }}>{data.msgs}</p>
            </div>
          )}
          {data.type === "audio" && (
            <div
              style={{
                backgroundColor:
                  data.did === patid ? "lightblue" : "lightgreen",
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "fit-content",
              }}
            >
              <audio controls>
                <source src={baseUrl + data.msgs} type="audio/wav" />
              </audio>
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef}></div>{" "}
      {/* add a ref to the end of the messages */}
    </div>

    <div className="d-flex p-2 align-items-center">
        <input  className="msg-tab"
          id="message"
          type="text"
          name="message"
          placeholder="Message"
          value={msg}
          onChange={(e) => handleChangeMessage(e)}
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
    </div>
  
);



}

export default App;


// import { useRouter } from "next/router";
// import React, { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";
// import axios from "axios";
// // import CryptoJS from "crypto-js";

// const socket = io("http://localhost:5000");

// function App(props) {
//   const { children, value, index, ...other } = props;
//   const router = useRouter();
//   const { id, name } = router.query;
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [partner, setPartner] = useState(null);
//   const [username, setUsername] = useState(null);
//   const messagesEndRef = useRef(null);
//   // const secretKey = "2"; // Replace with your own secret key

//   const setNames = async (docID, patID) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/chat?username1=${docID}&username2=${patID}`
//       );
//       console.log("response", response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (localStorage) {
//       const docID = localStorage.getItem("docId");
//       const patID = localStorage.getItem("patientId");
//       setUsername(docID);
//       setPartner(patID);
//       setNames(docID, patID);

//       // Retrieve the messages from the server
//       const fetchMessages = async () => {
//         try {
//           const response = await axios.get(
//             `http://localhost:5000/messages?username1=${docID}&username2=${patID}`
//           );
//           // const decryptedMessages = response.data.map((msg) => ({
//           //   ...msg,
//           //   message: decryptMessage(msg.message),
//           // }));
//           setMessages(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//       fetchMessages();
//     }

//     socket.on("message", (newMessages) => {
//       if (Array.isArray(newMessages)) {
//       const filteredMessages = newMessages.filter(
//         ({ from, to }) =>
//           (from === username && to === partner) ||
//           (from === partner && to === username)
//       );
      
//       setMessages((prevMessages) => [...prevMessages, ...filteredMessages]);
//     }
//     });
//   }, [username, partner]);
// // const decryptedMessages = filteredMessages.map((msg) => ({
//       //   ...msg,
//       //   message: decryptMessage(msg.message),
//       // }));
//   useEffect(() => {
//     if (localStorage && username && partner) {
//       localStorage.setItem(
//         `messages_${username}_${partner}`,
//         JSON.stringify(messages)
//       );
//     }

//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, username, partner]);

//   const handleSendMessage = () => {
//     if (message && username && partner) {
//       // const encryptedMessage = encryptMessage(message);
//       socket.emit("message", { message, from: username, to: partner});
//       setMessage("");
//     }
//   };

//   const handleChangeMessage = (e) => {
//     e.preventDefault();
//     setMessage(e.target.value);
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // const encryptMessage = (message) => {
//   //   return CryptoJS.AES.encrypt(message, secretKey).toString();
//   // };

//   // const decryptMessage = (encryptedMessage, secretKey) => {
//   //   const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
//   //   const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
//   //   return decryptedMessage;
//   // };
//   return (
//     <div>
//       <div id="messages" style={{ overflowY: "scroll", height: "450px" }}>
//         {messages.map(({ from, message }, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent: from === username ? "flex-end" : "flex-start",
//               marginBottom: "10px",
//             }}
//           >
//             <div
//               style={{
//                 backgroundColor: from === username ? "lightblue" : "lightgreen",
//                 padding: "10px",
//                 borderRadius: "10px",
//                 maxWidth: "fit-content",
//               }}
//             >
//               <p style={{ margin: 0 }}>{message}</p>
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef}></div>
//       </div>
//       <div className="d-flex p-3 mt-3">
//         <input
//           id="message"
//           type="text"
//           name="message"
//           placeholder="Message"
//           value={message}
//           onChange={(e) => handleChangeMessage(e)}
//         />
//         <div className="text-end px-3">
//           <button onClick={handleSendMessage} className="btn btn-info fw-bold">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// import { useRouter } from "next/router";
// import React, { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";
// import axios from "axios";

// const socket = io("http://localhost:5000");

// function App() {
//   const router = useRouter();
//   const { id, name } = router.query;
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [partner, setPartner] = useState(null);
//   const [username, setUsername] = useState(null);
//   const messagesEndRef = useRef(null);

//   const setNames = async (docID, patID) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/chat?username1=${docID}&username2=${patID}`
//       );
//       console.log("response", response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (localStorage) {
//       const docID = localStorage.getItem("docId");
//       const patID = localStorage.getItem("patientId");
//       setUsername(docID);
//       setPartner(patID);
//       setNames(docID, patID);

//       // Retrieve the messages from the server
//       const fetchMessages = async () => {
//         try {
//           const response = await axios.get(
//             `http://localhost:5000/messages?username1=${docID}&username2=${patID}`
//           );
//           setMessages(response.data);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       fetchMessages();
//     }

//     socket.on("message", ({ from, message, to }) => {
//       if (
//         (from === username && to === partner) ||
//         (from === partner && to === username)
//       ) {
//         setMessages((prevMessages) => [...prevMessages, { from, message }]);
//       }
//     });
//   }, [username, partner]);

//   useEffect(() => {
//     if (localStorage && username && partner) {
//       localStorage.setItem(
//         `messages_${username}_${partner}`,
//         JSON.stringify(messages)
//       );
//     }

//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, username, partner]);

//   const handleSendMessage = () => {
//     if (message && username && partner) {
//       socket.emit("message", { message, from: username, to: partner });
//       setMessage("");
//     }
//   };

//   const handleChangeMessage = (e) => {
//     setMessage(e.target.value);
//   };

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <div>
//       <div id="messages" style={{ overflowY: "scroll", height: "450px" }}>
//         {messages.map(({ from, message }, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent: from === username ? "flex-end" : "flex-start",
//               marginBottom: "10px",
//             }}
//           >
//             <div
//               style={{
//                 backgroundColor: from === username ? "lightblue" : "lightgreen",
//                 padding: "10px",
//                 borderRadius: "10px",
//                 maxWidth: "fit-content",
//               }}
//             >
//               <p style={{ margin: 0 }}>{message}</p>
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef}></div>
//       </div>
//       <div className="d-flex p-3 mt-3">
//         <input
//           id="message"
//           type="text"
//           name="message"
//           placeholder="Message"
//           value={message}
//           onChange={(e) => handleChangeMessage(e)}
//         />
//         <div className="text-end px-3">
//           <button onClick={handleSendMessage} className="btn btn-info fw-bold">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
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
          console.log("partner", message,username, partner)
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
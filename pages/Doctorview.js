import { padding } from "@mui/system";
import Link from "next/link";
import Router from "next/router";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItemButton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { useAuth } from "./AuthContext";

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `http://localhost/NewProject/api/Doctor/GetAllPatients?id=`+pro[0]
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

const doctorview = ({ data }) => {
  const [array, setarray] = useState([]);
  const [count, setcount] = useState('');

  const router = useRouter();
  const { id, name } = router.query;
  let dbname = name + id;
  let docid = id;
  let docname = name;
  

  // console.log(typeof(pro)+' hy');
  const getpatient = async () => {
    const response = await fetch(
      "http://localhost/NewProject/api/Patient/getpatient",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    // console.log(response+'    joijoijoiji');
    let data = await response.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split(",");
        arr2.push({ PATID: arr1[0], NAME: arr1[1] });
      }
      setarray(arr2);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };
  const getcount = async () => {
    const response = await fetch(
      "http://localhost/NewProject/api/Refer/getnotification",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    // console.log(response+'    joijoijoiji');
    let data = await response.json();

    if (data) {
    
      setcount(data);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };

  function sendProps(id, name) {
    localStorage.setItem("patientId", id);
    Router.push({
      pathname: "./Doctorchat",
      query: {
        id,
        name,
        dbname,
        docid,
        docname,
      },
    });
  }
  function AddPatient() {
    Router.push({
      pathname: "./Addpatient",
      query: {
        id,
        name,
      },
    });
  }
  function getNotification() {
    
    Router.push({
      pathname: "./GetNotification",
      query: {
       
        docid,
      },
    });
  }
  useEffect(() => {
   
    getcount();
  }, []);

  useEffect(() => {
    // setpatarr([]);
    getpatient();
  }, [id]);
  // console.log(id);
  return (
    <>
      <nav>
        <div className="row align-items-center ">
          <div className=" col-lg-4  col-4">
            <Link className="my-btn" href="/Login">
              Logout
            </Link>
          </div>
          <div className="col-lg-4   col-4 d-flex text-center">
            <h3>Patient List</h3>
            <text className="positon-absolute" style={{position:'top'}}> {count}</text>
            <svg
            onClick={() => getNotification()}
            style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
  
          {/* <div className="col-lg-4  col-4 text-end  pr-3">
            <svg
              onClick={() => AddPatient()}
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div> */}
        </div>
      </nav>

      <div>
        <div className="container ">
          <div className="row">
            {array.map((curElem) => {
              return (
                <div
                  key={curElem.PATID}
                  className="col-lg-4 mb-3"
                  onClick={() => sendProps(curElem.PATID, curElem.NAME)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="mt-5 center-align h-100 shadow-lg p-3 bg-white rounded mx-2">
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
                    <div>
                      <p>
                        Patient ID : <span>{curElem.PATID}</span>
                      </p>
                      <h4>
                        {" "}
                        <span>{curElem.NAME}</span>
                      </h4>

                      {/* <ListItemButton onClick={() => sendProps(curElem.PATID)} >

                    <ListItemText primary={curElem.PATID} />
                    <ListItemText primary={curElem.NAME} />
                  </ListItemButton> */}
                      {/* <li> {curElem.PATID} {curElem.NAME}</li> */}
                    </div>
                  </div>
                </div>
              );
            })}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default doctorview;

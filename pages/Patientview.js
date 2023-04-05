import { padding } from "@mui/system";
import Link from "next/link";
import Router from "next/router";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItemButton } from "@mui/material";

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost/NewProject/api/Doctor/GetAllDoctors`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const patientview = ({ data }) => {
  const id = data.DOCID;

  const sendProps=(id, name) =>{
   
  
  localStorage.setItem('patientId', id);
    Router.push({
      pathname: "./Patientchat", 
      query: {
        "id":id,
        "name":name, 
      },
    });
  }
  function AddPatient() {
    Router.push({
      pathname: "./Addpatient",
    });
  }
  
  // console.log(id);
  return (
    <>
      <nav>
        <div className="row align-items-center">
        <div className="col-lg-4 ">
          <Link className="my-btn" href="/Login">
              Logout
            </Link>
          </div>
          <div className="col-lg-4 text-center">
            <h3> PATIENT View</h3>
          </div>
          
          
          <div className="col-lg-4 text-end px-5">
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
          </div>
        </div>
      </nav>

      <div>
        <div className="container ">
          <div className="row">
            {data.map((curElem) => {
              return (
                <div
                  key={curElem.DOCID}
                  className="col-lg-4 mb-3"
                  onClick={() => sendProps(curElem.DOCID, curElem.NAME)}
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
                        DOCTOR ID : <span>{curElem.DOCID}</span>
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
export default patientview;

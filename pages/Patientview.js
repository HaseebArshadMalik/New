import { padding } from "@mui/system";
import Link from "next/link";
import Router from "next/router";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItemButton } from "@mui/material";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `http://localhost/NewProject/api/Doctor/GetAllDoctors`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

const patientview = ({ data }) => {
  // const id = data.DOCID;
  const [array, setarray] = useState([]);
  const router = useRouter();
    const { id, name } = router.query;
    let patid=id;
  const getdoctor = async () => {

    const response = await fetch(
      'http://localhost/NewProject/api/Doctor/getdoctor', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:id,
      }),
    }
    );
    
    let data = await response.json();
    
    
    if (data) {
      let arr2=[];
      for(let i=0;i<data.length;i++){
      
       let arr1=data[i].split(',');
       arr2.push({PATID:arr1[0],PNAME:arr1[1],NAME:arr1[2],DOCID:arr1[3]})
      }
      setarray(arr2)
     for(let i=0;i<array.length;i++){
      console.log(array[i].ptid);
     }
      
    //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    } 
}

  const sendProps=(id, name) =>{
   
  
  localStorage.setItem('patientId', id);
    Router.push({
      pathname: "./Patientchat", 
      query: {
        "id":id,
        "name":name, 
        dbname:name+id,
        patid,
      },
    });
  }
  useEffect(()=>{

    // setpatarr([]);
     getdoctor();
    },[id]);
  
  return (
    <>
      <nav>
        <div className="row align-items-center">
        <div className="col-lg-4 col-sm-4 col-md-4">
          <Link className="my-btn" href="/Loginpatient">
              Logout
            </Link>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-2 text-center">
            <h3>Doctor List </h3>
          </div>
          
        </div>
      </nav>

      <div>
        <div className="container ">
          <div className="row">
            {array.map((curElem) => {
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

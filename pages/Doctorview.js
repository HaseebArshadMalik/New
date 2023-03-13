import { padding } from "@mui/system";
import Link from "next/link";
import Router from "next/router";
import Topnav from "../components/topnav";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from "@mui/material";
import MyTabs from "../components/tabs"






export const getStaticProps=async()=>{
 

  const res=await fetch(`http://localhost/NewProject/api/Doctor/GetAllPatients`);
  const data =await res.json();
  return{
    props:{
      data,
    },
  };
};



const doctorview = ({data}) => {
  const id=data.PATID;

  function sendProps(id){
    Router.push({
      pathname:'./Doctorchat',
      query: {
     id
      }
    
    })
    
    }
  // console.log(id);
  return (
    <>
    
      <Topnav />
      <div >
     <ul >  
      {data.map((curElem)=>{
        return(
          <div key={curElem.PATID} className="card center-align " > 
          <ListItemButton onClick={()=>sendProps(curElem.PATID)} > 
          
        <ListItemText primary={curElem.PATID} />
        <ListItemText primary={curElem.NAME} />
      </ListItemButton>
             {/* <li> {curElem.PATID} {curElem.NAME}</li> */}
            
          </div>
        )
      })}
           
           </ul>
           </div>
    </>
  );
};
export default doctorview;

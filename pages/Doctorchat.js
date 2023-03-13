import MyTabs from "../components/tabs"
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from "@mui/material";
import { useRouter } from "next/router";
import { Tabs, Tab, Box } from '@mui/material';
import { useState } from "react";
import TopNavVitals from "imports/components/TopNavVitals";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


export const getStaticProps=async()=>{
const res=await fetch(`http://localhost/NewProject/api/Doctor/GetAllVital`);
const data =await res.json();
return{
  props:{
    data,
  },
};
};


const tabs=({data})=>
{
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const router=useRouter()
const{
  query:{id},
}=router
const pro={ id}
    return(
   <>
   <nav>
    <div className="nav-wrapper">
    <h4 className="brand-logo center">Patient Id {pro.id}  Chat</h4>
    </div>
   </nav>
   {/* <MyTabs /> */}
   <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="My tabs" >
        <Tab label="Vitals" id="tab-0" />
        <Tab label="Procedure" id="tab-1" />
        <Tab label="Medicine" id="tab-2" />
      </Tabs>
      <TabPanel value={value} index={0}>
        
       <TopNavVitals/>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        Procedure
      </TabPanel>
      <TabPanel value={value} index={2}>
        Medicine
      </TabPanel>
    </Box>




   <div >
     <ul >  
      {data.map((curElem)=>{
        return(
          <div key={curElem.VITID} className="card center-align " > 
          <ListItemButton  href='./Doctorchat'> 
        <ListItemText   primary={`Temperature:${curElem.TEMPERATURE}`} />
       
        <ListItemText primary={`BloodPressure:${curElem.BLOODPRESSURE}`} />
      
        <ListItemText primary={`HeartRate:${curElem.HEARTRATE}`} />
        <text></text>
        <ListItemText primary={`Date:${curElem.VITDATE}`} />
      </ListItemButton>
             {/* <li> {curElem.PATID} {curElem.NAME}</li> */}
            
          </div>
        )
      })}
           
           </ul>
           </div>
 
   </>
    )
}
export default  tabs;
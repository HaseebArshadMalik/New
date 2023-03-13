
import { Tabs, Tab, Box } from '@mui/material';
import { useState } from "react";
import TopNavVitals from './TopNavVitals';

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

export default function MyTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
  );
}


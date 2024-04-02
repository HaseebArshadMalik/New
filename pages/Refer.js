import Link from "next/link";
import { useState, useEffect } from "react";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import Router from "next/router";
const Refer = () => {
  const [patId, setid] = useState("");
  const [vitto, setvitto] = useState("");
  const [vitfrom, setvitfrom] = useState("");
  const [disto, setdisto] = useState("");
  const [disfrom, setdisfrom] = useState("");
  const [presto, setpresto] = useState("");
  const [presfrom, setpresfrom] = useState("");
  const [repto, setrepto] = useState("");
  const [repfrom, setrepfrom] = useState("");
  const [docnamearray, setdocnamearray] = useState([]);
  const [docidarray, setdocidarray] = useState([]);
  const [docid, setdocid] = useState("");
  const [docname, setdocname] = useState("");

  const router = useRouter();
  const { id, name, vitdate, disdate, presdate,repdate, doctorid, dbname, doctorname } =
    router.query;
  const parsedVitdate = vitdate ? JSON.parse(vitdate) : [];
  const parsedDisdate = disdate ? JSON.parse(disdate) : [];
  const parsedPresdate = presdate ? JSON.parse(presdate) : [];
  const parsedRepdate = repdate ? JSON.parse(repdate) : [];
  const [showVitals, setShowVitals] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showPrescription, setShowPrescription] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [AllVitals, setAllVitals] = useState(false);
  const [AllPrescription, setAllPrescription] = useState(false);
  const [AllHistory, setAllHistory] = useState(false);
  const [AllReport, setAllReport] = useState(false);
  console.log(doctorname);

  const setdoctor = (event) => {
    // Alert.alert(typeof(itemvalue)+'   values    '+itemvalue)

    let n = "";
    for (let i = 0; i < docnamearray.length; i++) {
      if (docnamearray[i] == event.target.value) {
        n = docidarray[i];
      }
    }

    setdocid(n);
    setdocname(event.target.value);
    console.log(docname);
  };
  const sendpatient = async () => {
  let v='Vitals';
  let d='Disease';
  let p='Prescription';
  let r='Report';
    //let n=dnam+did;

    if(AllVitals){
      setvitfrom('')
      setvitto('')
    }
    if(AllHistory){
      setdisfrom('')
      setdisto('')
    }
    if(AllPrescription){
      setpresfrom('')
      setpresto('')
    }
    if(AllReport){
      setrepfrom('')
      setrepto('')
    }
    if(disfrom!='' && disto!=''){
      setAllHistory(false)
    }
    if(vitfrom!='' && vitto!=''){
      setAllVitals(false)
    }
    if(presfrom!='' && presto!=''){
      setAllPrescription(false)
    }
    if(repfrom!='' && repto!=''){
      setAllReport(false)
    }
    if(showVitals==false){
      setAllVitals(false);
      setvitfrom('');
      setvitto('');
    }
    if(showHistory==false){
      setAllHistory(false);
      setdisfrom('');
      setdisto('');
    }
    if(showPrescription==false){
      setAllPrescription(false);
      setpresfrom('');
      setpresto('');
    }
    if(showReport==false){
      setAllReport(false);
      setrepfrom('');
      setrepto('');
    }
    const response = await fetch(
      "http://localhost/NewProject/api/Example/checkfile",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dbname,
           v,
           vfrom:vitto,
           vto:vitfrom,
           vall:AllVitals,
           d,
           dfrom:disto,
           dto:disfrom,
           dall:AllHistory,
           p,
           pfrom:presto,
           pto:presfrom,
           pall:AllPrescription,
           r,
           rfrom:repto,
           rto:repfrom,
           rall:AllReport,
          patid: id,
          docid: docid,
          docname:docname,
          patname:name,
          senderid:doctorid,
          sendername:doctorname
        }),
      }
    );
    console.log(response);
    let data = await response.json();
    if (data) {
      //setpatres(data.toString());
    }
  };
 
  
  
  const getdoctors = async () => {
    try {
      const response = await fetch(
        "http://localhost/NewProject/api/Doctor/getdoctors",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: doctorid,
          }),
        }
      );
      let temp = [];

      let data = await response.json();
      if (data) {
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];

        for (let i = 0; i < data.length; i++) {
          arr1 = data[i].split(",");

          arr2.push(arr1[0]);
          arr3.push(arr1[1]);
        }
        setdocidarray(arr2);
        setdocnamearray(arr3);

        console.log("Called");
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  const senddata=()=>{

    let a=setdata();
    if(a==false){
      sendpatient();
      Router.push({
        pathname: "./Doctorchat",
        query: {
          id,
          name,
          vitdate: JSON.stringify(vitdate),
          disdate: JSON.stringify(disdate),
          presdate: JSON.stringify(presdate),
          repdate:  JSON.stringify(repdate),
          dbname,
          docid: doctorid,
          docname: doctorname,
        },
      });
    }
  }
  const setdata1 = () => {

    let a=false;
    if(docname=='')
    {
      alert('DocName is missing')
    }
    if(showVitals && AllVitals){
      setvitfrom('');
      setvitto('');

     }else  if(showVitals && !AllVitals && vitfrom=='' || vitto==''){
      alert('Plz select from and to date vitals');
      a=true;
     
     }

     if(showHistory && AllHistory){
      setdisfrom('');
      setdisto('');

     }else  if(showHistory && !AllHistory && disfrom=='' || disto==''){
      alert('Plz select from and to date of History');
      a=true;
   
     }

    //  if(repocheck && repoallcheck){
    //   setreportfrom('');
    //   setrepoto('');

    //  }else  if(repocheck && !repoallcheck && repofrom=='' || repoto==''){
    //   Alert.alert('Plz select from and to date of reports');
    //    a=true;
    //   return a;
    //  }

     if(showPrescription && AllPrescription){
      setpresfrom('');
      setpresto('');

     }else  if(showPrescription && !AllPrescription && presfrom=='' || presto==''){
     alert('Plz select from and to date of prescription');
       a=true;
    
     }
     return a;
    // if (docname == "") {
    //   alert("DocName is missing");
    // }else if (showVitals == false && showHistory==false && showPrescription==false) {
    //   alert("Please select one of these");
    // }
    // else if ( showVitals== true && vitfrom == "" && vitto == "") {
    //   alert("Vitdate is missing");
    // } else if ( showHistory== true && disfrom == "" && disto == "") {
    //   alert("Historydate is missing");
    // } else if (showPrescription == true && presfrom == "" && presto == "") {
    //   alert(" Precription date is missing");
    // } else if (vitto > vitfrom) {
    //   alert("Plz select Vital start date less than from Date");
    // } else if (disto > disfrom) {
    //   alert("Plz select Disease start date less than from Date");
    // } else if (presto > presfrom) {
    //   alert("Plz select Prescription start date less than from Date");
    // } else {
    //   sendpatient();
    //   // senddisease();
    //   // sendpres();
    //   // sendvitals();
    //   // referpat();
    //   Router.push({
    //     pathname: "./Doctorchat",
    //     query: {
    //       id,
    //       name,
    //       vitdate: JSON.stringify(vitdate),
    //       disdate: JSON.stringify(disdate),
    //       presdate: JSON.stringify(presdate),
          // repdate:  JSON.stringify(repdate),
    //       dbname,
    //       docid: doctorid,
    //       docname: doctorname,
    //     },
    //   });
    //   //   if(presres==='Done' && vitrespon==='Done' && disres==='Done' && refres==='Done' ){
    //   //     Alert.alert('Patient Refered Sucessfully')
    //   //   }
    // }
  };

  const setdata=()=>{
    
     let a=false;
    if(docname=='')
    {
      alert('DocName is missing')
      a=true;
    }
  
    if(showVitals && AllVitals && vitfrom!='' && vitto!=''){
      alert('Plz select Vital dates or All Vitals')
      a=true;
     }
       else if(showVitals && !AllVitals && vitfrom=='' && vitto==''){
       alert('Plz select vitals ')
       a=true;
      }else if(!AllVitals && vitfrom<vitto){
       alert('Plz select Vitals from date is less than  or equal to date');
        a=true;
      }
      
     
  
     if(showHistory && AllHistory && disfrom!='' && disto!=''){
     alert('Plz select Disease dates or All Disease')
      a=true;
     }else if( showHistory && !AllHistory && disfrom=='' &&  disto==''){
      alert('Plz select Disease');
      a=true;
     }else if(showHistory && !AllHistory && disfrom<disto){
      alert('Plz select Disease from date is less than  or equal to date');
      a=true;
    }
    
    if(showReport && AllReport && repfrom!='' && repto!=''){
      alert('Plz select Reports dates or All Reports')
      a=true;
     }else if( showReport && !AllReport && repfrom=='' &&  repto==''){
      alert('Plz select Reports');
      a=true;
     }else if(showReport && !AllReport && repofrom<repoto){
      alert('Plz select Reports from date is less than  or equal to date');
      a=true;
    }

     
      if(showPrescription && AllPrescription &&presfrom!='' && presto!=''){
       alert('Plz select Prescription dates or All Prescription')
       a=true;
      }else if(showPrescription && !AllPrescription && presfrom=='' && presto==''){
      alert('Plz select Prescription dates ');
       a=true;
      }else if(showPrescription && !AllPrescription && presfrom<presto){
        alert('Plz select presc from date is less than  or equal to date');
        a=true;
      }
    
     if(!showVitals && !showHistory && !showPrescription && !showReport) {
      alert('Plz select any one in the given below');
      a=true;
     }
   
     return a;
    }
  useEffect(() => {
    getdoctors();
  }, []);
  useEffect(() => {
    //   Alert.alert(`${docname} jkl ${docid}`);
  }, [docname, docid]);

  const handlevitalsChangeto = (event) => {
    setvitto(event.target.value);
  };

  const handlevitalsChangefrom = (event) => {
    setvitfrom(event.target.value);
  };
  const handledisChangeto = (event) => {
    setdisto(event.target.value);
  };
  const handledisChangefrom = (event) => {
    setdisfrom(event.target.value);
  };
  const handlepresChangeto = (event) => {
    setpresto(event.target.value);
  };
  const handlepresChangefrom = (event) => {
    setpresfrom(event.target.value);
  };
  const handlerepChangefrom = (event) => {
    setrepfrom(event.target.value);
  };
  const handlerepChangeto = (event) => {
    setrepto(event.target.value);
  };
  const handledoctorChange = (event) => {
    setdoctorchange(event.target.value);
  };
  //   const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <div className="position-absolute w-100 " style={{ top: "3rem" }}>
      <div className="container bg-light shadow" id="report">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div>
              <label htmlFor="docName">Select Doctor</label>
              <select
                id="datefilter"
                className="form-select"
                value={docname}
                onChange={setdoctor}
                aria-label="Default select example"
              >
                {docnamearray.map((item, index) => {
                  return (
                    <option value={`${item}`} key={index}>{`${item}`}</option>
                  );
                })}
                ;
              </select>
            </div>
            <div>
              <h3>What to Send:</h3>
            </div>
            <div className="col-sm-4 col-md-6 mt-3">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={showVitals}
                  onChange={() => setShowVitals(!showVitals)}
                />
                <span>Vitals</span>
              </label>
            </div>

            <div className="d-flex justify-content-evenly">
              {showVitals && (
                <>
                <div className=" mt-3">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={AllVitals}
                  onChange={() => setAllVitals(!AllVitals)}
                />
                <span>All</span>
              </label>
            </div>
                  <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                    <label htmlFor="endDate">Start Date</label>
                    <select
                      id="datefilter"
                      className="form-select"
                      value={vitto}
                      onChange={handlevitalsChangeto}
                      aria-label="Default select example"
                    >
                      {parsedVitdate.map((item, index) => {
                        return (
                          <option
                            value={`${item.d}`}
                            key={index}
                          >{`${item.d}`}</option>
                        );
                      })}
                      ;
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                    <label htmlFor="endDate">End Date</label>
                    <select
                      id="datefilter"
                      className="form-select"
                      value={vitfrom}
                      onChange={handlevitalsChangefrom}
                      aria-label="Default select example"
                    >
                      {parsedVitdate.map((item, index) => {
                        return (
                          <option
                            value={`${item.d}`}
                            key={index}
                          >{`${item.d}`}</option>
                        );
                      })}
                      ;
                    </select>
                  </div>
                </>
              )}
            </div>

            <div className=" col-sm-4 col-md-6 mt-3">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={showHistory}
                  onChange={() => setShowHistory(!showHistory)}
                />
                <span>History</span>
              </label>
            </div>
            <div className="d-flex justify-content-evenly">
              {showHistory && (
                <>
                 <div className=" mt-3">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={AllHistory}
                  onChange={() => setAllHistory(!AllHistory)}
                />
                <span>All</span>
              </label>
            </div>
                  <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                    <label htmlFor="endDate">Start Date</label>
                    <select
                      id="datefilter"
                      className="form-select"
                      value={disto}
                      onChange={handledisChangeto}
                      aria-label="Default select example"
                    >
                      {parsedDisdate.map((item, index) => {
                        return (
                          <option
                            value={`${item.d}`}
                            key={index}
                          >{`${item.d}`}</option>
                        );
                      })}
                      ;
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                    <label htmlFor="endDate">End Date</label>
                    <select
                      id="datefilter"
                      className="form-select"
                      value={disfrom}
                      onChange={handledisChangefrom}
                      aria-label="Default select example"
                    >
                      {parsedDisdate.map((item, index) => {
                        return (
                          <option
                            value={`${item.d}`}
                            key={index}
                          >{`${item.d}`}</option>
                        );
                      })}
                      ;
                    </select>
                  </div>
                </>
              )}
            </div>

            <div className="  col-sm-4 col-md-6 mt-3">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={showPrescription}
                  onChange={() => setShowPrescription(!showPrescription)}
                />
                <span>Prescription</span>
              </label>
            </div>
            <div className="d-flex justify-content-evenly">
              {showPrescription && (
                <>
                 <div className=" mt-3">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={AllPrescription}
                  onChange={() => setAllPrescription(!AllPrescription)}
                />
                <span>All</span>
              </label>
            </div>
                  <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                    <label htmlFor="endDate">Start Date</label>
                    <select
                      id="datefilter"
                      className="form-select"
                      value={presto}
                      onChange={handlepresChangeto}
                      aria-label="Default select example"
                    >
                      {parsedPresdate.map((item, index) => {
                        return (
                          <option
                            value={`${item.d}`}
                            key={index}
                          >{`${item.d}`}</option>
                        );
                      })}
                      ;
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                    <label htmlFor="endDate">End Date</label>
                    <select
                      id="datefilter"
                      className="form-select"
                      value={presfrom}
                      onChange={handlepresChangefrom}
                      aria-label="Default select example"
                    >
                      {parsedPresdate.map((item, index) => {
                        return (
                          <option
                            value={`${item.d}`}
                            key={index}
                          >{`${item.d}`}</option>
                        );
                      })}
                      ;
                    </select>
                  </div>
                </>
              )}
            </div>
              


            <div className=" col-sm-4 col-md-6 mt-3">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={showReport}
                  onChange={() => setShowReport(!showReport)}
                />
                <span>Reports</span>
              </label>
            </div>
            <div className="d-flex justify-content-evenly">
              {showReport && (
                <>
                 <div className=" mt-3">
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={AllReport}
                  onChange={() => setAllReport(!AllReport)}
                />
                <span>All</span>
              </label>
            </div>
                  <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                    <label htmlFor="endDate">Start Date</label>
                    <select
                      id="datefilter"
                      className="form-select"
                      value={repto}
                      onChange={handlerepChangeto}
                      aria-label="Default select example"
                    >
                      {parsedRepdate.map((item, index) => {
                        return (
                          <option
                            value={`${item.d}`}
                            key={index}
                          >{`${item.d}`}</option>
                        );
                      })}
                      ;
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-12 pt-2 d-flex align-items-center">
                    <label htmlFor="endDate">End Date</label>
                    <select
                      id="datefilter"
                      className="form-select"
                      value={repfrom}
                      onChange={handlerepChangefrom}
                      aria-label="Default select example"
                    >
                      {parsedRepdate.map((item, index) => {
                        return (
                          <option
                            value={`${item.d}`}
                            key={index}
                          >{`${item.d}`}</option>
                        );
                      })}
                      ;
                    </select>
                  </div>
                </>
              )}
            </div>


            <div className="text-end mb-5">
              <button className="btn btn-info fw-bold" onClick={senddata}>
                REFER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Refer;

import { useState, useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/router";
const GetNotification = () => {
  
  const [msgarray, setmsgarr] = useState([]);
 

  const router = useRouter();
  const { from,to,name } = router.query;

  
  const Notification = async () => {
    const response = await fetch(
      "http://localhost/NewProject/api/Chat/getstarmessage",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          name,
        }),
      }
    );
    // console.log(response+'    joijoijoiji');
    
    let data = await response.json();
    if (data) {
      let arr2 = [];
    
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split("=");
        if(arr1[5]==='Text'){
        
        arr2.push({
          
          docid: arr1[0],
          patid: arr1[1],
          msgs: arr1[2],
          date: arr1[3],
          time: arr1[4],
          type:arr1[5],
        
        });
      }
    else if(arr1[5]==='audio'){
      arr2.push({
        docid: arr1[0],
        patid: arr1[1],
        msgs: arr1[2],
        date: arr1[3],
        time: arr1[4],
        type:arr1[5],
      });
    }
    
    }
   
    setmsgarr(arr2);
  };
  };
  useEffect(() => {
    Notification();
  }, []);
  

  
  const baseUrl ="http://192.168.1.70/NewProject/Audio/";
  return (
    <div className="  col-lg-12 col-sm-4 col-md-6 container">
        <nav>
        <div
          className="col-lg-11 mt-5 center-align h-100 shadow-lg p-3 mb-5  rounded bg-blue"
          
        >  <h3>Starred Messages</h3></div>
      </nav>
      <table className="table table-info" >
        <tbody>
          {msgarray.map((curElem) => {
            return (
              <tr key={curElem.date}>
                {curElem.type == "Text" && (
                  <tr>
                    <td>
                      <p style={{fontFamily:"bold",color:"red"}}> {`${curElem.msgs}`}   </p>
                       <p> {`${curElem.time}`}   {`${curElem.date}`}</p>
                    </td>

                    
                  </tr>
                )}
            
                {curElem.type == "audio" && (
                  <tr>
                    <td>
                    <audio  controls   >
            <source src={baseUrl+curElem.msgs} type="audio/wav" />
           
          </audio>

          <p> {`${curElem.date}`}   {`${curElem.time}`}</p>
                    </td>

                    
                  </tr>
                )}

               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default GetNotification;

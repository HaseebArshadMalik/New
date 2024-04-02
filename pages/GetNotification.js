import { useState, useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/router";
const GetNotification = () => {
  const [vitbydate, setvitbydate] = useState(["hyllo", "hy"]);
  const [array, setarray] = useState([]);
  const [renderState, setrenderState] = useState(0);

  const router = useRouter();
  const { docid } = router.query;

  // const Clear = async () => {
  //   const response = await fetch(
  //     "http://localhost/NewProject/api/Refer/setrefers",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: docid,

  //       }),
  //     }
  //   );
  //   // console.log(response+'    joijoijoiji');
  //   let data = await response.json();

  // };
  const accept = async (a) => {
    const response1 = await fetch(
      "http://localhost/NewProject/api/Example/getdata",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let data1 = await response1.json();
    if (data1) {
      console.log("Refered" + data1);
      console.log("Accpeted");
    }
    const response = await fetch(
      "http://localhost/NewProject/api/Refer/setrefers",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: docid,
          patid: a,
        }),
      }
    );

    const response2 = await fetch(
      "http://localhost/NewProject/api/Example/deletefile",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let data2 = await response2.json();
    if (data2) {
      console.log("Fileclear   " + "jj");
    }
  };
  const denied = async (a) => {
    const response1 = await fetch(
      "http://localhost/NewProject/api/Example/deletefile",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let data1 = await response1.json();
    if (data1) {
      console.log("Fileclear");
    }
    const response = await fetch(
      "http://localhost/NewProject/api/Refer/setrefersdenied",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: docid,
          patid: a,
        }),
      }
    );
    let data = await response.json();
    if (data) {
      console.log("Denied");
    }
  };
  const Notification = async () => {
    const response = await fetch(
      "http://localhost/NewProject/api/Refer/getrefers",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: docid,
        }),
      }
    );
    // console.log(response+'    joijoijoiji');
    let data = await response.json();

    if (data) {
      let arr2 = [];
      for (let i = 0; i < data.length; i++) {
        let arr1 = data[i].split(",");
        arr2.push({
          Sendid: arr1[0],
          Sendname: arr1[1],
          Recid: arr1[2],
          Recname: arr1[3],
          Patid: arr1[4],
          Patname: arr1[5],
          date: arr1[6],
          flag: arr1[7],
        });
      }
      setarray(arr2);
      console.log(array);

      //navigation.navigate('DoctorsList',{array:arr});
    } else {
      //Alert.alert('you do not have Doctors Contact info')
    }
  };
  useEffect(() => {
    Notification();
  }, []);
  useEffect(() => {
    Notification();
  }, [renderState]);

  useEffect(() => {
    let x = renderState;
    x = x + 1;
    setTimeout(() => {
      setrenderState(x);
    }, 5000);
  }, [array]);

  return (
    <div className=" col-sm-4 col-md-6container">
      <table className=" table table-info">
        <tbody>
          {array.map((curElem) => {
            return (
              <tr key={curElem.date}>
                {curElem.flag == 0 && curElem.Recid == docid && (
                  <tr>
                    <td>
                      Doctor {`${curElem.Sendname}`} wants to refer you Patient{" "}
                      {`${curElem.Patname}`} at {`${curElem.date}`}
                    </td>

                    <td>
                      <button
                        type="button"
                        onClick={() => accept(curElem.Patid)}
                        class="btn btn-primary btn-sm mx-3"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        onClick={() => denied(curElem.Patid)}
                        class="btn btn-success btn-sm mx-3"
                      >
                        Decline
                      </button>
                    </td>
                  </tr>
                )}

                {curElem.flag == 2 && curElem.Sendid == docid && (
                  <tr>
                    <td>
                    "Your referred patient, {`${curElem.Patname}`} , has his request declined by Dr. {`${curElem.Recname}`} at {`${curElem.date}`}
                    </td>
                  </tr>
                )}

                {curElem.flag == 1 && curElem.Sendid == docid && (
                  <tr>
                    <td>
                      Your patient {`${curElem.Patname}`} has accepted by Dr.
                      {`${curElem.Recname}`} at {`${curElem.date}`}
                    </td>
                  </tr>
                )}

                {curElem.flag == 1 && curElem.Recid == docid && (
                  <tr>
                    <td>
                    You Accepted the patient  {`${curElem.Patname}`} referred by Dr{" "}
                      {`${curElem.Sendname}`} at {`${curElem.date}`}
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

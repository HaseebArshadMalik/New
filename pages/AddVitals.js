import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import dayjs from "dayjs";
import Router from "next/router";
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/router";
const AddVital = () => {
  const [tem, settem] = useState("");
  const [bloodPressure, setpressure] = useState("");
  const [heartRate, setrate] = useState("");
  const [breathRate, setbreath] = useState("");
  const [patId, setid] = useState("");
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const router = useRouter();
  const {
    query: { id,dbname },
  } = router;
  const pro = { id,dbname };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!tem || !bloodPressure || !heartRate || !breathRate ) {
      // Display an error message
      alert("Please fill in all fields.");
      return;
    }
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/insertvitals",
      {
        method: "POST",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          temperature: tem,
          bloodPressure: bloodPressure,
          heartRate: heartRate,
          breathRate:breathRate,
          patId: pro.id,
          name:pro.dbname,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        M.toast({ html: "Vitals added successfully", classes: "green" });
        Router.push({
          pathname: "./Doctorchat",
          query: {
            id,
            dbname,
          },
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container  ">
      <div className="row">
        <div
          className="col-lg-4 mt-5 center-align h-100 shadow-lg p-3 mb-5 bg-white rounded"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              fill="#2196F3"
              class="bi bi-heart-pulse-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9H1.475Z" />
              <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.88Z" />
            </svg>
          </div>
          <h3>AddVitals</h3>
          <form onSubmit={(e) => handleSignup(e)}>
            <FormControl>
              <input
                type="text"
                placeholder="Temperature"
                value={tem}
                onChange={(e) => settem(e.target.value)}
              />
              <input
                type="text"
                placeholder="BloodPressure"
                value={bloodPressure}
                onChange={(e) => setpressure(e.target.value)}
              />
              <input
                type="text"
                placeholder="HeartRate"
                value={heartRate}
                onChange={(e) => setrate(e.target.value)}
              />
              <input
                type="text"
                placeholder="BreathRate"
                value={breathRate}
                onChange={(e) => setbreath(e.target.value)}
              />
              <button
                className=" mt-4 text-white fw-bold btn waves-effect waves-light blue"
                type="submit"
              >
                AddVitals
                <i className="material-icons right"></i>
              </button>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddVital;

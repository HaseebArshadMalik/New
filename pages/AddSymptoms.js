import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
const AddSymptoms = () => {
  const [Disease, setdisease] = useState("");
  const [Description, setdiscription] = useState("");
  const [Procedure, setproc] = useState("");
  const [patId, setid] = useState("");

  //   const [value, setValue] = useState(dayjs('2022-04-17'));

  const router = useRouter();
  const {
    query: { id,dbname },
  } = router;
  const pro = { id,dbname };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!Disease || !Description || !Procedure  ) {
      // Display an error message
      alert("Please fill in all fields.");
      return;
    }
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/insertDisease",
      {
        method: "POST",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          PATID: pro.id,
          NAME: Disease,
          SYMPTOMS: Description,
          TREATMENT: Procedure,
          name:pro.dbname,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        M.toast({ html: "Symptoms added successfully", classes: "green" });
        router.push({
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
    <div className="container ">
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
              class="bi bi-virus"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v1.402c0 .511.677.693.933.25l.7-1.214a1 1 0 0 1 1.733 1l-.701 1.214c-.256.443.24.939.683.683l1.214-.701a1 1 0 0 1 1 1.732l-1.214.701c-.443.256-.262.933.25.933H15a1 1 0 1 1 0 2h-1.402c-.512 0-.693.677-.25.933l1.214.701a1 1 0 1 1-1 1.732l-1.214-.7c-.443-.257-.939.24-.683.682l.701 1.214a1 1 0 1 1-1.732 1l-.701-1.214c-.256-.443-.933-.262-.933.25V15a1 1 0 1 1-2 0v-1.402c0-.512-.677-.693-.933-.25l-.701 1.214a1 1 0 0 1-1.732-1l.7-1.214c.257-.443-.24-.939-.682-.683l-1.214.701a1 1 0 1 1-1-1.732l1.214-.701c.443-.256.261-.933-.25-.933H1a1 1 0 1 1 0-2h1.402c.511 0 .693-.677.25-.933l-1.214-.701a1 1 0 1 1 1-1.732l1.214.701c.443.256.939-.24.683-.683l-.701-1.214a1 1 0 0 1 1.732-1l.701 1.214c.256.443.933.261.933-.25V1a1 1 0 0 1 1-1Zm2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
            </svg>
          </div>
          <h3>AddSymptoms</h3>
          <form onSubmit={(e) => handleSignup(e)}>
            <FormControl>
              <input
                type="text"
                placeholder="Disease Name"
                value={Disease}
                onChange={(e) => setdisease(e.target.value)}
              />
              <input
                type="text"
                placeholder="Symptoms"
                value={Description}
                onChange={(e) => setdiscription(e.target.value)}
              />
              <input
                type="text"
                placeholder="Procedure"
                value={Procedure}
                onChange={(e) => setproc(e.target.value)}
              />

              {/* <FormControl>
                <InputLabel id="demo-simple-select-label">TREATMENT</InputLabel>
                <Select
                 className="mt-3"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Procedure}
                  label="TREATMENT"
                  onChange={(e) => setproc(e.target.value)}
                >
                  <MenuItem value={"cure"}>CURE</MenuItem>
                  <MenuItem value={"Procedure"}>PROCEDURE</MenuItem>
                </Select>
              </FormControl> */}
              <button
                className=" mt-4 text-white fw-bold btn waves-effect waves-light blue"
                type="submit"
                style={{ margin: 7 }}
              >
                AddSymptoms
                <i className="material-icons right"></i>
              </button>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddSymptoms;

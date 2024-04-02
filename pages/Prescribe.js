import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import { useRouter } from "next/router";

const Prescribe = () => {
  const [Noon, setNoon] = useState("0");
  const [Evening, setEvening] = useState("0");
  const [Morning, setMorning] = useState("0");
  const [Night, setNight] = useState("0");
  const [Medicinename, setMedicinename] = useState("");
  const [Days, setDays] = useState("");
  const [Weight, setWeight] = useState("");
  const [Procedure, setproc] = useState("");
  const [patId, setid] = useState("");
  const [Medicine, setMedicine] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }; //   const [value, setValue] = useState(dayjs('2022-04-17'));

  const router = useRouter();
  const {
    query: { id,dbname },
  } = router;
  const pro = { id,dbname };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!Medicinename || !selectedOption || !Morning || !Evening || !Noon || !Night || !Days || !Weight  ) {
      // Display an error message
      alert("Please fill in all fields.");
      return;
    }
    const res = await fetch(
      "http://localhost/NewProject/api/Patient/insertMedicines",
      {
        method: "POST",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MEDTYPE: selectedOption,
          MEDNAME: Medicinename,
          MRNG: Morning,
          NOON: Noon,
          EVE: Evening,
          NIGHT: Night,
          patId: pro.id,
          Days:Days,
          WEIGHT:Weight,
          name:dbname,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        M.toast({ html: "Medicines added successfully", classes: "green" });
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
  // function showMedi() {
  //   if (Medicine == 0) {
  //     document.getElementById("tablt-div").style.display = "block";
  //   } else if (Medicine == 1) {
  //     document.getElementById("tablt-div").style.display = "block";
  //   }
  //   e.preventDefault();
  // }

  return (
    <div className="container">
      <div className=" card center-align  ">
        <div className="mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            fill="#2196F3"
            class="bi bi-capsule"
            viewBox="0 0 16 16"
          >
            <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z" />
          </svg>

          <h3>Prescribe Medicine</h3>
        </div>
        <div className="container px-5">
          <form onSubmit={(e) => handleSignup(e)}>
            <div className="row">
              <div className="col-md-4" style={{textAlign:'initial'}}>
                <label htmlFor="select-field">Medicine Type</label>
                <select
                  className="d-block mt-1"
                  id="select-field"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="">----- Medicine Type ------</option>
                  <option value="Tablet">Tablets</option>
                  <option value="Syrup">Syrups</option>
                  <option value="Ointment">Ointments</option>
                </select>
              </div>
              {selectedOption === "Tablet" && (
                <div className="col-md-8" style={{textAlign:'initial'}}>
                  <div>
                    <label htmlFor="tablet-name">Medicine Name</label>
                    <select
                      id="tablet-name"
                      className="d-block mt-1"
                      value={Medicinename}
                      onChange={(e) => setMedicinename(e.target.value)}
                    >
                      <option value="Panadol">Panadol</option>
                      <option value="Brufen">Brufen</option>
                      <option value="Zyloric 100 mg">Zyloric 100mg</option>
                      <option value="Rovista 500 mg">Rovista 500mg</option>
                      <option value="Disprine">Disprine</option>
                    </select>
                  </div>
                </div>
              )}
              {selectedOption === "Syrup" && (
                <div className="col-md-8" style={{textAlign:'initial'}}>
                  <label htmlFor="syrup-name">Medicine Name</label>
                  <select
                    id="syrup-name"
                    className="d-block mt-1"
                    value={Medicinename}
                    label="Medicine Name"
                    onChange={(e) => setMedicinename(e.target.value)}
                  >
                    <option value="bruffen">bruffen</option>
                    <option value="Acefyl">Acefyl</option>
                    <option value="Hydrllin">Hydrllin</option>
                  </select>
                </div>
              )}
              {selectedOption === "Ointment" && <div>Option 3 selected</div>}
            </div>
            <div className="row">
              <div className="col-lg-3" style={{textAlign:'initial'}}>
                <label htmlFor="morning">Morning</label>
                <select
                  className="d-block mt-1"
                  id="morning"
                  value={Morning}
                  label="Morning"
                  onChange={(e) => setMorning(e.target.value)}
                >
                  <option value="0">None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="col-lg-3" style={{textAlign:'initial'}}>
                <label htmlFor="morning">Noon</label>
                <select
                  className="d-block mt-1"
                  id="morning"
                  value={Noon}
                  label="Noon"
                  onChange={(e) => setNoon(e.target.value)}
                >
                  <option value="0">None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>

              <div className="col-lg-3" style={{textAlign:'initial'}}>
                <label htmlFor="evening">Evening</label>
                <select
                  className="d-block mt-1"
                  id="evening"
                  value={Evening}
                  label="Evening"
                  onChange={(e) => setEvening(e.target.value)}
                >
                  <option value="0">None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="col-lg-3" style={{textAlign:'initial'}}>
                <label htmlFor="night">Night</label>
                <select
                  className="d-block mt-1"
                  id="night"
                  value={Night}
                  label="Night"
                  onChange={(e) => setNight(e.target.value)}
                >
                  <option value="0">None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="DaysofMedicine"
                value={Days}
                onChange={(e) => setDays(e.target.value)}
              />
              <input
                type="text"
                placeholder="Weight"
                value={Weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button
              className="btn my-5 waves-effect waves-light blue fw-bold text-white m-2"
              type="submit"
            >
              AddMedicine
              <i className="material-icons right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Prescribe;

import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/legacy/image";
const Home = () => {
  return (
    <div className="center">
      <Image
        src="/bk2.jpg"
        layout="fill"
        className="roadmap2"
        alt="noimage"
      ></Image>
      <h1>Welcome App </h1>
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 card ">
              <div className="card-body   ">
                <Link className="my-btn text-white fw-bold btn waves-effect waves-light blue" href="/Login">Doctor</Link>
              </div>
            </div>

            <div className="col-lg-6 card">
              <div className="card-body  ">
                <Link  className="my-btn  text-white fw-bold btn waves-effect waves-light blue" href="/Loginpatient">Patient</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

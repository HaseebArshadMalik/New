import Link from "next/link";
import { useRouter } from "next/router";

const TopNavVitals = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        {/* <a href="#" className="brand-logo center"> */}
        <h3 className="brand-logo center"> Vitals</h3>
        
        {/* </a> */}
        <ul id="nav-mobile" className="right ">
          <li>
            <Link href="/AddVitals" className="brand-logo right ">
              +
            </Link>
          </li>
          {/* <li>
              <a href="/Addpatient" className="brand-logo right ">
                +
              </a>
              <i className="material-icons"></i>
            </li> */}
        </ul>
        
      
      </div>
    </nav>
  );
};
export default TopNavVitals;

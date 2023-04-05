import Link from "next/link";
import { useRouter } from "next/router";

const TopNavVitals = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <h3 className="brand-logo center"> Vitals</h3>
        <ul id="nav-mobile" className="right ">
          <li>
            <Link href="/AddVitals" className="brand-logo right ">
              +
            </Link>
          </li>
        </ul>
        
      
      </div>
    </nav>
  );
};
export default TopNavVitals;

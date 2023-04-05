import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else "";
  }
  return (
    <nav>
      <div className="nav-wrapper #1e88e5 blue darken-1" >
        
        <h2 style={{padding:8}}>Secure App</h2>
      </div>
    </nav>
  );
};
export default Navbar;

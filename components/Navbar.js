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
      <div className="nav-wrapper #1e88e5 blue darken-1">
        <Link href="/" className="brand-logo">
          Secure App
        </Link>
        <ul id="nav-mobile" className="right ">
          <li className={isActive("/Login")}>
            <Link href="/Login">Login</Link>
          </li>
          <li className={isActive("/Signup")}>
            <Link href="/Signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

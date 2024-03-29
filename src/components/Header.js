import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="light-blue">
      <div className="nav-wrapper">
        <Link to="!#" className="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

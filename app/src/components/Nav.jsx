import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navcolour">
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddLanguages">AddLanguages</Link>
        </li>
        
      </ul> */}
      <Link to="/">Home</Link>
      {/* <span>|</span> */}
      <Link to="/AddLanguages">AddLanguages</Link>
    </nav>
  );
};

export default Nav;

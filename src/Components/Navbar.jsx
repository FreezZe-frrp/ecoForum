import { Link, NavLink } from "react-router-dom";
/*
This is what i need to do in CSS to change styling on when an Link is Active from the NavLinks

#navbar a.active {
  color: red;
}
*/

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <Link to="/">EcoForum</Link>
        <ul>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/register"> Register </NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import Navbar from "../Components/Navbar";
import { initializeApp } from "firebase/app";
import "../styles/register.css";

const Register = () => {
  return (
    <div>
      <Navbar />
      <form>
        <label htmlFor="user">Username</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Enter Username"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          required
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          name="pass"
          placeholder="Enter Password"
          required
        />

        <input type="submit" id="regis" name="regis" value="Register" />
      </form>
    </div>
  );
};

export default Register;

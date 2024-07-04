import { NavLink } from "react-router-dom";
import "../styles/navBar.css";
const $body1 = document.querySelector("body");
const NavBar = () => {
  const handleMode = () => {
    $body1.classList.toggle("dark");
  };
  return (
    <div className="navbar">
      <h1 className="navbar_title">
        <NavLink to="/">e-commerce</NavLink>
      </h1>
      <ul className="navbar_list">
        <li className="navbar_item">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="navbar_item">
          <NavLink to="/purchases">Purchases</NavLink>
        </li>
        <li className="navbar_item">
          <NavLink to="/cart">Cart</NavLink>
        </li>

        <li className="navbar_item" onClick={handleMode}>
          <NavLink>🌚</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

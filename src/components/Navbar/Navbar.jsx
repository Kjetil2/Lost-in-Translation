import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav>
      {user !== null && (
        <div className="nav-buttons">
          <ul>
            <li>
              <NavLink to="/translation">Translation</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;

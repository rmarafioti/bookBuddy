import { useDispatch, useSelector } from "react-redux";
import { selectToken, logout } from "../features/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

/**
 *
 * @component NavBar is universal on every view via it's place in Root.jsx
 * @returns a list of NavLinks so the user can navigate to each child component from any view of the app and displays the users logged in / logged out status
 */

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   *
   * @description token checks if the user has a token and is in turn logged in.
   *
   */

  const token = useSelector(selectToken);

  /**
   *
   * @description handleLogout allows the logged in user to logout of their account.
   *
   */

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav>
      <header>{`BOOK BUDDY`}</header>
      <menu>
        <li id="nav">
          <NavLink id="menuItem" to="/books">
            HOME
          </NavLink>
        </li>
        <li id="nav">
          <NavLink id="menuItem" to="/account">
            VIEW ACCOUNT
          </NavLink>
        </li>
        {token ? (
          <li id="nav">
            <a id="menuItem" onClick={handleLogout}>
              Log Out
            </a>
          </li>
        ) : (
          <li id="nav">
            <NavLink id="menuItem" to="/login">
              Log In
            </NavLink>
          </li>
        )}
      </menu>
    </nav>
  );
}

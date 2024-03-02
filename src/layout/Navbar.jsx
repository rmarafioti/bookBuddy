import { useDispatch, useSelector } from "react-redux";
import { selectToken, logout } from "../features/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

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

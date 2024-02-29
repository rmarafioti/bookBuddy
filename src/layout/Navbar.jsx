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
      <h1>{`BOOK BUDDY!`}</h1>
      <menu>
        <li>
          <NavLink to="/books">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/account">VIEW ACCOUNT</NavLink>
        </li>
        {token ? (
          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
      </menu>
    </nav>
  );
}

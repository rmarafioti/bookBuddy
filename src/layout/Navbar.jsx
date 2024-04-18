import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, logout } from "../features/auth/authSlice";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

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

  const [menuOpen, setMenuOpen] = React.useState(false);

  /**
   *
   * @description location checks the status of the view on the page to reset hamburger.
   *
   */

  const location = useLocation();

  /**
   *
   * @description hamburger menu is set closed, if open and the view path changes hambergur menu will set to closed again.
   *
   */

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav>
      <header>{`BOOK BUDDY`}</header>
      <div id="hamMenu" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
      <menu className={`menu ${menuOpen ? "active" : ""}`}>
        <li id="nav">
          <NavLink id="menuItem" to="/books">
            HOME
          </NavLink>
        </li>

        {token && (
          <li id="nav">
            <NavLink id="menuItem" to="/account">
              ACCOUNT
            </NavLink>
          </li>
        )}
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

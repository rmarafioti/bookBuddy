import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "./authSlice";

import "./authForm.css";

/** @component AuthForm - This form allows users to register or log in. */
export default function AuthForm() {
  const navigate = useNavigate();

  // Handles swapping between login and register
  const [isLogin, setIsLogin] = useState(true);
  const authAction = isLogin ? "Login" : "Register";
  const altCopy = isLogin
    ? "Need an account? Register here."
    : "Already have an account? Login here.";

  // Controlled form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form submission
  const [login, { isLoading: loginLoading, error: loginError }] =
    useLoginMutation();
  const [register, { isLoading: registerLoading, error: registerError }] =
    useRegisterMutation();

  /** @description attemptAuth - Send the requested authentication action to the API */
  const attemptAuth = async (evt) => {
    evt.preventDefault();

    const authMethod = isLogin ? login : register;
    const credentials = { email, password };

    // We don't want to navigate if there's an error.
    // `unwrap` will throw an error if there is one
    // so we can use a try/catch to handle it.
    try {
      await authMethod(credentials).unwrap();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>{authAction}</h1>
      <form onSubmit={attemptAuth}>
        <label id="email">
          Email
          <input
            id="inputBar"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
        <label id="password">
          Password
          <input
            id="inputBar"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        <button id="logIn">{authAction}</button>
      </form>
      <div id="message">
        <a onClick={() => setIsLogin(!isLogin)}>{altCopy}</a>
      </div>

      {(loginLoading || registerLoading) && <p>Please wait...</p>}
      {loginError && <p role="alert">{loginError.message}</p>}
      {registerError && <p role="alert">{registerError.message}</p>}
    </>
  );
}

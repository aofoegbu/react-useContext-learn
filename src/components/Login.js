import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function Login() {
  const { showProfile, setPassword, setUsername, setShowProfile } =
    useContext(LoginContext);

  const handleLogin = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Password..."
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider
        value={{
          username,
          setUsername,
          password,
          setPassword,
          showProfile,
          setShowProfile,
        }}
      >
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;

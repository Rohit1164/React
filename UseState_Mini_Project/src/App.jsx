import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [temperature, setTemperature] = useState("");

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState();
  const [showUserDetail, setShowUserDetail] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "6%",
        border: "2px solid white",
        borderRadius: "20px",
      }}
    >
      <div>
        <h1>Mini Project</h1>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{
            height: "42px",
            border: "none",
            width: "79%",
            margin: "10px",
            paddingLeft: "10px",
            fontSize: "large",
            borderRadius: "8px",
          }}
          placeholder="Enter your Name"
        />
        <input
          type="number"
          value={userAge}
          onChange={(e) => setUserAge(String(e.target.value))}
          style={{
            height: "42px",
            border: "none",
            width: "79%",

            margin: "10px",
            paddingLeft: "10px",
            fontSize: "large",
            borderRadius: "8px",
          }}
          placeholder="Enter your Age"
        />
        <button
          onClick={() => setShowUserDetail(true)}
          style={{
            width: "79%",
            color: "#fff",
            paddingLeft: "15px",
            backgroundColor: "blue",
          }}
        >
          Show detail
        </button>
        {showUserDetail && <Profile userName={userName} userAge={userAge} />}
      </div>

      <div
        style={{
          padding: "10px",
          borderLeft: "2px solid white",
        }}
      >
        <h1>Derived Class</h1>
        <TemperatureInput
          temperature={temperature}
          onTemperatureChange={setTemperature}
        />
        <TemperatureInput
          temperature={temperature}
          onTemperatureChange={setTemperature}
        />
      </div>
    </div>
  );
}

function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label style={{ fontSize: "large" }}>Enter Temperature: </label>
      <input
        type="text"
        value={temperature}
        style={{
          height: "42px",
          width: "300px",
          margin: "10px",
          fontSize: "large",
          borderRadius: "8px",
          border: "none",
        }}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

export default App;

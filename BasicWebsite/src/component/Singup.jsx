import React, { useState } from "react";

function Singup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle Sign Up logic here
    if (password === confirmPassword) {
      console.log("Signed Up with:", email, password);
    } else {
      console.log("Passwords do not match!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "400px" }}>
        <h3 className="mb-4 text-center">Sign Up</h3>
        <form onSubmit={handleSignUp}>
          <label>Email address:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            className="float-end border border-opacity-75 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mt-3">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              className="float-end border border-opacity-75 rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              className="float-end border border-opacity-75 rounded"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            variant="primary"
            type="submit"
            className="w-100 mt-4 bg-primary text-white
            rounded border border-primary"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Singup;

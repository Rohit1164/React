import React, { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle Sign In logic here
    console.log("Signed In with:", email, password);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "400px" }}>
        <h3 className="mb-4 text-center">Sign In</h3>
        <form onSubmit={handleSignIn}>
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
          <button
            variant="primary"
            type="submit"
            className="w-100 mt-4 bg-primary text-white
            rounded border border-primary"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;

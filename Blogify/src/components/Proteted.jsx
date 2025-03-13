import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Proteted({ childern, authentication = true }) {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useDispatch((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setloading(false);
  }, [authentication, authStatus, navigate]);

  return loading ? <h1>Loading</h1> : { childern };
}

export default Proteted;

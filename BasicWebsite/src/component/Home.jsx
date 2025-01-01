import React from "react";
import pic from "../assets/pic.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
          <h1 className="display-4 fw-bold">Mr Rohit</h1>
          <h1 className="display-4 fw-bold">Front-End Developer</h1>
          <p className="lead text-muted">
            Discover amazing content and stay connected. We bring you the best
            of everything you love.
          </p>
          <Link to={"profile"}>
            <button className="btn btn-primary btn-lg">View All</button>
          </Link>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={pic} alt="Placeholder" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default Home;

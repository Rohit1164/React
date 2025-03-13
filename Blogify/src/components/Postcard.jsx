import React from "react";
import authService from "../Appwrite/Config";
import { NavLink } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  return (
    <div>
      <NavLink to={`/posts/${$id}`}>
        <div className="grid w-full">
          <div>
            <img src={authService.getFilePriveiw(featuredImage)} alt={title} />
          </div>
          <h1>{title}</h1>
        </div>
      </NavLink>
    </div>
  );
}

export default Postcard;

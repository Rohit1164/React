import React from "react";

function Profile({ userName, userAge }) {
  let isName = userName !== "";
  let isAge = userAge !== "";
  if (isName && isAge) {
    return (
      <div>
        <h2>Profile details</h2>
        <p>
          <span style={{ fontWeight: "600", font: "large" }}>Profile : </span>
          {userName}
        </p>
        <p>
          <span style={{ fontWeight: "600", font: "large" }}>Age : </span>
          {userAge}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h2 style={{ fontSize: "30px" }}>Please Login to see your profile</h2>
      </div>
    );
  }
}

export default Profile;

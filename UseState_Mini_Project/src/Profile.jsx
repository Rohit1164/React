import React from "react";

function Profile({ userName, userAge }) {
  let isName = userName !== "";
  let isAge = userAge !== "";
  if (isName && isAge) {
    return (
      <div>
        <h1>Profile details</h1>
        <h2>Profile:{userName}</h2>
        <h2>Age:{userAge}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please Login to see your profile</h1>
      </div>
    );
  }
}

export default Profile;

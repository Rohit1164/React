import React from "react";
// import useTheme from "../../Context/context";

function ThemeBtn() {
  const { Theme, darkTheme, lightTheme } = useTheme();

  const themechange = (e) => {
    console.log({ Theme });
    const themeStatus = e.currentTarget.checked;
    if (themeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <>
      <label>
        <input
          type="checkbox"
          value=""
          onChange={themechange}
          checked={Theme === "dark"}
        />
        <div></div>
        <span>Toggle Theme</span>
      </label>
      {/* <div className="d-flex">
        <i className="bi bi-brightness-high mx-4" onClick={themechange}></i>
      </div> */}
    </>
  );
}

export default ThemeBtn;

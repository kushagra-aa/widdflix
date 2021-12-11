import React, { useState } from "react";
import { RotateLoader, GridLoader, SyncLoader } from "react-spinners";

import "./../styles/css/spinner.css";

function Spinner({ colorIn = "#E50914", loading = true, loader = "rotate" }) {
  const [color] = useState(colorIn);
  let loaderTag;
  if (loader === "grid") {
    loaderTag = (
      <div className="grid-loader-con">
        {" "}
        <GridLoader
          loading={loading}
          color={color}
          size={30}
          margin={20}
        />{" "}
      </div>
    );
  } else if ("banner") {
    loaderTag = <SyncLoader loading={loading} color={color} size={30} />;
  } else {
    loaderTag = (
      <RotateLoader loading={loading} color={color} size={30} margin={20} />
    );
  }
  return (
    <>
      <div className="spinner-con">{loaderTag}</div>
    </>
  );
}

export default Spinner;

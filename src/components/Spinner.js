import React, { useState } from "react";
import { RotateLoader, GridLoader, SyncLoader } from "react-spinners";

import "./../styles/css/spinner.css";

function Spinner({ colorIn = "#E50914", loading = true, loader = "rotate" }) {
  const [color] = useState(colorIn);
  return (
    <>
      <div className="spinner-con">
        {loader === "grid" ? (
          <div className="grid-loader-con">
            <GridLoader loading={loading} color={color} size={30} margin={20} />
          </div>
        ) : "banner" ? (
          <SyncLoader loading={loading} color={color} size={30} />
        ) : (
          <RotateLoader loading={loading} color={color} size={30} margin={20} />
        )}
      </div>
    </>
  );
}

export default Spinner;

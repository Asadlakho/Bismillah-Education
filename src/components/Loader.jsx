import React from "react";
import logo from "../assets/bismillah-logo.png";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]
                 bg-gradient-to-b from-[#f6ffec] to-[#d9f5c7]"
    >
      <div className="relative flex items-center justify-center">
        <img
          src={logo}
          alt="Loading Logo"
          className="select-none"
          style={{
            width: "56px",
            filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.10))"
          }}
        />

        <div
          className="absolute animate-spin"
          style={{
            width: "100px",
            height: "100px",
            borderWidth: "4px",
            borderStyle: "solid",
            borderColor: "transparent",
            borderBottomColor: "#5ee08e",
            borderRightColor: "#55d584",
            borderRadius: "50%",
            transform: "rotate(18deg)"
          }}
        />
      </div>
    </div>
  );
};

export default Loader;

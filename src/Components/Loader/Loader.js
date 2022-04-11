import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default class Loader extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          zIndex: 999999,
          backdropFilter: "brightness(0.5)",
          position: "absolute",
        }}
      >
        <ThreeDots
          height="100"
          width="100"
          color="#AA2205"
          style={{}}
          ariaLabel="loading"
        />
      </div>
    );
  }
}

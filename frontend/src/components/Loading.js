import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ size = 50 }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner
        variant="primary"
        as="span"
        aria-hidden="true"
        animation="border"
        role="status"
        style={{
          width: size,
          height: size,
        }}
      ></Spinner>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;

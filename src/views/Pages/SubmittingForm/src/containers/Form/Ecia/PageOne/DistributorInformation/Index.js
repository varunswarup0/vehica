// Core imports
import React from "react";
// Component imports
import Left from "./Left";
import Right from "./Right";
// Default export for main functional component
export default function Index(props) {
  // JSX
  return (
    <>
      <Left {...props} />
      <Right {...props} />
    </>
  );
}

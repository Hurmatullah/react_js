import React from "react";
import createRoot from "react-dom";

function Greeting() {
  return <h1>Hello world</h1>;
}

createRoot.render(<Greeting />, document.getElementById("root"));

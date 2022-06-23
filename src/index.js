import React from "react";
import createRoot from "react-dom";

function Greeting() {
  return (
    <div>
      <h3>Hey babe</h3>
      <h4>Hurrrrraaaaa</h4>
    </div>
  );
}

createRoot.render(<Greeting />, document.getElementById("root"));

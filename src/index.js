import React from "react";
import createRoot from "react-dom";

function Greeting() {
  return (
    <div>
      <Babe></Babe>
      <Hurmat></Hurmat>
    </div>
  );
}

const Babe = () => <p>Hello my Roya</p>;
const Hurmat = () => (
  <ul>
    <li>Hey my name is hurmat</li>
  </ul>
);

createRoot.render(<Greeting />, document.getElementById("root"));

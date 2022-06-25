import React from "react";
import createRoot from "react-dom";

const bookName = "How to love a girl";
const author = "Hurmat";
const photo =
  "https://image.shutterstock.com/image-illustration/stack-textbooks-isolated-on-white-260nw-83105218.jpg";

function Booklists() {
  return <Books></Books>;
}
function Books() {
  return (
    <article>
      <img src={photo} alt=""></img>
      <h4>{bookName}</h4>
      <h4>{author}</h4>
    </article>
  );
}

createRoot.render(<Booklists />, document.getElementById("root"));

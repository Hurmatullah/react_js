import React from "react";
import createRoot from "react-dom";

function Greeting(){

  return <h1>Hey this is my first code after a while, please check it out</h1>

}

createRoot.render(<Greeting/>, document.getElementById('root'));
// const handleClick = () => {
//   console.log("Congratulations, you have clicked me");
// };

import { useState } from "react";

// const handleClickAgain = (name) => {
//   console.log("you clicked me again" + " " + name);
// };
// const handleClick = () => {
//   console.log("Congratulations, you have clicked me");
// };

// const handleClickAgain = (name) => {
//   console.log("you clicked me again" + " " + name);
// };
const Home = () => {
  const [name, setName] = useState("Hurmat");

  const handleClick = () => {
    setName("Saeed");
  };

  return (
    <div>
      <h2>Hello world</h2>

      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;

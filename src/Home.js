import { useState } from "react";

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

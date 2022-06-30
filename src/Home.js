// const handleClick = () => {
//   console.log("Congratulations, you have clicked me");
// };

import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

// const handleClickAgain = (name) => {
//   console.log("you clicked me again" + " " + name);
// };
// const handleClick = () => {
//   console.log("Congratulations, you have clicked me");
// };

// const handleClickAgain = (name) => {
//   console.log("you clicked me again" + " " + name);
// };
// const Home = () => {
//   const [name, setName] = useState("Hurmat");

//   const handleClick = () => {
//     setName("Saeed");
//   };

//   return (
//     <div>
//       <h2>Hello world</h2>

//       <p>{name}</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

const Home = () => {
  const [blogs, setBLogs] = useState(null);
  

  const deleteRow = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBLogs(newBlogs);
  };


  return (
    <div className="Home">
      <Bloglist blogs={blogs}title="All title"></Bloglist>
    </div>
  );
};

export default Home;

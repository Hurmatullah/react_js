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
  const [isPending, pendingDone] = useState(true);

  const deleteRow = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBLogs(newBlogs);
  };

  useEffect(() => {

    setTimeout(() => {
      fetch("http://localhost:9000/posts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBLogs(data);
      })
      pendingDone(false);
    }, 500);

  });

  return (
    <div className="Home">
      {isPending && <div>Loading.....</div>}
      {blogs && <Bloglist blogs={blogs}title="All title"></Bloglist>}
    </div>
  );
};

export default Home;

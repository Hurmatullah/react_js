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
  const [blogs, setBLogs] = useState([
    { author: "Hurmatullah", year: 2012, id: 1 },
    { author: "Karimi", year: 2015, id: 2 },
    { author: "Haji saeed", year: 2013, id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.author}</h2>
          <p>Year of publish: {blog.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

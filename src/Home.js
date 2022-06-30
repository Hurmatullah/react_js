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
  const [pending, setPendings] = useState(true);
  const [error, setErrors] = useState(null);

  const deleteRow = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBLogs(newBlogs);
  };

  useEffect(() => {

    setTimeout(() => {
      fetch("http://localhost:9000/posts")
      .then(res => {
        if(!res.ok){
         throw Error("I am sorry for now we are not able to fetch your data");
        }
        return res.json();
      })
      .then((data) => {
        setBLogs(data);
        setPendings(false);
        setErrors(null);
      }).catch(err => {
        setErrors("I am sorry, for now we are not able to fetch your data");
        setPendings(false);
      })
    }, 1000);


  })

  return (
    <div className="Home">
      {pending && <div>Loading values</div>}
      {error && <div>{error}</div>}
      {blogs && <Bloglist blogs={blogs}title="All title"></Bloglist>}
    </div>
  );
};

export default Home;

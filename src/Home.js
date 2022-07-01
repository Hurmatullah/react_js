// const handleClick = () => {
//   console.log("Congratulations, you have clicked me");
// };

import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

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

  const {data, pending, error} = useFetch("http://localhost:9000/posts");

  return (
    <div className="Home">
      {pending && <div>Loading values</div>}
      {error && <div>{error}</div>}
      {data && <Bloglist blogs={data}title="All title"></Bloglist>}
    </div>
  );
};

export default Home;

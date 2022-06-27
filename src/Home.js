const handleClick = () => {
  console.log("Congratulations, you have clicked me");
};

const handleClickAgain = (name) => {
  console.log("you clicked me again" + " " + name);
};

const Home = () => {
  return (
    <div>
      <h2>Hello world</h2>
      <button onClick={handleClick}>CLick me</button>
      <button onClick={() => handleClickAgain("Mario")}>Click again</button>
    </div>
  );
};

export default Home;

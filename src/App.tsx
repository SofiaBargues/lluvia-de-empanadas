import "./App.css";

function Snow() {
  let animationDelay = "0s";
  let fontSize = "100px";
  let arr = Array.from("Las empanadas son asombrosas!!! Hay empanadas <3");

  return arr.map((el, i) => {
    animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
    fontSize = `${Math.floor(Math.random() * 10)}px`;
    let style = { animationDelay, fontSize };
    return (
      <div key={i} style={style}>
        SNOWFLAKE
      </div>
    ); // snowflake
  });
}

function App() {
  return (
    <div>
      <Snow />
    </div>
  );
}

export default App;

import "./App.css";
import { Snowflake } from "./Snowflake";

function Snow() {
  let animationDelay = "0s";
  let fontSize = "100px";
  const arr = Array.from("Las empanadas son asombrosas!!! Hay empanadas <3");

  return arr.map((el, i) => {
    animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
    fontSize = `${Math.floor(Math.random() * 10)}px`;
    const style = { animationDelay, fontSize };
    return (
      <p key={i} id={`item${i}`} style={style} className="snowflake">
        *{/* <Snowflake /> */}
      </p>
    );
  });
}

function App() {
  return (
    <div className="App">
      <Snow />
    </div>
  );
}

export default App;

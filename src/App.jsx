import "./App.css";
import BasicClassComponent from "./components/BasicClassComponent";
import ClassComponent from "./components/ClassComponent";
import GenerateSquares from "./components/GenerateSquares";
import styles from "./styles/style.module.css";
import classname from "classnames";

function App() {
  let numberArray = [1, 2, 3, 4, 5];

  return (
    <div
      // style={{
      //   color: number === 0 ? "yellow" : "blue",
      //   backgroundColor: "green",
      //   textAlign: "center",
      //   fosntSize: "32px",
      // }}
      className={classname(styles.newStyle, styles.newStyle1)}
    >
      <p>Hello world !</p>
      <BasicClassComponent color="yellow" bg="yellow" />
      <BasicClassComponent color="green" bg="green" />
      <BasicClassComponent color="red" bg="red" numberArray={numberArray} />

      <ClassComponent text="Sveiki visi" />
      <GenerateSquares />
    </div>
  );
}

export default App;

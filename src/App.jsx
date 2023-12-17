import styles from "./App.module.css";
import Display from "./components/Dispalay";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState(""); // state declaration

  const onBottonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue); // set new value to setCalVal
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} /> {/*passing props */}
      <ButtonsContainer onBottonClick={onBottonClick}></ButtonsContainer>
    </div>
  );
}

export default App;

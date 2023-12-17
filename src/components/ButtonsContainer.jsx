import styles from "./ButtonsContainer.module.css";
import PropTypes from "prop-types";

const ButtonsContainer = ({ onBottonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={styles.buttons}
          onClick={() => onBottonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

ButtonsContainer.propTypes = {
  onBottonClick: PropTypes.func.isRequired,
};

export default ButtonsContainer;

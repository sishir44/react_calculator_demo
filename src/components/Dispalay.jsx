import styles from "./Display.module.css";
import PropTypes from "prop-types";

const Display = ({ displayVal }) => {
  return (
    <input className={styles.display} type="text" value={displayVal} readOnly />
  );
};

Display.propTypes = {
  displayVal: PropTypes.string.isRequired, // You can change the type based on your requirements
};

export default Display;

import styles from "./SearchBar.module.css";
import Typed from "react-typed";

const SearchBar = () => {
  return (
    <div className={styles.typewritter}>
      <Typed
        strings={["Cerebro - Productivity booster with a brain..."]}
        typeSpeed={50}
      />
    </div>
  );
};

export default SearchBar;

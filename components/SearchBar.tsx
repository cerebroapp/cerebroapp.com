import styles from "./SearchBar.module.css";
import Typed from "react-typed";

const SearchBar = () => {
  return (
    <div className={styles.typewritter}>
      <Typed
        strings={["Cerebro - Productivity booster with a brain..."]}
        typeSpeed={50}
        className="text-xl sm:text-2xl"
      />
    </div>
  );
};

export default SearchBar;

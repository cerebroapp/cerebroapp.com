import styles from "./SearchBar.module.css";
import Typed from "react-typed";

const SearchBar = () => {
  return (
    <div className={styles.typewritter}>
      <Typed
        strings={["What is the best open source launcher", "How much coffee should I use to make a cup", "How to improve my day with launcher", "Open-source productivity app...", 'The app to improve your daily...']}
        typeSpeed={30}
        className="text-xl sm:text-2xl"
      />
    </div>
  );
};

export default SearchBar;

import { GoSearch } from "react-icons/go";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={styles.SearchBox}>
      <GoSearch />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBox;

import SearchItem from "./SearchItem";
import styles from "./SearchList.module.css";

const SearchList = () => {
  return (
    <div className={styles.SearchList}>
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </div>
  );
};

export default SearchList;

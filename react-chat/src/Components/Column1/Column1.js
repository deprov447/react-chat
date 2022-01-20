import { GoSettings } from "react-icons/go";
import SearchBox from "./SearchBox";

import styles from "./Column1.module.css";
import SearchList from "./SearchList/SearchList";

const Column1 = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.topDiv}>
        <h1>Chat</h1>
        <div>
          <div>
            <GoSettings />
          </div>
          <h3>Sort</h3>
        </div>
      </div>
      <div>
        <SearchBox />
      </div>
      <div>
        <SearchList />
      </div>
    </div>
  );
};

export default Column1;

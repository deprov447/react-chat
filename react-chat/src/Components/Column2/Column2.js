import { BsBell } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import ChatWindow from "./ChatWindow";

import styles from "./Column2.module.css";

const Column2 = () => {
  return (
    <div className={styles.Column2}>
      <div className={styles.topBar}>
        <BsBell />
        <div className={styles.profileBar}>
          <div className={styles.profileImg}></div>
          <h5 className="profileName">Prakash</h5>
          <IoIosArrowDown />
        </div>
      </div>
      <ChatWindow />
    </div>
  );
};

export default Column2;

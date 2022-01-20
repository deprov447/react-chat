import styles from "./ChatWindow.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const ChatWindow = () => {
  return (
    <div className={styles.ChatWindow}>
      <div className={styles.topBar}>
        <div className={styles.profileImg}></div>
        <h5>Esther Howard</h5>
        <BsThreeDotsVertical />
        <IoMdClose />
      </div>
    </div>
  );
};

export default ChatWindow;

import styles from "./ChatWindow.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import MainChat from "./MainChat";
import Avatar from "@chatscope/chat-ui-kit-react/dist/cjs/Avatar";
import avatarIco from "./dp.jpg";

const ChatWindow = () => {
  return (
    <div className={styles.ChatWindow}>
      <div className={styles.topBar}>
        {/* <div className={styles.profileImg}></div> */}
        <Avatar src={avatarIco} name={"Zoe"} status="available" size="medium" />

        <h5>Esther Howard</h5>
        <BsThreeDotsVertical />
        <IoMdClose />
      </div>
      <div style={{ padding: "20px" }}>
        <MainChat />
      </div>
    </div>
  );
};

export default ChatWindow;

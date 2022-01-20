import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import avatarIco from "./dp.jpg";
import myself from "./myself.jpeg";
import { useRef, useState } from "react";

const MainChat = () => {
  const inputRef = useRef();
  const [msgInputValue, setMsgInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([
      ...messages,
      {
        message,
        direction: "outgoing",
        position: "last",
      },
    ]);
    setMsgInputValue("");
    inputRef.current.focus();
  };

  return (
    <MainContainer>
      <div style={{ height: "65vh" }}>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: `Hii Prakash !\nFeels like it’s been a while! How are you? Do you have any time for the remainder of the week to help me with an ongoing  project?`,
                direction: "incoming",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name="Joe" />
            </Message>
            <Message
              model={{
                message: `Hii Easther, glad to hear from you, I’m fine, What about you? and how it’s going with the velocity website? off cours, I’ll help with this project`,
                direction: "outgoing",
                position: "last",
              }}
            >
              <Avatar src={myself} name="Akane" />
            </Message>{" "}
            <Message
              model={{
                message: `Super, I’ll get you the new brief for our own site over to you this evening, so you have time to read over I’m good thank you!`,
                direction: "incoming",
                position: "single",
              }}
            >
              <Avatar src={avatarIco} name="Joe" />
            </Message>
            <Message
              model={{
                message: `Of course I can, just catching up with steve on it and I’ll write out. Speak tomorrow! Let me know if you have any questions! `,
                direction: "outgoing",
                position: "last",
              }}
            >
              <Avatar src={myself} name="Akane" />
            </Message>
            <Message
              model={{
                message: `TRY SENDING A MSG !!!`,
                direction: "incoming",
                position: "last",
              }}
            >
              <Avatar src={avatarIco} name="Akane" />
            </Message>
            {messages.map((m, i) => (
              <>
                <Message key={i} model={m}>
                  <Avatar src={myself} name="Akane" />
                </Message>
                <Message
                  model={{
                    message: `dummy reply`,
                    direction: "incoming",
                    position: "single",
                  }}
                >
                  <Avatar src={avatarIco} name="Joe" />
                </Message>
              </>
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSend}
            onChange={setMsgInputValue}
            value={msgInputValue}
            ref={inputRef}
            attachButton={false}
          />
        </ChatContainer>
      </div>
    </MainContainer>
  );
};

export default MainChat;

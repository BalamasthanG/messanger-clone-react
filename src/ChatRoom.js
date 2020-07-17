import React, { useState, useEffect, useRef } from "react";
import Input from "@material-ui/core/Input";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
import "./ChatRoom.css";
import { db } from "./firebase";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function ChatRoom() {
  const history = useHistory();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (user === null) {
      history.push("/login");
    }
  }, [user]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="chatroom">
      <div className="messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} user={user} text={data}></Message>
          ))}
        </FlipMove>
        <div ref={messagesEndRef} />
      </div>

      <form className="chat">
        <Input
          className="chat__input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter the message..."
        />
        <IconButton
          disabled={!input}
          className={`chat__button ${input && "enable__chat"}`}
          type="submit"
          onClick={sendMessage}
        >
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default ChatRoom;

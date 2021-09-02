import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({channelName, channelId,chatRef}) => {
    const [user] = useAuthState(auth)
  const [inputMessage, setinputMessage] = useState("");
  
  
  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage:
        user.photoURL,
    });
    chatRef?.current?.scrollIntoView({
        behavior:"smooth"
      })
    setinputMessage("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={inputMessage}
          placeholder={`Message #${channelName ? channelName : 'ROOM'}`}
          onChange={(e) => {
            setinputMessage(e.target.value);
          }}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;

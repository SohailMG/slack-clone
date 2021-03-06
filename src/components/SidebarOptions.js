import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { auth, db } from "../firebase";

const SidebarOptions = ({ Icon, title, addChannelOption,id }) => {
  const [user] = useAuthState(auth);

  const dispatch = useDispatch()
  

  const addChannel = () => {
    const channelName = prompt("Please enter channel name ");
    if (channelName) {
      db.collection("rooms").add({ name: channelName,creator:user.displayName });
    }
  };
  const selectChannel = () => {
    if(id){
      dispatch(enterRoom({ 
        roomId:id
      }))

    }
  };
  return (
    <SidebarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionsChannel>
          <span>#</span>
          {title}
        </SidebarOptionsChannel>
      )}
    </SidebarOptionsContainer>
  );
};

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 14px;
  }
`;
const SidebarOptionsChannel = styled.h3`
    padding:10px 0 ;
    font-weight:300;

`;

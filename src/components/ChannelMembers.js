import React from 'react'
import styled from 'styled-components'

const ChannelMembers = ({user,userImage}) => {
    return (
        <ChannelMembersContainer>
              <img src={userImage} alt=""/>

        </ChannelMembersContainer>
    )
}

export default ChannelMembers

const ChannelMembersContainer=styled.div`
    display:flex;
    >img{
    width: 30px;
    height:30px;
    object-fit: contain;
    margin-left:-12px;
    border-radius:10px;
  }
`;

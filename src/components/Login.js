import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

const Login = () => {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error=>{
            alert(error.message);
        })


    }
  return (
    <LoginContainer>
      <InnerLoginContainer>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png"
          alt=""
        />
        <h1>Sign in to Slack Clone</h1>
        <p>Sohail.slack.com</p>
        <Button onClick={signIn}>
          Sign in with Google
        </Button>
      </InnerLoginContainer>
    </LoginContainer>
  );
};

export default Login;
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const InnerLoginContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button{
      margin-top: 50px;
      text-transform:inherit !important;
      background-color:#0a8d48;
      color:white;

      
  }
`;

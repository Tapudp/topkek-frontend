import React from "react";
import { tsExternalModuleReference } from '@babel/types';
import { spawn } from 'child_process';
import Styled from "styled-components";

export default function Profile() {
  const avatar = {
    borderRadius: "50%"
  };
  return (
    <ProfileContainer>
      <TopContainer>
        <AvatarContainer>
          <h3 className="username">Religous</h3>
          <img
            src="https://via.placeholder.com/150"
            alt="user avatar"
            style={avatar}
          />
            <a href="#">Send a Message</a>
            <a href="#">View Recent Posts</a>
            <a href="#">View Recent Topics</a>
          </AvatarContainer>
        <UserStatsContainer>
          <RandomStats>
            <JoinStats>
              <span>Member</span>
              <span>Joined: Jun 7 2019</span>
              <span>Posts: 205 (2.9 per day)</span>
            </JoinStats>
            <SocialStats>
              <span>Discord: No Info</span>
              <span>D2Jsp: No Info</span>
            </SocialStats>
          </RandomStats>
          <AnotherStats>
            <span>Joined: June 7 2019</span>
            <span>Posts: 205 (2.9 per day)</span>
            <span>Credits: 10</span>
            <span>Warn: 0%</span>
            <span>Clan: IHPK</span>
            <span>Local Time: 12:13pm</span>
            <span>Birthday: No Info</span>
            <span>Location: No Info</span>
            <span>Last Seen: 1 minute</span>
            <span>Last Post: 2 days ago</span>
          </AnotherStats>
        </UserStatsContainer>
      </TopContainer>

      <BottomContainer>
        <RandomContainer>
          <ContainerHolder>
            <label htmlFor="">Signature:</label>
            <button>Show Signature</button>
          </ContainerHolder>
          <SignatureTextArea type="text" />
        </RandomContainer>
        <RandomContainer>
        <ContainerHolder>
          <label htmlFor="">Notes:</label>
          <button>Show Profile</button>
          </ContainerHolder>
          <SignatureTextArea type="text" />
        </RandomContainer>
        <FriendsList>
          <label htmlFor="">Top 3 Friends</label>
          <a href="#">minorblood</a>
          <a href="#">VTMatt</a>
          <a href="#">mike14e</a>
          <a href="#">Manage Friends List (0 Pending)</a>
        </FriendsList>
      </BottomContainer>
    </ProfileContainer>
  );
}

const ProfileContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 5rem;
`;

const TopContainer = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const AvatarContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
`;

const UserStatsContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const RandomStats = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items:center;
  justify-content: center;
`;

const JoinStats = Styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialStats = Styled.div`
  display: flex;
  flex-direction: row;
`;

const AnotherStats = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding-left: 2rem;
  border-left: 3px solid #d6d6d6;
  width: 50%;
`;

const BottomContainer = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const RandomContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10rem;
`;

const ContainerHolder = Styled.div`
  display: flex;
  flex-direction: row;
`;

const SignatureTextArea = Styled.textarea`
  width: 100%;
`;

const FriendsList = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
`;
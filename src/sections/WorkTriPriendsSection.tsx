import React from "react";
import ReactPlayer from "react-player";
import { CommonLayout, CommonLayoutImg } from "../../styles/CommonStyles";
import {
  PhoneContainer,
  PhoneImg,
  PhonePlayerWrapper,
  WorkTriPriendscontentContainer,
} from "../../styles/WorkTriPriendSectionStyles";
import { MainTextComponent } from "../components/common";

type Props = {};

const WorkTriPriendsSection = (props: Props) => {
  const title = "Work at WeAreFriends";
  const texts = [
    "통번역앱 (React-Native)",
    "통번역앱 Landing-Page (Next.js)",
    "TriPriend Landing-Page (Next.js)",
    "TriPreind 2.1 (React-Native)",
    "TriPriend 2.0 (React-Native, Django)",
  ];
  return (
    <>
      <CommonLayout>
        <CommonLayoutImg src="./images/main00.jpg" />
        <WorkTriPriendscontentContainer>
          <MainTextComponent title={title} texts={texts} />
          <PhoneContainer>
            <PhonePlayerWrapper>
              <ReactPlayer
                url={"https://youtu.be/tuZN4P_-3tk"}
                width="330px"
                height="690px"
                muted={true}
                controls={true}
              ></ReactPlayer>
            </PhonePlayerWrapper>
            <PhoneImg src="./images/phone.png" />
          </PhoneContainer>
        </WorkTriPriendscontentContainer>
      </CommonLayout>
    </>
  );
};

export default WorkTriPriendsSection;

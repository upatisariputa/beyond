import React from "react";
import { CommonLayout, CommonLayoutImg } from "../../styles/CommonStyles";
import { WorkOnGoingcontentContainer } from "../../styles/WorkOnGoingSectionStyles";
import { MainTextComponent } from "../components/common";

type Props = {};

const WorkOnGoingSection = (props: Props) => {
  const layoutImg = "./images/main02.jpg";
  const title = "Ongoing Project";
  const texts = [
    "Community Web/App IT Gear Review Platform",
    "(React, React-Native, Express, PostgreSQL)",
  ];

  return (
    <>
      <CommonLayout>
        <CommonLayoutImg src="./images/main02.jpg" />
        <WorkOnGoingcontentContainer>
          <MainTextComponent title={title} texts={texts} />
        </WorkOnGoingcontentContainer>
      </CommonLayout>
    </>
  );
};

export default WorkOnGoingSection;

import React from "react";
import { CommonCircle } from "../../styles/CommonStyles";
import {
  OutroContentContainer,
  OutroLayout,
  OutroLink,
  OutroPhotoImg,
  OutroText,
  OutroTitleWrapper,
} from "../../styles/OutroSectionStyles";

type Props = {};

const OutroSection = ({}: Props) => {
  const outroTexts = [
    "Name: 이기훈",
    "MAIL: upatisariput@gmail.com",
    "PHONE: 010-6614-1560",
  ];

  const outroTextMapping = outroTexts.map((text, index) => (
    <OutroText key={index}>{text}</OutroText>
  ));

  return (
    <>
      <OutroLayout>
        <OutroPhotoImg src="/images/me.jpg"></OutroPhotoImg>
        <OutroContentContainer>
          <OutroTitleWrapper>
            <CommonCircle />
            <OutroText isTitle={true}>CONTACT ME</OutroText>
          </OutroTitleWrapper>
          {outroTextMapping}
          <OutroText>
            GITHUB:{"  "}
            <OutroLink href="https://github.com/upatisariputa">
              https://github.com/upatisariputa
            </OutroLink>{" "}
          </OutroText>

          <OutroText>
            BLOG:{"  "}
            <OutroLink href="https://velog.io/@sitaruta">
              https://velog.io/@sitaruta
            </OutroLink>
          </OutroText>
          <OutroText>
            이 페이지는 Next.js로 만들어 졌으며 제 Github에서 소스코드를
            확인하실수 있습니다.
          </OutroText>
        </OutroContentContainer>
      </OutroLayout>
    </>
  );
};

export default OutroSection;

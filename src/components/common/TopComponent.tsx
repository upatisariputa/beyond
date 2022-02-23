import ReactFullpage from "@fullpage/react-fullpage";
import Link from "next/link";
import React from "react";
import {
  TopButtonImg,
  TopButtonsWrapper,
  TopButtonWrapper,
  TopIconImg,
  TopIconWrapper,
  TopLayout,
} from "../../../styles/TopStyles";

type Props = {
  currentPage: number;
  navButtonNumber: number;
  handleNavButtonNumber: (index: number) => void;
};

const TopComponent = (props: Props) => {
  const { currentPage, navButtonNumber, handleNavButtonNumber } = props;

  return (
    <>
      <TopLayout>
        <TopIconWrapper>
          <TopIconImg src="/images/beyondTheCode.png"></TopIconImg>
        </TopIconWrapper>
        <TopButtonsWrapper>
          <TopButtonWrapper
            onMouseOver={() => handleNavButtonNumber(0)}
            onMouseLeave={() => handleNavButtonNumber(currentPage)}
          >
            <a href="/#IntroSection">
              <TopButtonImg
                src={
                  navButtonNumber === 0 || currentPage === 0
                    ? "/images/aboutWhite.png"
                    : "/images/about.png"
                }
              />
            </a>
          </TopButtonWrapper>
          <TopButtonWrapper
            onMouseOver={() => handleNavButtonNumber(1)}
            onMouseLeave={() => handleNavButtonNumber(currentPage)}
          >
            <a href="/#WorkTriPriendsSection">
              <TopButtonImg
                src={
                  navButtonNumber === 1 ||
                  navButtonNumber === 2 ||
                  navButtonNumber === 3 ||
                  currentPage === 1 ||
                  currentPage === 2 ||
                  currentPage === 3
                    ? "/images/workWhite.png"
                    : "/images/work.png"
                }
              />
            </a>
          </TopButtonWrapper>
          <TopButtonWrapper
            onMouseOver={() => handleNavButtonNumber(4)}
            onMouseLeave={() => handleNavButtonNumber(currentPage)}
          >
            <a href="/#OutroSection">
              <TopButtonImg
                src={
                  navButtonNumber === 4 || currentPage === 4
                    ? "/images/contactWhite.png"
                    : "/images/contact.png"
                }
              />
            </a>
          </TopButtonWrapper>
        </TopButtonsWrapper>
      </TopLayout>
    </>
  );
};

export default TopComponent;

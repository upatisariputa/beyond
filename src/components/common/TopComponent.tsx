import Link from "next/link";
import React from "react";
import {
  TopButtonImg,
  TopButtonsWrapper,
  TopButtonWrapper,
  TopIconImg,
  TopIconWrapper,
  TopLayout,
  TopLink,
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
            <TopLink href="/#IntroSection">
              <TopButtonImg
                src={
                  navButtonNumber === 0 || currentPage === 0
                    ? "/images/aboutWhite.png"
                    : "/images/about.png"
                }
              />
            </TopLink>
          </TopButtonWrapper>
          <TopButtonWrapper
            onMouseOver={() => handleNavButtonNumber(1)}
            onMouseLeave={() => handleNavButtonNumber(currentPage)}
          >
            <TopLink href="/#WorkTriPriendsSection">
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
            </TopLink>
          </TopButtonWrapper>
          <TopButtonWrapper
            onMouseOver={() => handleNavButtonNumber(4)}
            onMouseLeave={() => handleNavButtonNumber(currentPage)}
          >
            <TopLink href="/#OutroSection">
              <TopButtonImg
                src={
                  navButtonNumber === 4 || currentPage === 4
                    ? "/images/contactWhite.png"
                    : "/images/contact.png"
                }
              />
            </TopLink>
          </TopButtonWrapper>
        </TopButtonsWrapper>
      </TopLayout>
    </>
  );
};

export default TopComponent;

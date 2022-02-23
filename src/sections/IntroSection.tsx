import React, { MouseEvent, useState } from "react";
import { changingItemsProps } from "../../@types/fullpage";
import { CommonLayout, CommonLayoutImg } from "../../styles/CommonStyles";
import {
  InfjImg,
  IntroContent,
  IntroPointArea,
  JavaScriptImg,
  NodejsImg,
  ReactImg,
  TypeScriptImg,
} from "../../styles/IntroSectionStyles";

type Props = {
  changingItems: changingItemsProps;
};

const IntroSection = (props: Props) => {
  const { origin } = props.changingItems;

  const [showMeArea, setShowMeArea] = useState<boolean>(false);

  const enterPointMeArea = () => {
    !showMeArea && setShowMeArea(true);
  };

  const outsiderAreaClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    showMeArea && setShowMeArea(false);
  };

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <CommonLayout onClick={outsiderAreaClick}>
        <CommonLayoutImg
          src={showMeArea ? "./images/introBlur.jpg" : "./images/intro.jpg"}
        />
        <IntroPointArea
          onClick={stopPropagation}
          onMouseOver={enterPointMeArea}
        >
          {showMeArea && (
            <>
              <InfjImg src="/images/infj.png" />
              <JavaScriptImg src="/images/javaScript.png" />
              <TypeScriptImg src="/images/typeScript.png" />
              <ReactImg src="/images/react.png" />
              <NodejsImg src="/images/nodejs.png" />
            </>
          )}
        </IntroPointArea>
      </CommonLayout>
    </>
  );
};

export default IntroSection;

import React, { useState } from "react";
import { TopButtonImg, TopButtonWrapper } from "../../styles/TopStyles";

type Props = {
  buttonNumber: number;
  buttonSrc: string;
};

const TopButtonElement = ({ buttonNumber, buttonSrc }: Props) => {
  const [showWhite, setShowWhite] = useState<number>(buttonNumber);

  const enterTargetArea = (target: number) => {
    setShowWhite(target);
  };
  return (
    <>
      <TopButtonWrapper
        onMouseOver={() => enterTargetArea(buttonNumber)}
        onMouseLeave={() => enterTargetArea(0)}
      >
        <TopButtonImg
          src={showWhite ? buttonSrc + "white.png" : buttonSrc + ".png"}
        />
      </TopButtonWrapper>
    </>
  );
};

export default TopButtonElement;

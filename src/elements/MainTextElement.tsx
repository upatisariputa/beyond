import React from "react";
import { MainText } from "../../styles/elementStyles/MainTextElementStyles";

type Props = {
  text: string;
  isTitle?: boolean;
};

const MainTextElement = (props: Props) => {
  const { isTitle, text } = props;

  return (
    <>
      <MainText isTitle={isTitle}>{text}</MainText>
    </>
  );
};

export default MainTextElement;

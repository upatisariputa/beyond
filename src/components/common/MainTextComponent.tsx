import React from "react";
import {
  MainTextContainer,
  MainTitleCircle,
  MainTitleWrapper,
} from "../../../styles/componentStyles/MainTextComponentStyles";
import { MainTextElement } from "../../elements";

type Props = {
  title: string;
  texts: Array<string>;
};

const MainTextComponent = (props: Props) => {
  const { title, texts } = props;
  const mainTextsMapping = texts.map((text, index) => (
    <MainTextElement key={index} text={text} />
  ));

  return (
    <>
      <MainTextContainer>
        <MainTitleWrapper>
          <MainTitleCircle />
          <MainTextElement isTitle={true} text={title} />
        </MainTitleWrapper>
        {mainTextsMapping}
      </MainTextContainer>
    </>
  );
};

export default MainTextComponent;

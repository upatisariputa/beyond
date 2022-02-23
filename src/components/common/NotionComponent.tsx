import Link from "next/link";
import React, { useState } from "react";
import {
  NotionBubbleContainer,
  NotionBubbleImg,
  NotionBubbleText,
  NotionContainer,
  NotionImg,
  NotionBubbleTextContainer,
} from "../../../styles/componentStyles/NotionComponentStyles";

import useInterval from "../../hooks/useInterval";

type Props = {};

const NotionComponent = (props: Props) => {
  const [showNotionBubble, setShowNotionBubble] = useState<boolean>(true);

  useInterval(() => {
    setShowNotionBubble(!showNotionBubble);
  }, 1000);

  return (
    <>
      <NotionContainer>
        {showNotionBubble && (
          <NotionBubbleContainer>
            <NotionBubbleImg src="/images/bubble.png" />
            <NotionBubbleTextContainer>
              <NotionBubbleText>Notion 이력서에서는</NotionBubbleText>
              <NotionBubbleText>
                더 많은 정보를 확인할 수 있습니다.
              </NotionBubbleText>
            </NotionBubbleTextContainer>
          </NotionBubbleContainer>
        )}
        <Link
          href="https://gihn.notion.site/Lee-Gihoon-d0bd5a9f39fc44dfbc33a9d483d57abd"
          passHref={true}
        >
          <NotionImg src="/images/notion.png" />
        </Link>
      </NotionContainer>
    </>
  );
};

export default NotionComponent;

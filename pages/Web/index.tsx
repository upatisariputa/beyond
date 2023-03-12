import React, { useCallback, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import {
  IntroSection,
  OutroSection,
  WorkFlybitSVGSection,
  WorkFlybitModule,
  WorkFlybitTraidingView,
  WorkTriPriendsSection,
  WorkFlybitSection,
} from "../../src/sections";
import TopComponent from "../../src/components/common/TopComponent";
import { changingItemsProps } from "../../@types/fullpage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NotionComponent } from "../../src/components/common";

const Web = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [navButtonNumber, setNavButtonNumber] = useState(0);
  const [changingItems, setChangingItems] = useState<changingItemsProps>({
    origin: {
      index: 0,
      anchor: [""],
      isFirst: false,
      isLast: false,
    },
    destination: {
      index: 0,
      anchor: [""],
      isFirst: false,
      isLast: false,
    },
    direction: "down",
  });

  const anchors = [
    "IntroSection",
    "WorkFlybitSection",
    "WorkFlybitSVGSection",
    "WorkFlybitModule",
    "WorkFlybitTraidingView",
    "WorkTriPriendsSection",
    "OutroSection",
  ];

  const arrSections = [
    IntroSection,
    WorkFlybitSection,
    WorkFlybitSVGSection,
    WorkFlybitModule,
    WorkFlybitTraidingView,
    WorkTriPriendsSection,
    // WorkCodeStatesSection,
    // WorkOnGoingSection,
  ];

  const handleNavButtonNumber = useCallback((index: number) => {
    setNavButtonNumber(index);
  }, []);

  const onLeave = useCallback(
    (origin, destination, direction) => {
      const items = { origin, destination, direction };
      setChangingItems(items);
      window.setTimeout(setCurrentPage, 250, destination.index);
      window.setTimeout(handleNavButtonNumber, 250, destination.index);
    },
    [setCurrentPage, handleNavButtonNumber]
  );

  const mappingSections = arrSections.map((element, index) => (
    <div key={index.toString() + element.name} className="section">
      {React.createElement(element, { changingItems })}
    </div>
  ));

  return (
    <>
      <TopComponent
        currentPage={currentPage}
        handleNavButtonNumber={handleNavButtonNumber}
        navButtonNumber={navButtonNumber}
      />
      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        anchors={anchors}
        onLeave={(origin, destination, direction) =>
          onLeave(origin, destination, direction)
        }
        fixedElements="Top"
        render={() => {
          return (
            <>
              <ReactFullpage.Wrapper>
                {mappingSections}
                <div className="section fp-auto-height">
                  <OutroSection />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      ></ReactFullpage>
      {/* <NotionComponent /> */}
    </>
  );
};

export default Web;

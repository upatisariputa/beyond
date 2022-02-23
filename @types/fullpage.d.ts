export type anchorProps = Array<string>;

export interface changingItemProps {
  anchor: anchorProps;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface changingItemsProps {
  origin: changingItemProps;
  destination: changingItemProps;
  direction: "down" | "up";
}

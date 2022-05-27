import React, { useMemo } from "react";
import { DiceEvent } from "../../../../types/events";
import { Image } from "./EventImage.style";
export type EventImageProps = {
  variant: keyof DiceEvent["event_images"];
  eventImages: DiceEvent["event_images"];
};

const EventImage = (props: EventImageProps) => {
  const { variant, eventImages } = props;
  const imageUrl = useMemo(
    () => eventImages[variant] || "",
    [eventImages, variant]
  );
  return <Image src={imageUrl} />;
};

export default EventImage;

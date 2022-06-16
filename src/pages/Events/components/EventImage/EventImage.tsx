import React, { useCallback, useMemo, useState } from "react";

import { DiceEvent } from "../../../../types/events";
import { Image, LoadingTile } from "./EventImage.style";

export type EventImageProps = {
  variant: keyof DiceEvent["event_images"];
  eventImages: DiceEvent["event_images"];
  columnWidth?: number;
};

const EventImage = (props: EventImageProps) => {
  const { variant, eventImages, columnWidth } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSetIsLoaded = useCallback(
    (value: boolean) => setIsLoaded(value),
    []
  );
  const imageUrl = useMemo(
    () => eventImages[variant] || "",
    [eventImages, variant]
  );

  return (
    <div>
      {!isLoaded && <LoadingTile height={columnWidth} />}
      <Image
        isLoaded={isLoaded}
        src={imageUrl}
        onLoad={() => handleSetIsLoaded(true)}
      />
    </div>
  );
};

export default EventImage;

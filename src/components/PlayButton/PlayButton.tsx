import React from "react";
import { ButtonProps } from "../Button/Button";
import PlayIcon from "../PlayIcon";
import { FloatingContainer, PlayButtonContainer } from "./PlayButton.style";
import { styled } from "../../theme";

const PlayButton = (props: ButtonProps) => {
  const { onClick, style } = props;
  return (
    <PlayButtonContainer onClick={onClick} style={style}>
      <PlayIcon />
    </PlayButtonContainer>
  );
};

export const FloatingPlayButton = (props: ButtonProps) => {
  return (
    <FloatingContainer>
      <PlayButton {...props} />
    </FloatingContainer>
  );
};

export default PlayButton;

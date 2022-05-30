import { styled, WithDiceTheme } from "../../../../theme";
import { percentToHex } from "../../../../utils";

export type ImageProps = WithDiceTheme & {
  isLoaded?: boolean;
};

export type LoadingTileProps = WithDiceTheme & {
  height?: number;
};

export const LoadingTile = styled.div<LoadingTileProps>(
  ({ theme, height }) => `
  background-color: ${theme.palette.appSurfaceContrast + percentToHex(10)};
  height: ${height}px;
  width: 100%;
`
);

export const Image = styled.img<ImageProps>(
  ({ isLoaded }) => `
  width: 0;
  opacity: 0;
  width: 100%;
  ${
    isLoaded
      ? `
    transition: all .6s ease-in;
    opacity: 1;
  `
      : ""
  }
`
);

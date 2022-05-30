import styled, {
  ThemedBaseStyledInterface,
  useTheme as useThemeBase,
} from "styled-components";

const PALETTE = {
  primary: "#3C74FF",
  cardSurface: "#F2F2F2",
  appSurface: "#FFFFFF",
  appSurfaceContrast: "#000000",
  textPrimary: "#000000",
  textContrast: "#FFFFFF",
};

const BASE_UNIT = 8;
const APP_FONT_FAMILY = "arial";

const spacing = (multiple: number) => multiple * BASE_UNIT;

const theme = {
  palette: PALETTE,
  button: {
    backgroundColor: PALETTE.primary,
    // Do this globally?
    fontFamily: APP_FONT_FAMILY,
    color: PALETTE.textContrast,
    fontSize: spacing(1.75),
    paddingTop: spacing(1.5),
    paddingRight: spacing(2.25),
    paddingleft: spacing(2.25),
    paddingBottom: spacing(1.25),
    letterSpacing: "5%",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  header: {
    position: "fixed",
    backgroundColor: PALETTE.appSurfaceContrast,
    left: 0,
    right: 0,
    padding: spacing(2),
    width: "100vw",
    height: spacing(7.5),
  },
  body: {
    maxWidth: 1100,
    padding: spacing(2),
  },
  spacing,
};

export type DiceTheme = typeof theme;

// for use typing the theme declaration in styled-components
export type WithDiceTheme = {
  theme: DiceTheme;
};

// this allows typing of the theme object
export const diceStyled = styled as any as ThemedBaseStyledInterface<DiceTheme>;
export const useTheme = useThemeBase as any as () => DiceTheme;
export default theme;

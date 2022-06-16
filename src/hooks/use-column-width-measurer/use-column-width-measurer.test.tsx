import React from "react";
import { renderHook } from "@testing-library/react-hooks/dom";
import { FunctionComponent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { diceTheme } from "../../theme";
import useColumnWidthMeasurer from "./use-column-width-measurer";

const makeWrapper =
  (): FunctionComponent =>
  ({ children }: { children?: ReactNode }) =>
    <ThemeProvider theme={diceTheme}>{children}</ThemeProvider>;

describe("Column width measurer", () => {
  it("Should return the width of each column", () => {
    const { result } = renderHook(() => useColumnWidthMeasurer(3, 2), {
      wrapper: makeWrapper(),
    });

    expect(result.current).toBe(309.3333333333333);
  });
});

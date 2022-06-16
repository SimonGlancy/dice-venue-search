import { renderHook } from "@testing-library/react-hooks/dom";

import useColumiseData from "./use-columnise-data";

const mediaQueries = [
  "(min-width: 1500px)",
  "(min-width: 1000px)",
  "(min-width: 560px)",
];
const columnNumbers = [3, 3, 2];
const defaultColumn = 1;

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("Columnise data", () => {
  it("returns 3 columns for large screens", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(min-width: 1500px)",
      media: "",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    const { result } = renderHook(() =>
      useColumiseData({ mediaQueries, columnNumbers, defaultColumn, items })
    );

    expect(result.current.columnCount).toBe(3);
    expect(result.current.columns).toEqual({
      0: [1, 4, 7],
      1: [2, 5, 8],
      2: [3, 6, 9],
    });
  });

  it("returns 2 columns for medium screens", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(min-width: 560px)",
      media: "",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    const { result } = renderHook(() =>
      useColumiseData({ mediaQueries, columnNumbers, defaultColumn, items })
    );

    expect(result.current.columnCount).toBe(2);
    expect(result.current.columns).toEqual({
      0: [1, 3, 5, 7, 9],
      1: [2, 4, 6, 8],
    });
  });

  it("returns 2 columns for medium screens", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(min-width: 500px)",
      media: "",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    const { result } = renderHook(() =>
      useColumiseData({ mediaQueries, columnNumbers, defaultColumn, items })
    );

    expect(result.current.columnCount).toBe(1);
    expect(result.current.columns).toEqual({
      0: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
  });
});

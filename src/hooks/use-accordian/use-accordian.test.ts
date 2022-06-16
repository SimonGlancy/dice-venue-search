import { renderHook, act } from "@testing-library/react-hooks/dom";
import useAccordian from "./use-accordian";

describe("should use accordian", () => {
  it("Should be collapsed on mount", () => {
    const { result } = renderHook(() => useAccordian());

    expect(result.current.collapsed).toBe(true);
    expect(typeof result.current.collapse).toBe("function");
  });

  it("Should allow the user to toggle the collapsed", () => {
    const { result } = renderHook(() => useAccordian());
    expect(result.current.collapsed).toBe(true);
    act(() => {
      result.current.toggle();
    });

    expect(result.current.collapsed).toBe(false);
    expect(typeof result.current.toggle).toBe("function");
  });

  it("Should allow the user to set to collapsed", () => {
    const { result } = renderHook(() => useAccordian(false));
    expect(result.current.collapsed).toBe(false);
    act(() => {
      result.current.collapse();
    });

    expect(result.current.collapsed).toBe(true);
    expect(typeof result.current.collapse).toBe("function");
  });

  it("Should allow the user to set to expanded", () => {
    const { result } = renderHook(() => useAccordian());
    expect(result.current.collapsed).toBe(true);
    act(() => {
      result.current.expand();
    });

    expect(result.current.collapsed).toBe(false);
    expect(typeof result.current.expand).toBe("function");
  });
});

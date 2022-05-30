import { useMemo } from "react";
import { useWindowSize } from "use-hooks";
import { useTheme } from "../../theme";

const useColumnWidthMeasurer = (columns: number, gap: number = 2) => {
  const { width } = useWindowSize();

  const theme = useTheme();
  const maxWidth = useMemo(() => theme.body.maxWidth, [theme]);
  const gapInPx = useMemo(() => theme.spacing(gap), [theme, gap]);
  const paddingInPx = useMemo(() => theme.body.padding, [theme.body.padding]);
  const horizontalPadding = useMemo(() => paddingInPx * 2, [paddingInPx]);
  const gaps = useMemo(() => columns + 1, [columns]);
  const gapWidth = useMemo(() => gaps * gapInPx, [gaps, gapInPx]);
  const canvasWidth = useMemo(() => {
    const totalWidth = width >= maxWidth ? maxWidth : width;
    const widthLessPadding = totalWidth - horizontalPadding;
    return widthLessPadding;
  }, [horizontalPadding, maxWidth, paddingInPx, width]);

  const columnWidth = useMemo(() => {
    const total = canvasWidth - gapWidth;
    return total / columns;
  }, [gapWidth, canvasWidth]);

  return columnWidth;
};

export default useColumnWidthMeasurer;

import { useRef, useState, useEffect } from "react";

/**
 * ScrollBox - A scrollable container for use inside Card components
 *
 * @description
 * Provides a scrollable area with optional max height and scroll hint.
 * Use as a child of Card to make long content scrollable.
 *
 * @param {React.ReactNode} children - Content to display inside the scroll area
 * @param {number|string} [maxHeight=300] - Maximum height before scrolling (px or CSS value)
 * @param {boolean} [showHint=true] - Whether to show "Scroll for more" hint
 *
 * @example
 * <Card title="Gaming">
 *   <ScrollBox maxHeight={200}>
 *     <p>Long content here...</p>
 *   </ScrollBox>
 * </Card>
 *
 * @author Livepeer Documentation Team
 */
export const ScrollBox = ({
  children,
  maxHeight = 300,
  showHint = true,
  style,
}) => {
  const contentRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const maxHeightPx =
          typeof maxHeight === "number"
            ? maxHeight
            : parseInt(maxHeight, 10) || 300;
        setIsOverflowing(contentRef.current.scrollHeight > maxHeightPx);
      }
    };
    checkOverflow();
    // Re-check on window resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [maxHeight, children]);

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={contentRef}
        style={{
          maxHeight:
            typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
          overflowY: "auto",
          paddingRight: 4,
          ...style,
        }}
        onScroll={(e) => {
          const el = e.target;
          const atBottom =
            el.scrollHeight - el.scrollTop <= el.clientHeight + 10;
          const hint = el.parentNode.querySelector("[data-scroll-hint]");
          if (hint) hint.style.opacity = atBottom ? "0" : "1";
        }}
      >
        {children}
      </div>
      {showHint && isOverflowing && (
        <div
          data-scroll-hint
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            marginTop: 8,
            transition: "opacity 0.2s",
          }}
        >
          Scroll for more ↓
        </div>
      )}
    </div>
  );
};

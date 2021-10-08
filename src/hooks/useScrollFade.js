import { useRef, useCallback, useEffect } from "react";

export const useScrollFade = (
  direction = "down",
  duration = 1.4,
  delay = 0.8
) => {
  const dom = useRef();
  const handleDirection = (direction) => {
    switch (direction) {
      case "up":
        return "0";
      case "down":
        return "0";
      default:
        break;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.opacity = 0.8;
        current.style.transitionDelay = `${delay}`;
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.9 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: handleDirection(direction),
    },
  };
};

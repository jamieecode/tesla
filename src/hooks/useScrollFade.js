import { useRef, useCallback, useEffect } from "react";

export const useScrollFade = (direction = "down", duration = 1, delay = 0) => {
  const dom = useRef();
  const handleDirection = (direction) => {
    switch (direction) {
      case "up":
        return "0";
      case "down":
        return "0.5";
      default:
        break;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.opacity = 0.8;
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

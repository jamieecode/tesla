import { useRef, useCallback, useEffect } from "react";

export const useScrollFade = (direction = "up", duration = 1, delay = 0) => {
  const dom = useRef();
  const handleDirection = (direction) => {
    switch (direction) {
      case "up":
        return "translateY(50%)";
      case "down":
        return "translateY(-50%)";
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
        current.style.transitionDelay = `${delay}`;
        current.style.opacity = 1;
        current.style.transform = "translate(0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.6 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

import { useEffect, useRef } from "react";

export function useStaggerReveal(staggerMs = 150) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".stagger-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("stagger-item--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * staggerMs}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [staggerMs]);

  return containerRef;
}
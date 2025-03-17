"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setAnimationDirection();
      setAnimationSpeed();
      setStart(true);
    }
  }, []);

  function setAnimationDirection() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }

  function setAnimationSpeed() {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full max-w-7xl overflow-hidden ", // Use a custom bg class
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max flex-nowrap gap-x-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:pause-animation"
        )}
        style={{
          animation: `scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite`,
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[350px] md:w-[450px] shrink-0 rounded-2xl shadow-lg"
            style={{
              background:
                "linear-gradient(180deg, rgba(30,41,59,1), rgba(15,23,42,1))",
            }}
          >
            <blockquote className="px-8 py-6">
              <span className="relative z-20 text-sm leading-relaxed text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-normal text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-normal text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      {/* Styles for animation */}
      <style jsx>{`
        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
        .pause-on-hover:hover {
          animation-play-state: paused !important;
        }
        /* Solid dark background */
        .bg-dark {
          background-color: #0f172a; /* or #000, or any color you prefer */
        }
      `}</style>
    </div>
  );
};

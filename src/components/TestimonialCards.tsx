"use client";

import musicSchoolTestimonials from "@/data/musicSchoolTestimonials";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center items-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      {/* Grid overlay for dark mode */}
      <style jsx>{`
        /* Only apply the grid overlay in dark mode */
        @media (prefers-color-scheme: dark) {
          .dark-bg-grid::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            /*
              Two-layer grid (horizontal & vertical lines).
              Lower alpha = more subtle lines.
              Increase background-size for more spacing.
            */
            background-image: 
              linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              );
            background-size: 40px 40px; /* Adjust spacing as desired */
            pointer-events: none;
            z-index: 0;
          }
        }
      `}</style>

      {/* Attach the grid overlay class */}
      <div className="absolute inset-0 dark-bg-grid pointer-events-none" />
    </div>
  );
};

export default TestimonialCards;

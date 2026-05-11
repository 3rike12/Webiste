import { useEffect, useRef, useState } from "react";

const Mission = () => {
  const greenRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = greenRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Start revealing when the element enters the bottom of viewport
      // Fully revealed when it reaches the middle
      const start = windowHeight;
      const end = windowHeight * 0.3;
      const current = rect.top;

      if (current >= start) {
        setProgress(0);
      } else if (current <= end) {
        setProgress(1);
      } else {
        setProgress((start - current) / (start - end));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-[1106px] mx-auto text-center">
        <p className="text-[#829E04] text-[14px] md:text-[20px] font-semibold tracking-[0.2em] uppercase mb-6 md:mb-8">
          OUR MISSION
        </p>

        <p className="text-[#1A1A1A] text-xl sm:text-2xl md:text-[40px] font-bold leading-snug mb-6 md:mb-10">
          At 3riKE, we are dedicated to creating shared prosperity through
          sustainable mobility and transparent finance across Africa. We empower
          young drivers with affordable electric three/two wheelers and a clear
          path to ownership, while delivering predictable returns to everyday
          investors through real asset-backed opportunities.
        </p>

        <p className="text-[#1A1A1A] text-xl sm:text-2xl md:text-[40px] font-bold leading-snug">
          Driven by innovation and transparency, our battery-swapping technology
          eliminates downtime, enabling drivers to earn more consistently.{" "}
          <span
            ref={greenRef}
            style={{
              backgroundImage: `linear-gradient(to right, #829E04 ${progress * 100}%, #1A1A1A ${progress * 100}%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transition: "background-image 0.1s ease-out",
            }}
          >
            We combine clean electric mobility with secure, verifiable financial
            systems that build trust, reduce disputes, and unlock credit and
            savings for all participants.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Mission;

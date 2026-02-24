import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import centerImg from "../assets/images/build-once-scale/center.png";
import leftImg from "../assets/images/build-once-scale/left-peaking.png";
import rightImg from "../assets/images/build-once-scale/right-peaking.png";
import pattern from "../assets/images/pattern-large.png";

// Icons
import iconOffPlan from "../assets/images/build-once-scale/icons/build once-icon - off plan.svg";
import iconBroker from "../assets/images/build-once-scale/icons/build once-icon - broker campagins.svg";
import iconCommunity from "../assets/images/build-once-scale/icons/build once-icon - community launches.svg";
import iconTower from "../assets/images/build-once-scale/icons/build once-icon - tower phases.svg";
import iconInternational from "../assets/images/build-once-scale/icons/build once-icon - international investor.svg";
import { SidePattern } from "./SidePattern";

gsap.registerPlugin(ScrollTrigger);

export const BuildOnceScale = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLImageElement>(null);
  const rightImgRef = useRef<HTMLImageElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const left = leftImgRef.current;
    const right = rightImgRef.current;
    const footer = footerRef.current;

    if (section) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });

      if (header) {
        tl.fromTo(
          header,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        );
      }

      // Animate images sliding out slightly
      if (left && right) {
        tl.fromTo(
          left,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        );
        tl.fromTo(
          right,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "<",
        );
      }

      // Animate pills popping in
      pillsRef.current.forEach((pill, index) => {
        if (pill) {
          tl.fromTo(
            pill,
            { scale: 0.8, opacity: 0, y: 20 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "back.out(1.5)",
            },
            `-=${0.4 - index * 0.05}`,
          );
        }
      });

      if (footer) {
        tl.fromTo(
          footer,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2",
        );
      }
    }
  }, []);

  const pills = [
    {
      icon: iconOffPlan,
      text: "Off-Plan Projects",
      className: "top-[5%] left-[2%] md:top-[2%] md:left-[-15%] z-20",
    },
    {
      icon: iconBroker,
      text: "Broker Campaigns",
      className: "top-[40%] left-[2%] md:top-[55%] md:left-[-12%] z-20",
    },
    {
      icon: iconCommunity,
      text: "Community Launches",
      className: "top-[20%] right-[2%] md:right-[-15%] z-20",
    },
    {
      icon: iconTower,
      text: "Tower Phases",
      className: "top-[55%] right-[2%] md:top-[50%] md:right-[-12%] z-20",
    },
    {
      icon: iconInternational,
      text: "International Investor Targeting",
      className:
        "bottom-[5%] left-0 right-0 mx-auto md:left-auto md:mx-0 md:bottom-[0%] md:right-[5%] z-20",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-8 sm:py-16 md:py-20 overflow-hidden px-4 md:px-8 bg-contain bg-repeat"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <SidePattern />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
        <div
          ref={headerRef}
          className="flex flex-col gap-2 items-center text-center relative w-full mb-0 md:mb-12 z-10"
        >
          <div className="bg-white/10 border border-white/10 flex items-center justify-center px-[12px] md:px-[18px] py-[6px] md:py-[8px] rounded-[4px] shrink-0">
            <span className="font-sans text-[10px] md:text-[12px] text-[#FFFAFA]">
              Built for decision-makers who need results
            </span>
          </div>
          <h2 className="font-sans font-semibold text-2xl md:text-5xl text-white leading-tight">
            Build Once. Scale Across Projects.
          </h2>
          <p className="font-sans font-medium text-[14px] md:text-[16px] text-white/90 leading-[22px] md:leading-[24px]">
            We create a modular landing page system designed for:
          </p>
        </div>

        {/* Central Images & Pills Visual */}
        <div
          ref={imagesContainerRef}
          className="relative w-full max-w-[1000px] h-[400px] md:h-[500px] flex justify-center items-center mb-6 mt-6 md:mt-6"
        >
          {/* Background layers (Left & Right) */}
          <img
            ref={leftImgRef}
            src={leftImg}
            alt="Background Web Page Left"
            className="absolute left-[2%] top-[12%] w-[40%] h-[220px] md:h-[350px] rounded-[12px] shadow-2xl opacity-50! z-0 object-cover object-top"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 50%, transparent 100%)",
            }}
          />
          <img
            ref={rightImgRef}
            src={rightImg}
            alt="Background Web Page Right"
            className="absolute right-[2%] top-[12%] w-[40%] h-[220px] md:h-[350px] rounded-[12px] shadow-2xl opacity-50! z-0 object-cover object-top"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 50%, transparent 100%)",
            }}
          />

          {/* Main Center Layer with fading mask */}
          <img
            src={centerImg}
            alt="Main Web Page Center"
            className="relative z-10 w-[60%] md:h-[600px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] rounded-[12px] border border-white/5 object-cover object-top"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 65%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 65%, transparent 100%)",
            }}
          />

          {/* Floating Pills */}
          {pills.map((pill, idx) => (
            <div
              key={idx}
              ref={(el) => {
                pillsRef.current[idx] = el;
              }}
              className={`absolute cursor-pointer ${pill.className} flex items-center gap-[4px] md:gap-[16px] p-[6px] px-[8px] md:p-[14px] bg-regal-navy/50 sm:bg-white/10 border border-white/20 backdrop-blur-xl rounded-[10px] md:rounded-[17px] shadow-2xl hover:bg-white/20 transition-all duration-300 cursor-default w-max mix-blend-normal`}
            >
              <div className="w-[16px] h-[16px] md:w-[32px] md:h-[32px] overflow-clip shrink-0">
                <img
                  src={pill.icon}
                  alt={pill.text}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-sans border-none font-bold text-white text-[9px] sm:text-[12px] md:text-[15px] leading-[12px] md:leading-[20px] capitalize whitespace-nowrap">
                {pill.text}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div
          ref={footerRef}
          className="flex flex-col items-center text-center gap-2 sm:gap-4 mt-0 md:mt-14"
        >
          <h3 className="font-sans font-semibold text-base sm:text-xl md:text-4xl text-white leading-tight">
            Launch New Pages In Days, Not Weeks.
          </h3>
          <p className="font-sans text-xs sm:text-lg md:text-xl text-gray-400 font-medium">
            No repeated development cost.
          </p>
        </div>
      </div>
    </section>
  );
};

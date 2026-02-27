import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/images/background-image-hero.png";
import { RatingWidget } from "./RatingWidget";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export function Hero() {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);

  // HubSpot Meetings embed script - commented out
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     if (script.parentNode) script.parentNode.removeChild(script);
  //   };
  // }, []);

  useEffect(() => {
    // Basic GSAP animation on load
    const ctx = gsap.context(() => {
      // Staggered word animation for title
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word-wrapper");
        gsap.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            ease: "circ",
            delay: 0.1,
          },
        );
      }

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "circ", delay: 0.4 },
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "circ", delay: 0.6 },
      );
    });

    return () => ctx.revert();
  }, []);

  // Split words utility for the main headline
  const line1 = "In Dubai Real Estate,";
  const line2 = "Your";
  const highlight = "Landing Page";
  const line3 = "Decides The Deal.";

  const renderWords = (text: string, customClass: string = "") => {
    return text.split(" ").map((word, i) => (
      <span
        key={i}
        className="inline-block overflow-hidden align-bottom pb-2 -mb-2"
      >
        <span className={`inline-block word-wrapper ${customClass}`}>
          {word}
        </span>
        <span className="inline-block">&nbsp;</span>
      </span>
    ));
  };

  return (
    <section className="relative w-full min-h-[80vh] pt-28 pb-9 sm:pb-20 flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute bottom-0 right-0 h-[90%] w-[50%] z-0 pointer-events-none hidden md:flex justify-end mix-blend-multiply">
        <img
          src={heroBg}
          alt=""
          className="object-cover h-full object-right-bottom"
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 w-full flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8 z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:gap-10 max-w-4xl w-full order-1">
          <h1
            ref={titleRef}
            className="text-3xl md:text-5xl lg:text-6xl md:leading-[1.1] lg:leading-snug 2xl:leading-[80px] font-sans font-bold text-carbon-black flex flex-wrap"
          >
            {renderWords(line1)}
            <span className="w-full hidden md:block" />
            {renderWords(line2)}
            {renderWords(
              highlight,
              "font-serif italic font-normal text-regal-navy",
            )}
            {renderWords(line3)}
          </h1>

          <div ref={contentRef} className="flex flex-col gap-4 lg:gap-10">
            <div className="w-full h-px bg-black/10" />

            <p className="text-base md:text-2xl text-carbon-black font-headings">
              <span className="font-bold text-regal-navy">How? </span>
              Scroll below or connect with an expert directly
            </p>

            {/* Desktop: widget in left column */}
            <div className="hidden lg:block">
              <RatingWidget />
            </div>
          </div>
        </div>

        {/* Right - Form (HubSpot embed commented out) */}
        <div
          ref={formRef}
          className="w-full border lg:w-[424px] shrink-0 bg-white px-5 py-5 sm:py-8 rounded-[10px] shadow-xl relative overflow-hidden order-2"
        >
          <div className="relative z-10 flex flex-col gap-3 sm:gap-6">
            <h3 className="font-headings text-lg sm:text-2xl text-regal-navy font-semibold text-center w-full">
              Request your discovery call
            </h3>

            <div className="flex flex-col gap-3 w-full">
              <Input label="Name" />
              <Input label="Email Address" type="email" />
              <Input label="Phone No" type="tel" />
              <Input label="Message" isTextArea />
            </div>

            <Button
              showArrow
              className="w-full mt-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/thank-you");
              }}
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>

        {/* Mobile: full-width widget below embed */}
        <div className="w-full lg:hidden order-3">
          <RatingWidget />
        </div>
      </div>
    </section>
  );
}

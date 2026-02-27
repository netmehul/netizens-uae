import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
// import heroBg from "../assets/images/background-image-hero.png";
import newBgImage from "../assets/images/new-bg-image.svg";
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
      {/* Hero Background Image - Burj Khalifa (commented out) */}
      {/* <div className="absolute bottom-[-8%] left-[-8%] h-[80%] w-[20%] z-0 pointer-events-none hidden md:flex justify-start mix-blend-multiply">
        <img
          src={heroBg}
          alt=""
          className="object-cover h-full object-left-bottom"
        />
      </div> */}
      {/* Hero Background - new-bg-image.svg (repeating pattern) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none hidden md:block mix-blend-multiply"
        style={{
          backgroundImage: `url(${newBgImage})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom center",
          backgroundSize: "auto 30%",
        }}
      />

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
          className="w-full border lg:w-[424px] shrink-0 bg-white px-5 py-5 sm:py-8 rounded-[10px] shadow-xl relative order-2"
        >
          <div className="relative z-10 flex flex-col gap-3 sm:gap-6">
            <h3 className="font-headings text-lg sm:text-2xl text-regal-navy font-semibold text-center w-full">
              Request your discovery call
            </h3>

            <div className="flex flex-col gap-3 w-full">
              <Input label="Name" />
              <Input label="Email" type="email" />
              <div className="w-full flex border border-black/10 rounded-[10px] focus-within:border-regal-navy focus-within:ring-1 focus-within:ring-regal-navy transition-colors">
                <select
                  className="form-select-compact bg-gray-50/80 pl-2 pr-6 py-2 sm:py-3 text-charcoal font-sans text-[13px] border-r border-black/10 h-[44px] sm:h-[52px] w-[72px] shrink-0 rounded-l-[10px]"
                  defaultValue="+971"
                  aria-label="Country code"
                >
                  <option value="+971">+971</option>
                  <option value="+966">+966</option>
                  <option value="+973">+973</option>
                  <option value="+974">+974</option>
                  <option value="+968">+968</option>
                  <option value="+965">+965</option>
                  <option value="+91">+91</option>
                  <option value="+92">+92</option>
                  <option value="+44">+44</option>
                  <option value="+1">+1</option>
                  <option value="+61">+61</option>
                  <option value="+49">+49</option>
                  <option value="+33">+33</option>
                  <option value="+81">+81</option>
                  <option value="+86">+86</option>
                  <option value="+20">+20</option>
                  <option value="+27">+27</option>
                  <option value="+234">+234</option>
                  <option value="+254">+254</option>
                  <option value="+55">+55</option>
                  <option value="+7">+7</option>
                  <option value="+90">+90</option>
                  <option value="+39">+39</option>
                  <option value="+34">+34</option>
                  <option value="+31">+31</option>
                  <option value="+65">+65</option>
                  <option value="+60">+60</option>
                  <option value="+62">+62</option>
                  <option value="+63">+63</option>
                  <option value="+64">+64</option>
                </select>
                <input
                  type="tel"
                  placeholder="50 123 4567"
                  className="flex-1 px-4 py-2 sm:py-3 bg-white text-charcoal font-sans text-[14px] focus:outline-none placeholder:text-charcoal/60 sm:h-[52px] rounded-r-[10px]"
                />
              </div>
              <div className="w-full">
                <label className="block font-sans text-[14px] text-charcoal/80 mb-1">
                  What is your budget to build the website?
                </label>
                <select
                  className="form-select w-full border border-black/10 rounded-[10px] px-4 py-2 sm:py-3 text-charcoal font-sans text-[14px] sm:h-[52px]"
                  defaultValue=""
                >
                  <option value="" disabled>Select budget</option>
                  <option value="under-2000">Under AED 2000</option>
                  <option value="2000-5000">AED 2000-5000</option>
                  <option value="more-than-10000">More than AED 10,000</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block font-sans text-[14px] text-charcoal/80 mb-1">
                  What is the primary objective of your enquiry?
                </label>
                <select
                  className="form-select w-full border border-black/10 rounded-[10px] px-4 py-2 sm:py-3 text-charcoal font-sans text-[14px] sm:h-[52px]"
                  defaultValue=""
                >
                  <option value="" disabled>Select objective</option>
                  <option value="generate-leads">Generate more leads</option>
                  <option value="online-sales">Increase online sales</option>
                  <option value="google-ranking">Improve Google ranking</option>
                  <option value="performance-speed">Improve website performance & speed</option>
                  <option value="rebrand-design">Rebrand / Improve website design</option>
                  <option value="build-from-scratch">Build online presence from scratch</option>
                </select>
              </div>
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

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/Button";
import heroBg from "../assets/images/background-image-hero.png";

export function ThankYou() {
    return (
        <>
            <Header isThankYou />
            <main className="flex-1 w-full bg-snow-white relative overflow-hidden flex flex-col items-center justify-center min-h-[calc(100vh-140px)]">
                {/* Soft pink gradient background at the bottom */}
                <div
                    className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none"
                    style={{
                        background: "radial-gradient(50% 100% at 50% 100%, rgba(228, 169, 169, 0.4) 0%, rgba(255, 250, 250, 0) 100%)"
                    }}
                />

                {/* Large "Thank You" Outline Text */}
                <div className="absolute top-10 md:top-24 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
                    <h1
                        style={{
                            textAlign: "center",
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: "220px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "normal",
                            textTransform: "capitalize",
                            color: "#0e34720e",
                        }}
                    >
                        Thank You
                    </h1>
                </div>

                {/* Building/Hero Image */}
                <div className="absolute left-0 bottom-0 w-[25%] md:w-[20%] lg:w-[15%] opacity-40 mix-blend-multiply pointer-events-none z-0 hidden sm:block">
                    <img
                        src={heroBg}
                        alt="Dubai Real Estate Background"
                        className="w-full h-auto object-contain object-left-bottom"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mt-20 md:mt-32">
                    <h2 className="text-3xl md:text-5xl lg:text-[46px] font-sans font-semibold text-regal-navy mb-4 lg:leading-tight">
                        We'll Be in Touch Soon
                    </h2>
                    <p className="text-base md:text-[18px] font-sans font-medium text-charcoal/75 mb-10">
                        Our team will analyze your requirements and get back to you with a customized solution.
                    </p>
                    <Button
                        onClick={() => window.location.href = "https://netizenstechnologies.com/"}
                        showArrow
                    >
                        Visit Our Site
                    </Button>
                </div>
            </main>
            <Footer />
        </>
    );
}

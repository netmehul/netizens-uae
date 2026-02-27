export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#0B2A5B] py-4 px-4 md:px-8 border-t border-[rgba(255,255,255,0.1)]">
            <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Copyright info */}
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] md:text-[14px] text-[#FFFAFA] opacity-90 text-center md:text-left">
                    Copyright © {currentYear} netizenstechnologies.com - All rights reserved. Trade License No. 11185
                </p>

                {/* Policy Links */}
                <div className="flex items-center gap-4 md:gap-8 font-['Plus_Jakarta_Sans',sans-serif] text-[12px] md:text-[14px] text-[#FFFAFA] opacity-90">
                    <a href="#" className="hover:text-white transition-colors duration-200">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                        Cookie Policy
                    </a>
                </div>

            </div>
        </footer>
    );
};

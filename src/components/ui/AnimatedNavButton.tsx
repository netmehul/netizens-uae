import React from 'react';
import './AnimatedNavButton.css';

interface AnimatedNavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text1?: string;
    text2?: string;
    svgContent?: React.ReactNode;
}

export function AnimatedNavButton({
    text1 = "Book Call",
    text2 = "Booking...",
    className = '',
    svgContent,
    ...props
}: AnimatedNavButtonProps) {
    // Break texts into spans
    const renderLetters = (text: string) => {
        return text.split('').map((char, index) => (
            <span
                key={index}
                className="btn-letter"
                style={{ animationDelay: `${index * 0.08}s` }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    // Keep padding and sizes from the old 'sm' button
    const sizeClasses = "px-5 py-2.5 md:px-6 md:py-3 text-[14px] md:text-[15px] rounded";

    return (
        <div className={`btn-wrapper ${className}`}>
            <button className={`btn font-sans ${sizeClasses}`} {...props}>
                {svgContent ? (
                    svgContent
                ) : (
                    <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                        ></path>
                    </svg>
                )}

                {/* Calculate fixed width based on longest text approx (ch unit) or allow slight overflow. We'll use a wrapper with flex. */}
                <div className="txt-wrapper" style={{ minWidth: `${Math.max(text1.length, text2.length)}ch` }}>
                    <div className="txt-1">
                        {renderLetters(text1)}
                    </div>
                    <div className="txt-2">
                        {renderLetters(text2)}
                    </div>
                </div>
            </button>
        </div>
    );
}

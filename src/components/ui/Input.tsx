import React from "react";

interface InputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label: string;
  isTextArea?: boolean;
}

export function Input({
  label,
  isTextArea = false,
  className = "",
  ...props
}: InputProps) {
  const baseStyles =
    "w-full bg-white border border-black/10 rounded-[10px] px-4 py-2 sm:py-3 text-charcoal font-sans text-[14px] focus:outline-none focus:border-regal-navy transition-colors placeholder:text-charcoal/60";

  return (
    <div className="w-full">
      {isTextArea ? (
        <textarea
          placeholder={label}
          className={`${baseStyles} h-[80px] resize-none ${className}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          placeholder={label}
          className={`${baseStyles} sm:h-[52px] ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}

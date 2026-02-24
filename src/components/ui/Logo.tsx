import logoSrc from "../../assets/images/logo.svg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoSrc}
        alt="NETIZENS technologies"
        className="h-[48px] w-auto max-w-28 xs:max-w-max"
      />
    </div>
  );
}

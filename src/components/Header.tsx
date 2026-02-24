import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

export function Header({ isThankYou = false }: { isThankYou?: boolean }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className={`max-w-[1440px] mx-auto gap-8 px-4 md:px-8 py-4 md:py-[12px] flex items-center ${isThankYou ? 'justify-center' : 'justify-between'}`}>
        {isThankYou ? (
          <Link to="/">
            <Logo />
          </Link>
        ) : (
          <Logo />
        )}
        {!isThankYou && (
          <Button size="sm" className="text-xs sm:text-sm">
            Book Discovery Call
          </Button>
        )}
      </div>
    </header>
  );
}

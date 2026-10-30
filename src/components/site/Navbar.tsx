import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { contactHref, primaryNav } from "../../lib/navigation";
import { Link, useRouter } from "../../lib/router";

export const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { path } = useRouter();

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="relative z-50 w-full bg-cream">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-[11px] md:px-8 lg:px-12 xl:px-20 xl:py-[9px]">
        <Link
          className="flex shrink-0 items-center"
          href="/"
          aria-label="Smotiva home"
        >
          <img
            className="h-5 w-auto md:h-[30px] xl:h-[37px]"
            alt="Smotiva"
            src="/images/smotiva-logo-dark.png"
          />
        </Link>

        <div className="flex items-center gap-8">
          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center gap-[50px]">
              {primaryNav.map((item) => (
                <li key={item.path}>
                  <Link
                    className={cn(
                      "whitespace-nowrap font-lufga text-lg font-medium leading-[30px] text-[#292828] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                      path === item.path && "underline decoration-brand decoration-2 underline-offset-8",
                    )}
                    href={item.path}
                    aria-current={path === item.path ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            className="hidden h-[60px] shrink-0 items-center justify-center rounded-xl bg-brand px-7 font-lufga text-base font-semibold leading-7 text-white shadow-effect-shadow-small transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:inline-flex"
            href={contactHref}
          >
            Contact Us
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand xl:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-1/2 h-[2px] w-[22px] -translate-x-1/2 rounded-[10px] bg-ink transition-all duration-300",
                menuOpen ? "top-1/2 w-[20px] -translate-y-1/2 rotate-45" : "top-[12px]",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-1/2 h-[2px] -translate-x-1/2 rounded-[10px] bg-ink transition-all duration-300",
                menuOpen
                  ? "top-1/2 w-[20px] -translate-y-1/2 -rotate-45"
                  : "top-[22px] w-[16px]",
              )}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 top-full z-50 w-full border-t border-ink/10 bg-cream px-5 pb-8 pt-4 shadow-[0_16px_40px_rgba(6,16,38,0.12)] md:px-8 lg:px-12 xl:hidden"
        >
          <ul className="flex flex-col">
            {primaryNav.map((item) => (
              <li key={item.path}>
                <Link
                  className={cn(
                    "block border-b border-ink/5 py-3 font-lufga text-lg font-medium leading-[30px] text-[#292828] transition-opacity hover:opacity-70",
                    path === item.path && "text-brand",
                  )}
                  href={item.path}
                  aria-current={path === item.path ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="mt-6 inline-flex h-[60px] w-full items-center justify-center rounded-xl bg-brand font-lufga text-base font-semibold leading-7 text-white shadow-effect-shadow-small md:hidden"
            href={contactHref}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

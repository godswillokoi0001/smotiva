import { footerNav } from "../../lib/navigation";
import { Link } from "../../lib/router";

const socialIcons = [
  {
    label: "Instagram",
    viewBox: "0 0 36 36",
    children: (
      <>
        <rect width="36" height="36" rx="18" fill="#03203E" />
        <path
          d="M21.333 10.5C23.634 10.5 25.5 12.366 25.5 14.667V21.333C25.5 23.634 23.634 25.5 21.333 25.5H14.667C12.366 25.5 10.5 23.634 10.5 21.333V14.667C10.5 12.366 12.366 10.5 14.667 10.5H21.333ZM18 14.667C16.159 14.667 14.667 16.159 14.667 18C14.667 19.841 16.159 21.333 18 21.333C19.841 21.333 21.333 19.841 21.333 18C21.333 16.159 19.841 14.667 18 14.667ZM18 16.333C18.921 16.333 19.667 17.079 19.667 18C19.667 18.921 18.921 19.667 18 19.667C17.079 19.667 16.333 18.921 16.333 18C16.333 17.079 17.079 16.333 18 16.333ZM21.75 13.417C21.29 13.417 20.917 13.79 20.917 14.251C20.917 14.711 21.29 15.084 21.75 15.084C22.21 15.084 22.584 14.711 22.584 14.251C22.584 13.79 22.21 13.417 21.75 13.417Z"
          fill="white"
        />
        <path
          d="M18 0.5C27.665 0.5 35.5 8.33502 35.5 18C35.5 27.665 27.665 35.5 18 35.5C8.33502 35.5 0.5 27.665 0.5 18C0.5 8.33502 8.33502 0.5 18 0.5Z"
          stroke="#02305F"
        />
      </>
    ),
  },
  {
    label: "Facebook",
    viewBox: "48 0 36 36",
    children: (
      <>
        <rect x="48" width="36" height="36" rx="18" fill="#03203E" />
        <path
          d="M74.333 18C74.333 13.4 70.599 9.66699 65.999 9.66699C61.397 9.66899 57.668 13.398 57.666 18C57.666 22.034 60.533 25.392 64.333 26.167V20.5H62.666V18H64.333V15.917C64.335 14.307 65.639 13.002 67.249 13H69.333V15.5H67.666C67.206 15.502 66.834 15.874 66.833 16.334V18H69.333V20.5H66.833V26.292C71.092 25.865 74.334 22.28 74.333 18Z"
          fill="white"
        />
        <path
          d="M66 0.5C75.665 0.5 83.5 8.33502 83.5 18C83.5 27.665 75.665 35.5 66 35.5C56.335 35.5 48.5 27.665 48.5 18C48.5 8.33502 56.335 0.5 66 0.5Z"
          stroke="#02305F"
        />
      </>
    ),
  },
  {
    label: "LinkedIn",
    viewBox: "96 0 36 36",
    children: (
      <>
        <rect x="96" width="36" height="36" rx="18" fill="#03203E" />
        <path
          d="M118.42 9.875H109.58C107.534 9.876 105.875 11.535 105.875 13.581V22.419C105.875 24.466 107.534 26.125 109.581 26.125H118.419C120.466 26.125 122.125 24.466 122.125 22.419V13.581C122.125 11.534 120.466 9.875 118.419 9.875H118.42ZM111.37 22.993C111.375 23.085 111.342 23.175 111.279 23.242C111.216 23.308 111.128 23.346 111.036 23.346H109.553C109.366 23.342 109.217 23.189 109.219 23.002V16.834C109.217 16.744 109.251 16.657 109.313 16.593C109.376 16.528 109.462 16.492 109.552 16.492H111.036C111.126 16.492 111.212 16.528 111.275 16.593C111.337 16.657 111.371 16.744 111.369 16.834V22.994L111.37 22.993ZM110.267 15.193C109.592 15.188 109.048 14.636 109.053 13.961C109.058 13.286 109.61 12.742 110.285 12.747C110.947 12.77 111.47 13.316 111.465 13.978C111.46 14.641 110.929 15.18 110.267 15.193ZM119.281 22.983C119.281 23.158 119.141 23.302 118.966 23.307H117.4C117.224 23.302 117.085 23.158 117.085 22.982V20.13C117.085 19.704 117.215 18.278 115.955 18.278C114.973 18.278 114.778 19.278 114.741 19.723V23.048C114.742 23.224 114.602 23.368 114.426 23.373H112.906C112.727 23.372 112.582 23.227 112.582 23.048V16.803C112.587 16.627 112.731 16.488 112.907 16.488H114.426C114.602 16.488 114.746 16.627 114.751 16.803V17.341C115.203 16.68 115.983 16.323 116.779 16.414C119.309 16.414 119.299 18.777 119.299 20.12L119.281 22.983Z"
          fill="white"
        />
        <path
          d="M114 0.5C123.665 0.5 131.5 8.33502 131.5 18C131.5 27.665 123.665 35.5 114 35.5C104.335 35.5 96.5 27.665 96.5 18C96.5 8.33502 104.335 0.5 114 0.5Z"
          stroke="#02305F"
        />
      </>
    ),
  },
  {
    label: "X",
    viewBox: "144 0 36 36",
    children: (
      <>
        <rect x="144" width="36" height="36" rx="18" fill="#03203E" />
        <path
          d="M160.74 20.21L164.709 25.5H170.542L163.994 16.768L169.442 10.5H167.234L162.97 15.405L159.292 10.5H153.46L159.718 18.846L153.934 25.5H156.142L160.741 20.21H160.74ZM165.542 23.833L156.792 12.167H158.46L167.21 23.833H165.543H165.542Z"
          fill="white"
        />
        <path
          d="M162 0.5C171.665 0.5 179.5 8.33502 179.5 18C179.5 27.665 171.665 35.5 162 35.5C152.335 35.5 144.5 27.665 144.5 18C144.5 8.33502 152.335 0.5 162 0.5Z"
          stroke="#02305F"
        />
      </>
    ),
  },
];

const footerColumns = [footerNav.slice(0, 3), footerNav.slice(3, 6), footerNav.slice(6)];

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {socialIcons.map(({ label, viewBox, children }) => (
      <a
        key={label}
        aria-label={label}
        className="block h-9 w-9 shrink-0 rounded-full transition-opacity hover:opacity-80"
        href="#"
      >
        <svg
          viewBox={viewBox}
          className="h-9 w-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {children}
        </svg>
      </a>
    ))}
  </div>
);

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full overflow-hidden bg-ink">
      <img
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        alt=""
        aria-hidden="true"
        src="/images/Smotiva_brand_pattern_1_TRANSPARENT_solid_white 1.svg"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-16 md:px-8 lg:px-12 xl:min-h-[773px] xl:px-[132px] xl:pb-0 xl:pt-[70px]">
        <div className="mx-auto flex w-full max-w-[1176px] flex-col xl:min-h-[683px]">
          <div className="hidden h-px w-full bg-[#2a3839] xl:block" />

          <div className="flex w-full items-start border-b border-[#a4a9a9]/60 pb-6 md:pb-8 xl:mt-[77px] xl:border-none xl:pb-0">
            <img
              className="h-[62px] w-auto max-w-full md:h-[80px] xl:h-[123px]"
              alt="Smotiva"
              src="/images/smotiva-logo-light.png"
            />
          </div>

          <div className="mt-8 flex w-full flex-col gap-10 md:flex-row md:items-start md:gap-10 xl:mt-[60px] xl:gap-[187px]">
            <div className="flex min-w-0 flex-1 flex-col gap-8 xl:max-w-[450px] xl:gap-[124px]">
              <p className="w-full max-w-[300px] font-['DM_Sans',Helvetica] text-base font-normal leading-8 text-white md:max-w-[450px] md:text-lg">
                Smotiva Digital Ltd helps businesses bring their branding,
                digital presence and communication into one clear direction—so
                more customers can find them and connect with them easily.
              </p>
              <SocialLinks className="hidden xl:flex" />
            </div>

            <nav
              aria-label="Footer navigation"
              className="grid w-full grid-cols-3 gap-x-4 gap-y-6 md:w-[446px] md:shrink-0 md:gap-8 xl:gap-[46px]"
            >
              {footerColumns.map((column, columnIndex) => (
                <div
                  key={`footer-column-${columnIndex}`}
                  className="flex min-w-0 flex-col gap-8"
                >
                  {column.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="whitespace-nowrap font-['DM_Sans',Helvetica] text-base font-normal leading-6 text-white transition-colors hover:text-white/70"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-10 border-t border-[#02305f] pt-8 md:mt-14 xl:mt-auto xl:flex xl:h-[68px] xl:items-center xl:justify-center xl:border-b xl:pt-0">
            <div className="flex flex-col items-center gap-6 xl:gap-0">
              <SocialLinks className="xl:hidden" />
              <p className="text-center font-['Inter',Helvetica] text-sm font-normal leading-5 text-[#bfbebe]">
                © 2026 Smotiva. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

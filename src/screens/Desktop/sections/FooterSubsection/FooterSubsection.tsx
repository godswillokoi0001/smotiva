import { Button } from "../../../../components/ui/button";

const navigationColumns = [
  ["Home", "About", "Services"],
  ["Blog", "Contact", "Case studies"],
  ["Support", "Privacy", "Terms"],
];

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

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 self-start overflow-hidden bg-[#061026] px-6 sm:px-10 xl:min-h-[773px] xl:px-[132px]">
      <img
        className="pointer-events-none absolute inset-x-0 -top-12 z-0 h-[calc(100%_+_96px)] w-full max-w-none object-cover opacity-[0.12]"
        alt="Smotiva brand"
        src="/images/footer-pattern.png"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1176px] flex-col overflow-hidden pt-10 sm:pt-14 xl:min-h-[683px] xl:pt-[70px]">
        <div className="h-px w-full bg-[#2a3839]" />
        <div className="mt-8 flex w-full max-w-[1196px] items-start p-2.5 sm:mt-12 xl:mt-[77px]">
          <img
            className="h-[56px] w-auto max-w-full object-contain object-left sm:h-[80px] xl:h-[123px]"
            alt="Smotiva logo primary"
            src="/images/smotiva-logo-light.png"
          />
        </div>
        <div className="mt-8 flex flex-1 flex-col gap-8 sm:mt-12 md:flex-row md:gap-8 xl:mt-[60px] xl:gap-[187px]">
          <div className="flex min-w-0 flex-1 flex-col gap-8 xl:gap-[124px]">
            <p className="flex w-full max-w-[450px] items-center font-['DM_Sans',Helvetica] text-base font-normal leading-7 tracking-normal text-white sm:text-lg sm:leading-8 xl:mr-5 xl:min-h-[72px]">
              Smotiva Digital Ltd helps businesses bring their branding, digital
              presence and communication into one clear direction—so more
              customers can find them and connect with them easily.
            </p>
            <div className="flex h-9 w-[180px] items-center gap-3">
              {socialIcons.map(({ label, viewBox, children }) => (
                <Button
                  key={label}
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={label}
                  className="h-9 w-9 rounded-full p-0 transition-opacity hover:opacity-80 [&_svg]:!size-9"
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
                </Button>
              ))}
            </div>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex w-full max-w-[446px] shrink-0 items-start gap-2 sm:gap-4 md:h-[232px] md:gap-8 md:items-center xl:gap-[46px]"
          >
            {navigationColumns.map((column, columnIndex) => (
              <div
                key={`footer-column-${columnIndex}`}
                className="flex min-w-0 flex-1 flex-col justify-between gap-4 py-2 pl-0 sm:gap-6 sm:py-[26px] sm:pl-6 md:h-[232px] md:w-[143px] md:flex-none md:gap-0"
              >
                {column.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-['DM_Sans',Helvetica] text-base font-normal leading-6 whitespace-nowrap text-white transition-colors hover:text-white/70"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="relative mt-10 flex h-[68px] shrink-0 items-center justify-center border-y border-[#02305f] sm:mt-14 xl:mt-[102px]">
          <p className="font-['Inter',Helvetica] text-sm font-normal leading-[19.6px] tracking-normal text-[#bfbebe]">
            © 2026 Smotiva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

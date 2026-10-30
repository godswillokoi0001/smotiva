import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

/**
 * Minimal client-side router.
 *
 * The site is a single-page Vite app, so "routing" is the History API plus a
 * route table. Every internal link goes through <Link>, which keeps full page
 * reloads (and the broken `#section` links they caused) out of the way.
 */

export type RoutePath =
  | "/"
  | "/about"
  | "/services"
  | "/who-we-work-with"
  | "/case-studies"
  | "/blog"
  | "/contact"
  | "/support"
  | "/privacy"
  | "/terms";

export type RouterLocation = {
  /** Pathname without a trailing slash, e.g. "/about". Always starts with "/". */
  path: string;
  /** The in-page target from a "#fragment" link, e.g. "contact". */
  hash: string;
  /** True when `path` is not one of the known routes. */
  notFound: boolean;
};

export const ROUTES: RoutePath[] = [
  "/",
  "/about",
  "/services",
  "/who-we-work-with",
  "/case-studies",
  "/blog",
  "/contact",
  "/support",
  "/privacy",
  "/terms",
];

const normalisePath = (pathname: string): string => {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

const readLocation = (): RouterLocation => {
  if (typeof window === "undefined") {
    return { path: "/", hash: "", notFound: false };
  }
  const path = normalisePath(window.location.pathname);
  return {
    path,
    hash: window.location.hash.replace(/^#/, ""),
    notFound: !ROUTES.includes(path as RoutePath),
  };
};

type RouterContextValue = RouterLocation & {
  navigate: (to: string, options?: { replace?: boolean }) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

const isExternal = (href: string) =>
  /^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(href) ||
  /^(?:mailto|tel|sms):/i.test(href);

const splitHref = (href: string) => {
  const [rawPath, rawHash = ""] = href.split("#");
  const [pathname, search = ""] = rawPath.split("?");
  return { pathname: pathname || "/", search, hash: rawHash };
};

export const RouterProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [location, setLocation] = useState<RouterLocation>(readLocation);

  const navigate = useCallback<RouterContextValue["navigate"]>((to, options) => {
    const { pathname, search, hash } = splitHref(to);
    const nextPath = normalisePath(pathname);
    const url = `${nextPath}${search}${hash ? `#${hash}` : ""}`;
    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (url !== current) {
      const method = options?.replace ? "replaceState" : "pushState";
      window.history[method]({ path: nextPath, hash }, "", url);
    }

    setLocation(readLocation());

    if (hash) {
      // Wait for the destination page to paint before scrolling to its section.
      window.requestAnimationFrame(() => {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    const sync = () => setLocation(readLocation());

    const onAnchorClick = (event: MouseEvent | globalThis.MouseEvent) => {
      // Preserve the browser's own behaviour for modified clicks and new tabs.
      const mouseEvent = event as globalThis.MouseEvent;
      if (
        mouseEvent.defaultPrevented ||
        mouseEvent.button !== 0 ||
        mouseEvent.metaKey ||
        mouseEvent.ctrlKey ||
        mouseEvent.shiftKey ||
        mouseEvent.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (isExternal(href) || href.startsWith("#")) return;

      // Same-site link: let the router handle it instead of reloading.
      const { pathname } = splitHref(href);
      if (!pathname.startsWith("/")) return;

      event.preventDefault();
      navigate(href);
    };

    window.addEventListener("popstate", sync);
    document.addEventListener("click", onAnchorClick);
    return () => {
      window.removeEventListener("popstate", sync);
      document.removeEventListener("click", onAnchorClick);
    };
  }, [navigate]);

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = (): RouterContextValue => {
  const context = useContext(RouterContext);
  if (!context) throw new Error("useRouter must be used inside <RouterProvider>");
  return context;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Internal path ("/about", "/about#team") or any external/mailto/tel URL. */
  href: string;
  replace?: boolean;
};

export const Link = ({ href, replace, onClick, ...rest }: LinkProps): JSX.Element => {
  const { navigate } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    if (isExternal(href)) return;

    event.preventDefault();
    if (href.startsWith("#")) {
      const target = document.getElementById(href.slice(1));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(window.history.state, "", href);
      return;
    }
    navigate(href, { replace });
  };

  return <a {...rest} href={href} onClick={handleClick} />;
};

/**
 * Anchor for a section on the current page. Falls back to a real link to
 * `path` when the section is not on this page, so in-page nav still works
 * from anywhere in the site.
 */
export const SectionLink = ({
  path,
  hash,
  ...rest
}: LinkProps & { path: RoutePath; hash: string }): JSX.Element => {
  const { path: currentPath } = useRouter();
  const onPage = currentPath === path;
  return <Link {...rest} href={onPage ? `#${hash}` : `${path}#${hash}`} />;
};

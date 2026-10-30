import type { RoutePath } from "../lib/router";

/**
 * Single source of truth for the site's navigation. Every route in the router
 * appears here exactly once, and both the Navbar and the Footer read from it,
 * so a page can never be reachable from one place and not the other.
 */
export type NavItem = {
  label: string;
  path: RoutePath;
  /** Optional section on that page, e.g. "contact". */
  hash?: string;
};

export const primaryNav: NavItem[] = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Who We Work With", path: "/who-we-work-with" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
];

export const footerNav: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Support", path: "/support" },
  { label: "Privacy", path: "/privacy" },
  { label: "Terms", path: "/terms" },
];

/** Where "Contact Us" points. Swap for a real address when one is available. */
export const contactHref = "mailto:hello@smotiva.com";

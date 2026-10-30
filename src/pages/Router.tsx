import { useEffect } from "react";
import { useRouter, type RoutePath } from "../lib/router";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { PlaceholderPage } from "./PlaceholderPage";

type RouteDefinition = {
  path: RoutePath;
  title: string;
  render: () => JSX.Element;
};

const pageTitles: Record<RoutePath, string> = {
  "/": "Smotiva — Branding & Web Agency",
  "/about": "About — Smotiva",
  "/services": "Services — Smotiva",
  "/who-we-work-with": "Who We Work With — Smotiva",
  "/case-studies": "Case Studies — Smotiva",
  "/blog": "Blog — Smotiva",
  "/contact": "Contact — Smotiva",
  "/support": "Support — Smotiva",
  "/privacy": "Privacy — Smotiva",
  "/terms": "Terms — Smotiva",
};

const placeholder = (title: string) => () => <PlaceholderPage title={title} />;

/** The route table. Add a page here and it is routable everywhere. */
export const routeTable: RouteDefinition[] = [
  { path: "/", title: pageTitles["/"], render: () => <HomePage /> },
  { path: "/about", title: pageTitles["/about"], render: () => <AboutPage /> },
  { path: "/services", title: pageTitles["/services"], render: placeholder("Services") },
  {
    path: "/who-we-work-with",
    title: pageTitles["/who-we-work-with"],
    render: placeholder("Who We Work With"),
  },
  {
    path: "/case-studies",
    title: pageTitles["/case-studies"],
    render: placeholder("Case Studies"),
  },
  { path: "/blog", title: pageTitles["/blog"], render: placeholder("Blog") },
  { path: "/contact", title: pageTitles["/contact"], render: placeholder("Contact") },
  { path: "/support", title: pageTitles["/support"], render: placeholder("Support") },
  { path: "/privacy", title: pageTitles["/privacy"], render: placeholder("Privacy") },
  { path: "/terms", title: pageTitles["/terms"], render: placeholder("Terms") },
];

const setMeta = (selector: string, attribute: string, value: string) => {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

export const Router = (): JSX.Element => {
  const { path } = useRouter();
  const match = routeTable.find((route) => route.path === path);

  useEffect(() => {
    const title = match?.title ?? "Page not found — Smotiva";
    document.title = title;
    setMeta('link[rel="canonical"]', "href", window.location.pathname);
  }, [match, path]);

  if (!match) {
    return <PlaceholderPage title="Page not found" />;
  }

  return match.render();
};

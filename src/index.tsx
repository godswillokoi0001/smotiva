import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./lib/router";
import { Router } from "./pages/Router";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider>
      <Router />
    </RouterProvider>
  </StrictMode>,
);

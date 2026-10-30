import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

/**
 * Deliberately empty page body. The route, the nav chrome and the document
 * title exist so the page is real and navigable; the content is not written
 * yet.
 */
export const PlaceholderPage = ({ title }: { title: string }): JSX.Element => {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip bg-cream">
      <Navbar />
      <div
        className="w-full flex-1"
        aria-label={`${title} page, content coming soon`}
      />
      <Footer />
    </main>
  );
};

import { handleScroll } from "~/pages/non-profit-website";

export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="/" onClick={() => handleScroll("#about")} className="cursor-pointer">
          <img src="/logo.png" alt="Non-Profit Logo" className="h-12" />
        </a>
        <div className="hidden sm:block space-x-6">
          <a
            onClick={() => handleScroll("#about")}
            className="text-blue-600 transition-colors hover:text-blue-800 curser-pointer"
          >
            About
          </a>
          <a
            onClick={() => handleScroll("#events")}
            className="text-blue-600 transition-colors hover:text-blue-800 curser-pointer"
          >
            Events
          </a>
          <a
            onClick={() => handleScroll("#team")}
            className="text-blue-600 transition-colors hover:text-blue-800 curser-pointer"
          >
            Team
          </a>
          <a
            onClick={() => handleScroll("#join")}
            className="text-blue-600 transition-colors hover:text-blue-800 curser-pointer"
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";
import { handleScroll } from "~/pages/non-profit-website";

export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.png" alt="Non-Profit Logo" width={75} height={50} className="h-12 w-auto"/>
        </Link>
        <div className="hidden sm:block space-x-6">
          <a
            onClick={() => handleScroll("#about")}
            className="text-blue-600 transition-colors hover:text-blue-800 curser-pointer"
          >
            About
          </a>
          <a
            onClick={() => handleScroll("#upcomingEvents")}
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

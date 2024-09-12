import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" scroll={true}>
          <img src="/logo.png" alt="Non-Profit Logo" className="h-12" />
        </Link>
        <div className="space-x-6">
          <Link
            href="#about"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            About
          </Link>
          <Link
            href="#events"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            Events
          </Link>
          <Link
            href="#team"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            Team
          </Link>
          <Link
            href="#join"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

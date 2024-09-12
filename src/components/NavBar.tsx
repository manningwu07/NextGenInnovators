const logoUrl =
  "https://yvqwxwjjxvxvqgxjnxqw.supabase.co/storage/v1/object/public/images/logo.png";

export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <img src={logoUrl} alt="Non-Profit Logo" className="h-12" />
        <div className="space-x-6">
          <a
            href="#about"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            About
          </a>
          <a
            href="#events"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            Events
          </a>
          <a
            href="#team"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            Team
          </a>
          <a
            href="#join"
            className="text-blue-600 transition-colors hover:text-blue-800"
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
}

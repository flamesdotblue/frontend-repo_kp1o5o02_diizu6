import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight text-gray-900">Sagar Chopda</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/sagar-chopda"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@sagarchopda.dev"
            aria-label="Email"
            className="p-2 rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

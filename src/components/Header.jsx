import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-black/30 dark:supports-[backdrop-filter]:bg-black/30 border-b border-gray-200 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight text-gray-900 dark:text-white">Sagar Chopda</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <a href="#projects" className="hover:text-gray-900 dark:hover:text-white">Projects</a>
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white">About</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="https://www.linkedin.com/in/sagar-chopda"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@sagarchopda.dev"
            aria-label="Email"
            className="p-2 rounded-md border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

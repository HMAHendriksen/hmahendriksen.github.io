import { Menu } from "lucide-react";
import { useState } from "react";
import favicon from "/favicon.ico";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={favicon}
              alt="Logo"
              className="w-10 h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#about"
              className="btn-secondary text-sm"
            >
              Over de auteur
            </a>
            <a
              href="https://research.vu.nl/en/publications/improving-information-provision-in-the-memory-clinic-with-a-focus/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Proefschrift
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <a
                href="#about"
                className="btn-secondary text-sm text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Over de auteur
              </a>
              <a
                href="https://research.vu.nl/en/publications/improving-information-provision-in-the-memory-clinic-with-a-focus/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm text-center"
              >
                Proefschrift
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

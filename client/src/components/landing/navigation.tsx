import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLaunchApp = () => {
    window.open("https://t.me/tpolls_official_bot", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">tPolls</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Features
              </button>
              <a
                href="/tpolls_litepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Litepaper
              </a>
              <button
                onClick={() => scrollToSection('demo')}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Community
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-primary text-white hover:bg-primary/90" onClick={handleLaunchApp}>
              Launch App
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Features
              </button>
              <a
                href="/tpolls_litepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Litepaper
              </a>
              <button
                onClick={() => scrollToSection('demo')}
                className="block w-full text-left px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="block w-full text-left px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Community
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

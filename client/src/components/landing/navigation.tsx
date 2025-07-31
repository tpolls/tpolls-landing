import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
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
                className="text-slate-600 hover:text-primary transition-colors"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="text-slate-600 hover:text-primary transition-colors"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="text-slate-600 hover:text-primary transition-colors"
              >
                Community
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="bg-primary text-white hover:bg-primary/90">
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary transition-colors"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary transition-colors"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary transition-colors"
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

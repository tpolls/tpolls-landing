import { MessageCircle, Twitter, Github, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const handleSocialLink = (platform: string) => {
    // TODO: Replace with actual social media links
    console.log(`${platform} clicked`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="text-3xl font-bold text-primary mb-4">tPolls</div>
            <p className="text-slate-400 mb-6 max-w-md">
              Revolutionizing community engagement through incentivized polling on the TON blockchain. 
              Make every vote count, make every voice heard.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialLink('telegram')}
                className="text-slate-400 hover:text-primary"
              >
                <MessageCircle className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialLink('twitter')}
                className="text-slate-400 hover:text-primary"
              >
                <Twitter className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialLink('github')}
                className="text-slate-400 hover:text-primary"
              >
                <Github className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialLink('discord')}
                className="text-slate-400 hover:text-primary"
              >
                <Users className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="hover:text-white transition-colors"
                >
                  Demo
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 tPolls. All rights reserved. Built on TON blockchain.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

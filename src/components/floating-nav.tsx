"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, User, Code, Bot, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#projects", label: "Projects", icon: Bot },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => {
        const href = link.href;
        if (href.startsWith("#")) {
          try {
            return document.querySelector(href) as HTMLElement;
          } catch (e) {
            return null;
          }
        }
        return null;
      }).filter(Boolean);
  
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed bottom-4 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-2 rounded-full p-2 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex h-12 w-auto items-center justify-center rounded-full px-4 text-foreground/70 transition-all duration-300 hover:text-foreground",
                activeSection === link.href &&
                  "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md"
              )}
              aria-label={link.label}
              onClick={handleLinkClick}
            >
              <link.icon className="mr-2 h-5 w-5" />
              <span className="inline">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <div className="relative">
          {isMenuOpen && (
            <div className="absolute bottom-14 right-0 flex flex-col items-end gap-2 rounded-xl p-2 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex w-full items-center justify-start rounded-full p-3 text-foreground/80 transition-all duration-300",
                    activeSection === link.href && "bg-primary/80 text-primary-foreground"
                  )}
                  aria-label={link.label}
                  onClick={handleLinkClick}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="ml-3 font-semibold">{link.label}</span>
                </Link>
              ))}
            </div>
          )}
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </Button>
        </div>
      </div>
    </>
  );
}

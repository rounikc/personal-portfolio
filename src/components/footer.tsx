"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Smartphone, Github, Linkedin, Mail, Heart, Coffee, Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const quickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const services = [
    { title: "Mobile App Development" },
    { title: "React Native Development" },
    { title: "Cross-Platform Solutions" },
];

export function Footer() {
  const { toast } = useToast();

  useEffect(() => {
    const checkSurprise = () => {
      const surpriseClicked = sessionStorage.getItem("surpriseClicked");
      if (surpriseClicked) {
        toast({
          title: "Gotcha!",
          description: "Curiosity killed the cat, but here you got trolled! atleast it's not a rickroll hehe!",
        });
        sessionStorage.removeItem("surpriseClicked");
      }
    };
    checkSurprise();
    document.addEventListener("visibilitychange", checkSurprise);

    return () => {
      document.removeEventListener("visibilitychange", checkSurprise);
    };
  }, [toast]);

  const handleSurpriseClick = () => {
    sessionStorage.setItem("surpriseClicked", "true");
  };

  return (
    <footer className="border-t border-primary/20 py-12 pb-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="#hero" className="flex items-center space-x-2">
              <Smartphone className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-glow">Rounik Chatterjee</span>
            </Link>
            <p className="text-muted-foreground">
              Crafting exceptional mobile experiences with React Native and modern technologies.
            </p>
            <div className="flex space-x-2">
               <Button asChild variant="outline" size="icon" className="rounded-full border-primary/50 hover:border-primary">
                  <Link href="https://github.com/rounikc" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border-primary/50 hover:border-primary">
                  <Link href="https://linkedin.com/in/rounikchatterjee04" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full border-primary/50 hover:border-primary">
                  <Link href="mailto:rounikchatterjee03iembca2025@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
             <ul className="space-y-2">
                {services.map((service) => (
                    <li key={service.title} className="text-muted-foreground">
                    {service.title}
                    </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} hanabi. All rights reserved.
            </p>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Made by hanabi, with <Heart className="h-4 w-4 text-accent" />
            </div>
            <div className="mt-4">
              <Link
                href="https://youtu.be/PXqcHi2fkXI?si=8zRn949pQnw0Qnd0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={handleSurpriseClick}
              >
                Surprise me! 🥳
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Mouse, Hand } from "lucide-react";

export function Hero() {
  const [showMouseIcon, setShowMouseIcon] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMouseIcon((prev) => !prev);
    }, 5000);     // 5sec timor

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-0 left-0 h-1/2 w-1/2 bg-primary/20 blur-[150px]"></div>
      <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-accent/20 blur-[150px]"></div>
       
      <div className="container z-10 flex flex-col items-center text-center">
        <motion.h1 
          className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm <span className="drop-shadow-[0_0_12px_hsl(var(--primary))] bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">Rounik Chatterjee</span>
        </motion.h1>
        <motion.h2
          className="mt-2 text-2xl font-bold tracking-tighter text-cyan-400 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          React Native Developer
        </motion.h2>
        <motion.p 
          className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Crafting beautiful, performant mobile applications with React Native and modern technologies. Bringing ideas to life on Android platforms.
        </motion.p>
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-primary via-cyan-400 to-accent text-primary-foreground">
            <Link href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
          <div className="flex gap-4">
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
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link href="#about" aria-label="Scroll to about section">
            {showMouseIcon ? (
              <Mouse className="h-8 w-8 text-primary animate-bounce" />
            ) : (
              <Hand className="h-8 w-8 text-primary animate-bounce" />
            )}
        </Link>
      </motion.div>
    </motion.section>
  );
}

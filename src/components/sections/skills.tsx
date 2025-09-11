
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Smartphone, Orbit, Database, Server, TerminalSquare, Coffee, Code, Component, Rocket } from 'lucide-react';

const TypeScriptIcon = () => (
  <img 
    src="https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1756517681043" 
    alt="TypeScript Logo" 
    className="h-12 w-12"
  />
);

const ReactNativeIcon = () => (
  <img 
    src="https://cdn.brandfetch.io/idTpJSSBPD/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1756420205379" 
    alt="React Native Logo" 
    className="h-12 w-12"
  />
);

const ReactIcon = () => (
  <img 
    src="https://cdn.brandfetch.io/idREYlLkpD/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746616583363" 
    alt="TypeScript Logo" 
    className="h-12 w-12"
  />
);

const JavaScriptIcon = () => (
  <img 
    src="https://cdn.brandfetch.io/id46AjGqHd/w/256/h/256/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1750033630720" 
    alt="TypeScript Logo" 
    className="h-12 w-12"
  />
);

const PythonIcon = () => (
  <img 
    src="https://cdn.brandfetch.io/idbpOFBgcc/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1756276958805" 
    alt="TypeScript Logo" 
    className="h-12 w-12"
  />
);

const FirebaseIcon = () => (
  <img 
    src="https://cdn.brandfetch.io/idO5yB5awg/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1752648495863" 
    alt="TypeScript Logo" 
    className="h-12 w-12"
  />
);

const NodejsIcon = () => (
  <img 
    src="https://cdn.brandfetch.io/id7JRtQEAa/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1756481464226" 
    alt="TypeScript Logo" 
    className="h-12 w-12"
  />
);

const ExpoIcon = () => (
  <img 
    src="https://cdn.brandfetch.io/idzGRYC3u5/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667740799142" 
    alt="TypeScript Logo" 
    className="h-12 w-12"
  />
);

const skillsData = [
  { 
    name: "React Native", 
    category: "Mobile",
    color: "text-green-400",
    icon: ReactNativeIcon
  },
  { 
    name: "React", 
    category: "Frontend",
    color: "text-cyan-400",
    icon: ReactIcon
  },
  { 
    name: "TypeScript", 
    category: "Language", 
    color: "text-pink-500",
    icon: TypeScriptIcon
  },
  { 
    name: "JavaScript", 
    category: "Language",
    color: "text-yellow-400",
    icon: JavaScriptIcon
  },
  {
    name: "Java",
    category: "Language",
    color: "text-orange-500",
    icon: Coffee,
  },
  {
    name: "C",
    category: "Language",
    color: "text-blue-600",
    icon: Component,
  },
  {
    name: "C++",
    category: "Language",
    color: "text-blue-700",
    icon: Component,
  },
  {
    name: "Python",
    category: "Language",
    color: "text-yellow-500",
    icon: PythonIcon,
  },
  { 
    name: "Firebase", 
    category: "Backend",
    color: "text-amber-400",
    icon: FirebaseIcon
  },
  { 
    name: "Node.js", 
    category: "Backend",
    color: "text-lime-500",
    icon: NodejsIcon
  },
  { 
    name: "Expo", 
    category: "Tools",
    color: "text-gray-400",
    icon: ExpoIcon
  },
];

const categories = ["All", "Mobile", "Frontend", "Language", "Backend", "Tools"];

export function Skills() {
  const [filter, setFilter] = useState("All");

  const filteredSkills = skillsData.filter((skill) =>
    filter === "All" ? true : skill.category === filter
  );

  return (
    <motion.section
      id="skills"
      className="w-full bg-background py-20 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">Tech Stack</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-primary"></div>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Technologies I love working with.❤
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border-primary/20",
                filter === category && "bg-primary text-primary-foreground"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="group flex h-full flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 border-primary/40 shadow-[0_0_10px_hsl(var(--primary)/0.3)]">
                <CardContent className="flex flex-col items-center gap-4 p-0">
                  <div className={cn("transition-transform duration-300 group-hover:scale-110", skill.color)}>
                    <skill.icon />
                  </div>
                  <h3 className={cn("text-lg font-bold", skill.color)}>{skill.name}</h3>
                  <div className="text-xs text-muted-foreground rounded-full bg-secondary px-2 py-0.5">
                    {skill.category}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

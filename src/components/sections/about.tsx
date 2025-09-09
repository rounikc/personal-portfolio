"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code, Zap, Users } from "lucide-react";

const expertiseData = [
    {
        icon: Smartphone,
        title: "Mobile Expert",
        description: "Specialized in creating stunning mobile experiences",
    },
    {
        icon: Code,
        title: "Full-Stack",
        description: "Expert in React Native and a bit of modern web technologies",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimized apps with smooth animations and fast load times",
    },
    {
        icon: Users,
        title: "User-Centric",
        description: "Focus on intuitive UX and accessibility standards",
    },
];

const skillsTags = ["React Native", "TypeScript", "Expo", "Firebase", "Next.js", "JavaScript"];

export function About() {
  return (
    <motion.section
      id="about"
      className="w-full py-20 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-20">
          <div className="flex flex-col justify-center space-y-6 lg:col-span-2">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About <span className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">Me</span>
                </h2>
                <div className="h-1 w-16 bg-primary"></div>
              <p className="text-muted-foreground md:text-lg">
                I’m a mobile app developer passionate about creating smooth, user-friendly Android applications. With React Native as my primary tool, I love turning ideas into apps that solve real-world problems and deliver seamless experiences.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Alongside mobile development, I also explore web technologies, cloud, and machine learning. These skills help me build complete solutions and stay adaptable to new challenges in tech.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
                {skillsTags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-primary/50 text-primary/80">{tag}</Badge>
                ))}
            </div>
          </div>

            <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="w-full max-w-xs overflow-hidden border-accent/40 shadow-[0_0_10px_hsl(var(--accent)/0.5)]">
                    <CardContent className="p-0">
                    <Image
                        src="/profile-picture.jpg"
                        alt="About Me"
                        width={600}
                        height={800}
                        className="h-full w-full object-cover"
                        data-ai-hint="portrait person"
                    />
                    </CardContent>
                </Card>
            </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertiseData.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="h-full bg-card/50 text-center p-6 border-primary/40 shadow-[0_0_10px_hsl(var(--primary)/0.3)]">
                        <div className="flex justify-center mb-4">
                            <item.icon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                </motion.div>
            ))}
          </div>
      </div>
    </motion.section>
  );
}

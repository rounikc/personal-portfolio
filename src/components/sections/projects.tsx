"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Krishi Katha App",
    description: "Amazon like alternative for farmers, also supports communities, chats and crop predictions.",
    image: "/projects/krishi.jpg",
    hint: "null",
    category: "React Native",
    githubUrl: "https://github.com/rounikc/krishi-katha-demo",
  },
  {
    title: "Weather App",
    description: "Simple weather display app.",
    image: "/projects/weather.jpg",
    hint: "null",
    category: "React Native",
    githubUrl: "https://github.com/rounikc/weather-react-native-app",
  },
  {
    title: "ML algo for EV Charger and Station Detection",
    description: "ML Algorithm for EV charger pin type and EV charger station detection and differentiation.",
    image: "/projects/mlal.jpg",
    hint: "null",
    category: "Machine Learning(ML)",
    githubUrl: "https://github.com/rounikc/Charger-Recognition-Model",
  },
  {
    title: "Tap Tap Plane!",
    description: "Fun python/pygame game, just tap the screen to fly the plane and avoid obstacles.",
    image: "/projects/taptap.jpg",
    hint: "null",
    category: "Fun/Python",
    githubUrl: "https://github.com/rounikc/Tap-plane_python",
  },
  {
    title: "S N E K !",
    description: "Very dangerous Snek! Feed it red dots to keep happy. Made with Java",
    image: "/projects/snek.jpg",
    hint: "social network",
    category: "null",
    githubUrl: "https://github.com/rounikc/java-snake",
  },
  {
    title: "WebDesign",
    description: "Website design, for visualization purposes only.",
    image: "/projects/webdesg.jpg",
    hint: "null",
    category: "Web Apps",
    githubUrl: "https://github.com/rounikc/webdesign-demo",
  },
];

export function FeaturedProjects() {
  return (
    <motion.section
      id="projects"
      className="w-full py-20 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured <span className="text-cyan-400 drop-shadow-[0_0_8px_hsl(var(--primary-blue))]">Projects</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-primary via-cyan-400 to-accent"></div>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Showcasing mobile applications that combine beautiful design with powerful functionality
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col overflow-hidden transition-all hover:scale-105 hover:shadow-accent/20 hover:shadow-lg border-accent/40 shadow-[0_0_10px_hsl(var(--accent)/0.5)]">
                <CardContent className="flex flex-col p-0 flex-grow">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                      data-ai-hint={project.hint}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-accent drop-shadow-[0_0_8px_hsl(var(--accent))]">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">{project.description}</p>
                    <Button asChild variant="outline" className="mt-4 w-full border-primary/50 hover:border-primary">
                        <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Go to GitHub
                        </Link>
                    </Button>
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

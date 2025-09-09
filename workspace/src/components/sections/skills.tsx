"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  "React & Web": [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 98 },
  ],
  "React Native & Mobile": [
    { name: "React Native", level: 92 },
    { name: "Expo", level: 88 },
    { name: "Firebase", level: 80 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 75 },
  ],
};

export function Skills() {
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-glow">
            My Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            A showcase of my technical expertise and the tools I use to build modern applications.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="neon-border">
            <CardHeader>
              <CardTitle className="text-primary">React & Web</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillsData["React & Web"].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 [&>div]:bg-primary" />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="neon-border">
            <CardHeader>
              <CardTitle className="text-primary">React Native & Mobile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillsData["React Native & Mobile"].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 [&>div]:bg-primary" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}

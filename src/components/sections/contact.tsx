"use client";

import { Github, Mail, Linkedin, Twitter, Instagram, Bot } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "rounikchatterjee03iembca2025@gmail.com",
    href: "mailto:rounikchatterjee03iembca2025@gmail.com",
  },
  {
    icon: Github,
    title: "GitHub",
    detail: "@rounikc",
    href: "https://github.com/rounikc",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    detail: "@rounikchatterjee04",
    href: "#",
  },
  {
    icon: Twitter,
    title: "X",
    detail: "@hanabi",
    href: "https://x.com/hnbi_04",
  },
  {
    icon: Instagram,
    title: "Instagram",
    detail: "@hnbix",
    href: "https://instagram.com/hnbix.04",
  },
  {
    icon: Bot,
    title: "Discord",
    detail: "hanabi",
    href: "https://discord.com/users/905082911869530133",
  },
];

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="w-full py-20 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In <span className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">Touch</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-primary via-cyan-400 to-accent"></div>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Ready to bring your mobile app idea to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-muted-foreground">
              I'm always excited to work on new mobile projects and collaborate with innovative teams. Whether you need a complete app development or consultation, I'm here to help.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item) => (
                <Link key={item.title} href={item.href}>
                  <Card className="group flex h-full cursor-pointer items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 border-primary/40 shadow-[0_0_10px_hsl(var(--primary)/0.3)]">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <item.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          
          <Card className="flex flex-col p-4 md:p-8 border-accent/40 shadow-[0_0_10px_hsl(var(--accent)/0.5)]">
             <CardHeader>
                <CardTitle className="text-accent drop-shadow-[0_0_8px_hsl(var(--accent))] text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                        <Input id="name" type="text" placeholder="Your name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                </div>
                 <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject</label>
                    <Input id="subject" type="text" placeholder="Project discussion" />
                </div>
                <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px]" />
                </div>
                <Button type="submit" size="lg" className="bg-gradient-to-r from-primary via-cyan-400 to-accent">Send Message</Button>
                </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}

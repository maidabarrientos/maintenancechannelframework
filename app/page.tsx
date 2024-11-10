"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Layout, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundAnimation } from "@/components/background-animation";
import { SiteHeader } from "@/components/site-header";

const features = [
  {
    icon: Layout,
    title: "5 Beautiful Designs",
    description: "Choose from 5 stunning, production-ready designs for your coming soon page.",
  },
  {
    icon: Sparkles,
    title: "Animated Components",
    description: "Smooth animations and transitions powered by Framer Motion.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Built with Next.js 13, TypeScript, and Tailwind CSS for modern development.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Easily customize colors, themes, and components to match your brand.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
      <SiteHeader />
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Coming Soon Framework
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A beautiful, customizable framework for creating stunning coming soon pages with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/docs">
                <Button size="lg" className="gap-2">
                  View Documentation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/preview">
                <Button size="lg" variant="outline" className="gap-2">
                  Live Preview
                  <Layout className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-card/50 backdrop-blur-lg rounded-xl p-6 border border-border"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BackgroundAnimation } from "@/components/background-animation";

export default function Design1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 relative z-10 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Something amazing is in the works. Stay tuned!
          </p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" />
            <Button className="gap-2">
              <Mail className="w-4 h-4" />
              Notify Me
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
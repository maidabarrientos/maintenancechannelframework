"use client";

import { motion } from "framer-motion";
import { Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const floatingStars = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  scale: Math.random() * 0.5 + 0.5,
}));

export default function Design3() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-background to-blue-900 relative overflow-hidden">
      {floatingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          initial={{ x: `${star.x}%`, y: `${star.y}%`, scale: star.scale }}
          animate={{
            y: [`${star.y}%`, `${star.y + 10}%`, `${star.y}%`],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: star.id * 0.2,
          }}
        >
          <Star className="w-4 h-4 text-white/20" />
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full text-center"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Coming Soon
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-8">
            A new creative experience is about to unfold.
          </p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white/10" />
            <Button className="gap-2 bg-white/10 hover:bg-white/20">
              <Mail className="w-4 h-4" />
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
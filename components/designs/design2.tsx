"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Design2() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're working on something special. Be the first to know when we launch.
          </p>
          
          <div className="flex gap-2">
            <Input type="email" placeholder="Enter your email" />
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
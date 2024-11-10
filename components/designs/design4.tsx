"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Network, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Design4() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/10 rounded-full"
            initial={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.1,
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            AI-Powered Future
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Revolutionizing the way we interact with technology. Join us on this journey into the future of artificial intelligence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Brain, text: "Neural Networks" },
              { icon: Cpu, text: "Deep Learning" },
              { icon: Network, text: "AI Integration" },
              { icon: Sparkles, text: "Smart Solutions" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <item.icon className="w-8 h-8 mb-2 mx-auto text-blue-400" />
                <p className="text-sm text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
              Join Waitlist
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
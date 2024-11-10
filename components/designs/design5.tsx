"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Coins, Timer, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Design5() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-blue-900/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            Token Sale Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the next generation of decentralized finance. Join our presale and secure your tokens early.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Timer, text: "Presale Starts Soon" },
              { icon: Coins, text: "Limited Supply" },
              { icon: TrendingUp, text: "Growth Potential" },
              { icon: Users, text: "Strong Community" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <item.icon className="w-8 h-8 mb-2 mx-auto text-purple-400" />
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
            <Button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white">
              Join Presale
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
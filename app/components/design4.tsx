"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BackgroundAnimation } from "./background-animation";

export default function Design4() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundAnimation />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            AI-Powered Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Experience the next generation of artificial intelligence. Coming soon to revolutionize your world.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              required
            />
            <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Get Notified
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
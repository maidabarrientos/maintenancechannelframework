"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Success! We'll notify you when we launch.");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={cn(
              "pl-11 pr-4 py-6 text-base",
              "transition-all duration-200 ease-in-out",
              "border-2 hover:border-primary/50 focus:border-primary"
            )}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className={cn(
            "px-8 py-6",
            "bg-primary hover:bg-primary/90",
            "transition-all duration-200 ease-in-out"
          )}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Notify Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
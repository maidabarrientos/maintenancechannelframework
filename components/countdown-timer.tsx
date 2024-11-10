"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeUnit {
  label: string;
  value: string;
}

export function CountdownTimer() {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
    { label: "Days", value: "00" },
    { label: "Hours", value: "00" },
    { label: "Minutes", value: "00" },
    { label: "Seconds", value: "00" },
  ]);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeUnits([
        { label: "Days", value: days.toString().padStart(2, "0") },
        { label: "Hours", value: hours.toString().padStart(2, "0") },
        { label: "Minutes", value: minutes.toString().padStart(2, "0") },
        { label: "Seconds", value: seconds.toString().padStart(2, "0") },
      ]);
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial update

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-16 flex flex-wrap justify-center gap-4"
    >
      {timeUnits.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
          className="text-center bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg rounded-lg p-6 w-28 border border-white/10"
        >
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {item.value}
          </div>
          <div className="text-sm text-muted-foreground mt-2">{item.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
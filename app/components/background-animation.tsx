"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const generateCircles = (count: number) => 
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    className: cn(
      "absolute rounded-full blur-3xl opacity-10",
      i % 3 === 0 ? "bg-gradient-to-br from-blue-500 to-purple-500" :
      i % 3 === 1 ? "bg-gradient-to-br from-pink-500 to-orange-500" :
                    "bg-gradient-to-br from-green-500 to-teal-500"
    ),
    size: Math.floor(Math.random() * 150 + 100),
    initialPosition: {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    }
  }));

export function BackgroundAnimation() {
  const [circles, setCircles] = useState<Array<{
    id: number;
    className: string;
    size: number;
    initialPosition: { x: number; y: number };
  }>>([]);

  useEffect(() => {
    setCircles(generateCircles(15));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className={circle.className}
          initial={{
            width: circle.size,
            height: circle.size,
            x: `${circle.initialPosition.x}%`,
            y: `${circle.initialPosition.y}%`,
            opacity: 0
          }}
          animate={{
            x: [
              `${circle.initialPosition.x}%`,
              `${circle.initialPosition.x + 5}%`,
              `${circle.initialPosition.x}%`
            ],
            y: [
              `${circle.initialPosition.y}%`,
              `${circle.initialPosition.y + 5}%`,
              `${circle.initialPosition.y}%`
            ],
            opacity: 0.1
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
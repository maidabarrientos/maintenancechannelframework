"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import Design1 from "@/components/designs/design1";
import Design2 from "@/components/designs/design2";
import Design3 from "@/components/designs/design3";
import Design4 from "@/components/designs/design4";
import Design5 from "@/components/designs/design5";

const designs = [
  { id: 1, component: Design1, name: "Cosmic" },
  { id: 2, component: Design2, name: "Minimal" },
  { id: 3, component: Design3, name: "Creative" },
  { id: 4, component: Design4, name: "AI" },
  { id: 5, component: Design5, name: "Token Sale" },
];

export default function PreviewPage() {
  const [activeDesign, setActiveDesign] = useState(1);
  const DesignComponent = designs.find(d => d.id === activeDesign)?.component || Design1;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-background/80 backdrop-blur-lg rounded-full border border-border p-2 flex gap-2">
          {designs.map((design) => (
            <Button
              key={design.id}
              variant={activeDesign === design.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveDesign(design.id)}
              className="rounded-full"
            >
              {design.name}
            </Button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeDesign}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <DesignComponent />
      </motion.div>
    </div>
  );
}
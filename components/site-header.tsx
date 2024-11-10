"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Layout, FileText } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Documentation", href: "/docs", icon: FileText },
  { name: "Preview Designs", href: "/preview", icon: Layout },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Coming Soon Framework
          </Link>
          
          <nav className="flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteHeader } from "@/components/site-header";

const installCode = `# Clone the repository
git clone https://github.com/maidabarrientos/maintenancechannelframework.git

# Install dependencies
cd coming-soon-framework
npm install

# Start the development server
npm run dev`;

const usageCode = `// In your page.tsx file
import Design1 from "@/components/designs/design1";

export default function ComingSoon() {
  return <Design1 />;
}`;

const customizationCode = `// In globals.css
:root {
  --background: 224 71% 4%;
  --foreground: 213 31% 91%;
  --primary: 210 40% 98%;
  /* Add more custom colors */
}`;

export default function Documentation() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-muted-foreground">
              Everything you need to know about the Coming Soon Framework
            </p>
          </div>

          <Tabs defaultValue="installation" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="customization">Customization</TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Installation</h2>
              <p className="text-muted-foreground mb-4">
                Follow these steps to get started with the Coming Soon Framework:
              </p>
              <pre className="bg-card p-4 rounded-lg overflow-x-auto">
                <code>{installCode}</code>
              </pre>
            </TabsContent>

            <TabsContent value="usage" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Usage</h2>
              <p className="text-muted-foreground mb-4">
                The framework includes 5 different designs that you can use:
              </p>
              <ul className="list-disc list-inside mb-4 text-muted-foreground">
                <li>Design1: Cosmic theme with animated background</li>
                <li>Design2: Minimal design with clean layout</li>
                <li>Design3: Creative theme with unique animations</li>
                <li>Design4: AI-inspired design with futuristic elements</li>
                <li>Design5: Token sale theme with countdown timer</li>
              </ul>
              <pre className="bg-card p-4 rounded-lg overflow-x-auto">
                <code>{usageCode}</code>
              </pre>
            </TabsContent>

            <TabsContent value="customization" className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Customization</h2>
              <p className="text-muted-foreground mb-4">
                Customize colors, themes, and components to match your brand:
              </p>
              <pre className="bg-card p-4 rounded-lg overflow-x-auto">
                <code>{customizationCode}</code>
              </pre>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Available Components</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>EmailForm: Collect email addresses</li>
                  <li>CountdownTimer: Display time until launch</li>
                  <li>BackgroundAnimation: Animated background effects</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Link href="/preview">
              <Button size="lg">View Live Preview</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
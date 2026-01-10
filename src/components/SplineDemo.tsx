'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneDemo() {
  return (
    <Card className="w-full max-w-5xl mx-auto h-[500px] bg-card/40 backdrop-blur-xl border-border/50 overflow-hidden">
      <Spotlight
        className="from-primary/30 via-primary/20 to-transparent"
        size={300}
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Interactive 3D
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content - Spline Scene */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="z-20 relative w-full max-w-7xl mx-auto h-full flex flex-col items-center justify-center">
          <h2 className="text-primary tracking-widest uppercase text-sm md:text-base mb-4 font-body font-semibold">
            Est. 2024 • Historic Wharf District
          </h2>
          <div className="h-[200px] md:h-[300px] flex items-center justify-center w-full">
            <TextHoverEffect text="THE SALTY CLAW" />
          </div>
          <p className="max-w-xl mx-auto text-muted-foreground text-center text-lg md:text-xl font-display italic mt-8">
            "Fresh daily catch and signature rolls served with a side of salt air."
          </p>
        </div>
      </BackgroundLines>
    </div>
  );
}

export default Hero;

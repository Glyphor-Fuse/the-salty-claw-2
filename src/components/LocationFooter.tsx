import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function LocationFooter() {
  return (
    <section id="location" className="w-full py-20 bg-card overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-display text-foreground">Find Us at the Docks</h2>
           <p className="text-primary mt-2">Open Daily 11am - 10pm</p>
        </div>

        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="The Salty Claw, Wharf 4"
            href="https://maps.google.com"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-navy-900">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 font-display">
                The Salty Claw
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  42 Ocean Avenue, Harbor District
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 items-center justify-center">
                 <div className="text-center p-4">
                    <p className="text-white font-bold">RESERVATIONS</p>
                    <p className="text-accent mt-2">(555) 123-4567</p>
                 </div>
              </div>
            </div>
          </PinContainer>
        </div>
        
        <div className="w-full border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>© 2024 The Salty Claw. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="hover:text-primary transition-colors">TripAdvisor</a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default LocationFooter;

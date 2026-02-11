import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ChalkboardMenu() {
  const words = `MARKET PRICE SPECIALS
  
  Today's Fresh Haul:
  • Blue Point Oysters ...... $3.50/ea
  • Pan-Seared Scallops ..... $28
  • Fisherman's Stew ........ $24
  • The Captain's Platter ... $45
  
  Ask about our rotating draft list.`;

  return (
    <section id="catch" className="w-full py-24 bg-card relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">Daily Catch</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="p-1 md:p-4 border-8 border-primary/30 rounded-lg bg-[#1a1a1a] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="bg-[#1C1C1C] p-8 md:p-12 rounded border border-white/10 min-h-[400px] flex flex-col items-center justify-center shadow-inner">
            <div className="font-chalk text-2xl md:text-4xl text-white/90 leading-relaxed whitespace-pre-line text-center">
              <TextGenerateEffect words={words} className="font-chalk text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChalkboardMenu;

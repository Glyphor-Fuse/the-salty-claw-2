import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function Gallery() {
  const items = [
    {
      title: "Signature Lobster Roll",
      description: "Chilled Maine lobster, lemon mayo, toasted brioche.",
      imageUrl: "/images/lobster-roll.png",
      colSpan: "md:col-span-2",
    },
    {
      title: "Oysters Rockefeller",
      description: "Spinach, butter, breadcrumbs, pernod.",
      imageUrl: "/images/oysters.png",
      colSpan: "md:col-span-1",
    },
    {
      title: "Clam Chowder",
      description: "Creamy, hearty, served with house crackers.",
      imageUrl: "/images/chowder.png",
      colSpan: "md:col-span-1",
    },
    {
      title: "Seared Tuna",
      description: "Sesame crust, wasabi aioli, soy glaze.",
      imageUrl: "/images/tuna.png",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">Menu Highlights</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Sustainably sourced seafood prepared with respect for the ingredients.
          </p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title=""
              description=""
              header={
                <div className="h-full w-full min-h-[15rem] rounded-xl overflow-hidden border border-white/10">
                   <DirectionAwareHover imageUrl={item.imageUrl} className="w-full h-full object-cover">
                      <p className="font-bold text-xl text-white font-display">{item.title}</p>
                      <p className="font-normal text-sm text-neutral-200 font-body">{item.description}</p>
                   </DirectionAwareHover>
                </div>
              }
              className={`${item.colSpan} bg-transparent border-none shadow-none p-0`}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export default Gallery;

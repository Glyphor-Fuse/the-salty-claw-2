import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ChalkboardMenu } from "@/components/ChalkboardMenu";
import { Gallery } from "@/components/Gallery";
import { LocationFooter } from "@/components/LocationFooter";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ChalkboardMenu />
      <Gallery />
      <LocationFooter />
    </main>
  );
};

export default Index;
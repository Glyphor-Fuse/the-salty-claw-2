import { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconFish, IconMapPin } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Catch of the Day",
      link: "#catch",
      icon: <IconFish className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Menu",
      link: "#menu",
      icon: <IconFish className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Location",
      link: "#location",
      icon: <IconMapPin className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} className="bg-secondary/90 border-primary/20" />
    </div>
  );
}

export default Navbar;

import type {Section} from "@/types/section.ts";
import HeroSection from "@/components/sections/HeroSection.tsx";
import TradeServiceSection from "@/components/sections/TradeServiceSection.tsx";

export const sections: Section[] = [
  {
    id: "hero",
    component: HeroSection,
    props: {
      id: "hero"
    }
  },
  {
    id: "trade-service",
    component: TradeServiceSection,
    props: {
      id: "trade-service"
    }
  },
]

// Navigation items for the navbar
export const navigationSections = [
    { id: 'trade-service', title: 'Our Services' },
    { id: 'contact', title: 'Contact Us' }
];
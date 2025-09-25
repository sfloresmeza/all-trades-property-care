import type {Section} from "@/types/section.ts";
import HeroSection from "@/components/sections/HeroSection.tsx";

export const sections: Section[] = [
  {
    id: "hero",
    component: HeroSection,
    props: {
      id: "hero"
    }
  },
]

// Navigation items for the navbar
export const navigationSections = [
    { id: 'trade-service', title: 'Our Services' },
    { id: 'contact', title: 'Contact Us' }
];
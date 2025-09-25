import type {Section} from "@/types/section.ts";
import HeroSection from "@/components/sections/HeroSection.tsx";
import TradeServiceSection from "@/components/sections/TradeServiceSection.tsx";
import ServiceSection from "@/components/sections/ServiceSection.tsx";
import ContactSection from "@/components/sections/ContactSection.tsx";

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
  {
    id: "post-construction",
    component: ServiceSection,
    props: {
      id: "post-construction",
      title: "POST CONSTRUCTION CLEAN-UP SERVICE",
      content: "ALLTRADES specializes in providing meticulous and comprehensive cleaning services to ensure your space is transformed from a construction zone into a pristine and inviting environment. \nOur dedicated team of cleaning professionals possesses extensive expertise in handling the unique challenges that arise after construction projects. Whether you've recently completed a renovation, remodel, or new construction, we have the skills and knowledge to handle the post-installation clean-up with utmost precision. \nWith our meticulous approach, we remove all debris, dust, and construction-related materials from your space. From the smallest details to larger clean-up tasks, we leave no corner untouched, ensuring that your area is ready for immediate use.",
      imageUrl: "https://images.unsplash.com/photo-1716915372367-c170ee1e7d24?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Construction clean-up service",
      imagePosition: "left",
      variant: "default"
    }
  },
  {
    id: "office-cleaning",
    component: ServiceSection,
    props: {
      id: "office-cleaning",
      title: "OFFICE CLEANING (Services for Commercial Facilities)",
      content: "Your workspace should be a safe place where you, your employees and your business can thrive. ALLTRADES helps your business grow by providing a safe environment for your staff and clients. Contact us today and watch your business take off with our higher standard of clean. ALLTRADES ensures you make the right first impression by thoroughly cleaning your office building. This includes lobbies, conference rooms, open office areas and more.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
      imageAlt: "Professional office cleaning",
      imagePosition: "right",
      variant: "alternate"
    }
  },
  {
    id: "post-staging",
    component: ServiceSection,
    props: {
      id: "post-staging",
      title: "POST-STAGING CLEAN UP",
      content: "To complete the post-staging clean-up, we go beyond standard cleaning practices to ensure the home exudes a sense of warmth, elegance, and readiness for prospective buyers or renters. A subtle, fresh fragrance is introduced to all rooms, carefully chosen to complement the aesthetic and create a welcoming atmosphere. each space to ensure every detail is flawless. This includes double-checking for any overlooked dust, smudges, or debris, and making minor adjustments to furniture, decor, and linens to achieve a picture-perfect arrangement.",
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000",
      imageAlt: "Post-staging home preparation",
      imagePosition: "right",
      variant: "card"
    }
  },
  {
    id: "event-center",
    component: ServiceSection,
    props: {
      id: "event-center",
      title: "EVENT CENTER CLEANING SERVICES",
      content: "After the Main Event, the Spotlight Is on Us\nWhether it's a concert or a sporting event, visitors to your event center deserve a clean, healthy and safe environment where they can enjoy the game, show or performance. Need event venue cleaning? Trust us to make your venue shine!",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000",
      imageAlt: "Event venue cleaning services",
      imagePosition: "left",
      variant: "default"
    }
  },
  {
    id: "move-cleaning",
    component: ServiceSection,
    props: {
      id: "move-cleaning",
      title: "MOVE-IN OR MOVE-OUT CLEANING",
      content: "Moving can be stressful enough without worrying about having to tidy up after you're finished. ALLTRADES is here to take the stress out of moving. The last thing you want to worry about is having to clean your home or apartment and prepare it for the next owners or tenants. We provide thorough move-in and move-out services that will allow you to focus on what matters most—your new home.",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000",
      imageAlt: "Move-in and move-out cleaning",
      imagePosition: "right",
      variant: "alternate"
    }
  },
  {
    id: "deep-cleaning",
    component: ServiceSection,
    props: {
      id: "deep-cleaning",
      title: "DEEP CLEANING",
      content: "Deep cleaning is a thorough, detailed cleaning that removes dirt, dust, and buildup that regular cleaning can't. It includes scrubbing, disinfecting, and reaching hidden areas to make your home truly fresh and spotless. At ALLTRADES, our team knows exactly how to tackle tough messes, using the best products and techniques to give your home a deep, refreshing clean.",
      imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Deep cleaning services",
      imagePosition: "left",
      variant: "default"
    }
  },
  {
    id: "regular-cleaning",
    component: ServiceSection,
    props: {
      id: "regular-cleaning",
      title: "REGULAR HOME CLEANING",
      content: "You work hard during the week, how stressful will it be to come home and clean. Thanks to our team, you don't have to bother yourself about this anymore. We're equipped to provide a wide array of home cleaning services and detailed cleaning. We combine your needs and wants with our time-tested cleaning methods to create your very own cleaning plan and follow it every time.",
      imageUrl: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1000",
      imageAlt: "Regular home cleaning service",
      imagePosition: "right",
      variant: "alternate"
    }
  },
  {
    id: "airbnb-cleaning",
    component: ServiceSection,
    props: {
      id: "airbnb-cleaning",
      title: "AIRBNB & SHORT-TERM RENTAL CLEANING",
      content: "Hosting guests requires your property to be in top shape. Our Airbnb cleaning service professionals offer reliable and efficient cleaning tailored to short-term rentals. We understand the importance of quick turnovers and maintaining a guest-ready space.\nOur vacation rental cleaning includes:\n- Thorough cleaning between guest stays\n- Fresh linens and towels\n- Restocking essential supplies\n- Short-term rental cleaning for all property sizes\n- Flexible scheduling for last-minute bookings\nThis type of service is designed to help maintain cleanliness and tidiness over time, rather than providing a one-time or occasional cleaning.",
      imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000",
      imageAlt: "Airbnb and short-term rental cleaning",
      imagePosition: "left",
      variant: "default"
    }
  },
  {
    id: "contact",
    component: ContactSection,
    props: {
      id: "contact"
    }
  }
]

// Navigation items for the navbar
export const navigationSections = [
    { id: 'trade-service', title: 'Our Services' },
    { id: 'contact', title: 'Contact Us' }
];
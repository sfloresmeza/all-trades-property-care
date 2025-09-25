import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface HeroSectionProps {
  id: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToServices = () => {
    const element = document.getElementById('trade-service');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-off">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="flex items-center space-x-4 mb-6">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  ALLTRADES
                </h1>
                <p className="text-xl lg:text-2xl text-primary font-semibold">
                  PROPERTY CARE
                </p>
              </div>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-foreground leading-tight">
              Complete Property Care Under One Roof
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From plumbing and electrical to cleaning and landscaping — we handle every aspect of property care.
              One call, one team, complete peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={scrollToContact}>
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="border-primary text-primary hover:bg-primary/5"
              >
                <ArrowDown className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000"
              alt="Professional property maintenance team"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
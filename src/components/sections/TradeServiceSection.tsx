import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TradeServiceSectionProps {
  id: string;
}

const TradeServiceSection = ({ id }: TradeServiceSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const offerings = [
    "Comprehensive Services: From plumbing, electrical, and handyman work to cleaning, landscaping, and seasonal care — we do it all.",
    "One Point of Contact: No more chasing multiple providers. One call, one invoice, one team you can trust.",
    "Tailored for All Clients: Whether you're a homeowner, landlord, Airbnb host, or property manager, our services adapt to your needs."
  ];

  const benefits = [
    "Time-Saving: Simplify property care with a full-service solution.",
    "Quality-Driven: Skilled, vetted tradespeople ensure professional results every time.",
    "Reliable: Available year-round, including emergencies and seasonal upkeep.",
    "Cost-Efficient: Bundle services to save money while keeping your property in peak condition."
  ];

  return (
    <section id={id} className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            TRADE SERVICE<br/>(ALL-IN-ONE)
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At ALLTRADES PROPERTY CARE, we understand that managing a property can fell like managing ten different contractors at once. That's why we created a smarter solution – a single, reliable partner who brings every trade under one roof.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 mb-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* What We Offer */}
          <Card className="h-fit">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">What We Offer</h3>
              <div className="space-y-4">
                {offerings.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="h-fit">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With ALLTRADES PROPERTY CARE, you no longer need to juggle multiple contractors or worry about quality. We make property ownership simpler, safer, and stress-free — giving you more time to enjoy the things that matter most.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us Today
            </Button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?q=80&w=1000"
              alt="Professional handyman working on home repairs"
              className="rounded-lg w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeServiceSection;
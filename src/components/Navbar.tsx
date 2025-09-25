import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

interface NavbarProps {
  sections: Array<{ id: string; title: string }>;
}

const Navbar = ({ sections }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Separate main sections from services
  const mainSections = sections.filter(section =>
    section.id === 'trade-service' || section.id === 'contact'
  );

  const serviceSections = sections.filter(section =>
    section.id !== 'trade-service' && section.id !== 'contact'
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/logo.jpg"
              alt="ALLTRADES Property Care"
              className="h-10 w-10 rounded-full"
            />
            <span className="font-bold text-xl text-foreground">ALLTRADES</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {section.id === 'trade-service' ? 'Our Services' : section.title}
              </button>
            ))}

            {/*/!* Services Dropdown *!/*/}
            {/*<DropdownMenu>*/}
            {/*  <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">*/}
            {/*    Services <ChevronDown className="ml-1 h-4 w-4" />*/}
            {/*  </DropdownMenuTrigger>*/}
            {/*  <DropdownMenuContent align="end" className="w-64">*/}
            {/*    {serviceSections.map((section) => (*/}
            {/*      <DropdownMenuItem*/}
            {/*        key={section.id}*/}
            {/*        onClick={() => scrollToSection(section.id)}*/}
            {/*        className="cursor-pointer"*/}
            {/*      >*/}
            {/*        {section.title}*/}
            {/*      </DropdownMenuItem>*/}
            {/*    ))}*/}
            {/*  </DropdownMenuContent>*/}
            {/*</DropdownMenu>*/}

            <Button className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {mainSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {section.id === 'trade-service' ? 'Our Services' : section.title}
                </button>
              ))}

              <div className="py-2">
                <p className="text-sm font-medium text-foreground mb-2">All Services:</p>
                <div className="pl-4 space-y-2">
                  {serviceSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="block text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
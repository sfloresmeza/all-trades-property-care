import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/logo.jpg"
                alt="ALLTRADES Property Care"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">ALLTRADES</h3>
                <p className="text-primary-aqua">PROPERTY CARE</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for comprehensive property care services. From plumbing and electrical to cleaning and landscaping — we handle it all.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-aqua" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-aqua" />
                <a href="mailto:info@alltradespc.com" className="text-gray-300 hover:text-white transition-colors">
                  info@alltradespc.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('trade-service')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Post Construction Clean-up</li>
              <li className="text-gray-300">Office Cleaning</li>
              <li className="text-gray-300">Event Center Cleaning</li>
              <li className="text-gray-300">Deep Cleaning</li>
              <li className="text-gray-300">Airbnb Cleaning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ALLTRADES Property Care. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Developed by{" "}
            <a href="https://bytesphere.ca" className="underline hover:text-white" target="_blank"
               rel="noopener noreferrer">
              ByteSphere
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
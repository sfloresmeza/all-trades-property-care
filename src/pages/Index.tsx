import Navbar from "@/components/Navbar";
import { sections, navigationSections } from "@/sections";
import Footer from "@/components/Footer.tsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar sections={navigationSections} />

      <main className="mt-0">
        {sections.map((section) => {
          const Component = section.component;
          return <Component key={section.id} {...section.props} />;
        })}
      </main>

      <Footer />
    </div>
  );
};

export default Index;

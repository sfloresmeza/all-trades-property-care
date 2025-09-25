import Navbar from "@/components/Navbar";
// import FloatingCallButton from "@/components/FloatingCallButton";
// import Footer from "@/components/Footer";
import { navigationSections } from "@/sections";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar sections={navigationSections} />

      {/*<main>*/}
      {/*  {sections.map((section) => {*/}
      {/*    const Component = section.component;*/}
      {/*    return <Component key={section.id} {...section.props} />;*/}
      {/*  })}*/}
      {/*</main>*/}

      {/*<Footer />*/}
      {/*<FloatingCallButton />*/}
    </div>
  );
};

export default Index;

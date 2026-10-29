import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import FeatureSection from "./components/FeatureSection";
import WorkflowSection from "./components/WorkflowSection";
import TestimonialSection from "./components/TestimonialSection";
import SystemOfRecord from "./components/SystemOfRecord";
import RevenueStack from "./components/RevenueStack";
import Products from "./components/Products";
import EnterpriseSection from "./components/EnterpriseSection";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <Hero />
        <LogoCloud />
        <FeatureSection />
        <WorkflowSection />
        <TestimonialSection />
        <SystemOfRecord />
        <RevenueStack />
        <Products />
        <EnterpriseSection />
      </main>
    </>
  );
}


export default App;
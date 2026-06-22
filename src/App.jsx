import React from 'react';
import { Hero } from './components/sections/Hero';
import { IdentificationSection } from './components/sections/IdentificationSection';
import { MechanismSection } from './components/sections/MechanismSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { GainsSection } from './components/sections/GainsSection';
import { OfferSection } from './components/sections/OfferSection';
import { MentorSection } from './components/sections/MentorSection';
import { FAQSection } from './components/sections/FAQSection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <main>
      <Hero />
      <IdentificationSection />
      <MechanismSection />
      <ComparisonSection />
      <GainsSection />
      <OfferSection />
      <MentorSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default App;

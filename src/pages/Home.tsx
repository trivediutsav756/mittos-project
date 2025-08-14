import React from 'react';
import HeroSection from '../components/HeroSection';
import MarqueeSection from '../components/MarqueeSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { mittosComparison } from '../data/comparisonData';
// import RevenueFlowDiagram from '../components/RevenueFlowDiagram';
// import { RevenueFunnel } from '../components/RevenueFunnel';
import RevenueSection from '../components/RevenueSection';
import WhatsAppBulkMessages from '../components/WhatsAppBulkMessages';
import WhatsAppChatbotBuilder from '../components/WhatsAppChatbotBuilder';


const Home = () => {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <ComparisonSection
           data={mittosComparison}
           heading="How Mittos API Transforms Communication"
           beforeTitle="Before Mittos API"
           afterTitle="After Mittos API"
      />
      {/* <RevenueFlowDiagram /> */}
      {/* <RevenueFunnel /> */}
      <RevenueSection />
      <WhatsAppBulkMessages />;
      <WhatsAppChatbotBuilder/>;
    </main>
  );
};

export default Home;
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
import WhatsAppForms from '../components/WhatsAppForms';
import DripCampaignSection from '../components/DripCampaignSection';
import CtwaSection from '../components/CtwaSection';

import AutomationSection from '../components/AutomationSection';
import PabblyComparisonSection from '../components/PabblyComparisonSection';
import SalesDashboard from '../components/SalesDashboard';
import LeadSources from '../components/LeadSources';
import TrustSection from '../components/TrustSection';
import SecuritySection from '../components/SecuritySection';


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
      <WhatsAppBulkMessages />
      <WhatsAppChatbotBuilder/>
      <WhatsAppForms/>
      <DripCampaignSection />
      <CtwaSection />
      <SalesDashboard />
      <LeadSources />
      <AutomationSection />
      <PabblyComparisonSection />
      <TrustSection />
      <SecuritySection />
     
    </main>
  );
};

export default Home;
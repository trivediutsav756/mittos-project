import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, MessageCircle, Triangle, Mail, Phone, Bot, CheckCircle, X, TrendingUp, LucideIcon } from 'lucide-react';
import IconDiagram from './IconDiagram';

// Type definitions
interface FlowingParticle {
  id: number;
  source: keyof typeof socialIcons;
  stage: number;
  x: number;
  opacity: number;
}

interface Stats {
  leads: number;
  qualified: number;
  positive: number;
  negative: number;
  won: number;
}

interface SocialMedia {
  icon: LucideIcon;
  color: string;
  name: string;
}

interface Tool {
  icon: LucideIcon;
  name: string;
  color: string;
}

interface NurtureDay {
  day: string;
  active: boolean;
}

interface FlowingParticleProps {
  particle: FlowingParticle;
}

interface PipelineConnectorProps {
  fromStage: number;
  toStage: number;
  hasMultipleOutputs?: boolean;
}

interface MultiConnectorProps {
  outputs: string[];
}

const RevenueFlowDiagram: React.FC = () => {
  const [flowingData, setFlowingData] = useState<FlowingParticle[]>([]);
  const [stats, setStats] = useState<Stats>({
    leads: 0,
    qualified: 0,
    positive: 0,
    negative: 0,
    won: 0
  });

  // Social media icons mapping
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    whatsapp: MessageCircle,
    google: Triangle,
    others: TrendingUp
  } as const;

  // Generate flowing data particles
  useEffect(() => {
    const generateParticle = (): FlowingParticle => {
      const sources: (keyof typeof socialIcons)[] = ['facebook', 'instagram', 'whatsapp', 'google', 'others'];
      const randomSource = sources[Math.floor(Math.random() * sources.length)];
      
      return {
        id: Date.now() + Math.random(),
        source: randomSource,
        stage: 0,
        x: Math.random() * 100,
        opacity: 1
      };
    };

    const interval = setInterval(() => {
      setFlowingData(prev => [
        ...prev.slice(-15), // Keep only last 15 particles
        generateParticle()
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Animate particles through stages
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setFlowingData(prev => 
        prev.map(particle => {
          if (particle.stage < 6) {
            return { ...particle, stage: particle.stage + 1 };
          }
          return null;
        }).filter((particle): particle is FlowingParticle => particle !== null)
      );
    }, 1200);

    return () => clearInterval(animationInterval);
  }, []);

  // Update stats based on flowing data
  useEffect(() => {
    const newStats: Stats = { leads: 0, qualified: 0, positive: 0, negative: 0, won: 0 };
    
    flowingData.forEach(particle => {
      if (particle.stage >= 1) newStats.leads++;
      if (particle.stage >= 3) newStats.qualified++;
      if (particle.stage >= 5) {
        if (Math.random() > 0.3) {
          newStats.positive++;
          if (particle.stage >= 6) newStats.won++;
        } else {
          newStats.negative++;
        }
      }
    });

    setStats(newStats);
  }, [flowingData]);

  const FlowingParticle: React.FC<FlowingParticleProps> = ({ particle }) => {
    const Icon = socialIcons[particle.source];
    const stagePositions: number[] = [5, 15, 25, 40, 55, 70, 85];
    
    return (
      <div
        className="absolute transition-all duration-1000 ease-linear z-30"
        style={{
          top: `${stagePositions[particle.stage]}%`,
          left: `50%`,
          transform: 'translateX(-50%)',
          opacity: particle.opacity
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
          <Icon size={10} className="text-white" />
        </div>
      </div>
    );
  };

  const PipelineConnector: React.FC<PipelineConnectorProps> = ({ fromStage, toStage, hasMultipleOutputs = false }) => {
    return (
      <div className="flex justify-center my-4 relative">
        <div className="relative">
          {/* Main vertical line */}
          <div className="w-[2px] h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full relative overflow-hidden">
            {/* Animated flow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent h-8 w-full animate-pulse opacity-60" 
                 style={{ 
                   animation: 'flow 2s linear infinite',
                   background: 'linear-gradient(to bottom, transparent 0%, #60a5fa 50%, transparent 100%)'
                 }} />
          </div>
          
          {/* Branch connectors for multiple outputs */}
          {hasMultipleOutputs && (
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
                <div className="w-16 h-2 bg-gradient-to-r from-gray-600 to-green-500 rounded-full" />
                <div className="w-16 h-2 bg-gradient-to-r from-gray-600 to-red-500 rounded-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const MultiConnector: React.FC<MultiConnectorProps> = ({ outputs }) => {
    return (
      <div className="flex justify-center my-6 relative">
        <div className="relative">
          {/* Central hub */}
          <div className="w-4 h-4 bg-gray-500 rounded-full mb-4" />
          
          {/* Multiple output lines */}
          <div className="flex justify-center space-x-4">
            {outputs.map((output, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-2 h-12 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent h-6 w-full" 
                       style={{ 
                         animation: `flow 2s linear infinite ${index * 0.3}s`,
                       }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CurvedConnectorBar: React.FC = () => {
    return (
        <div className="flex justify-center items-center relative h-20 w-full">
        <svg
          className="absolute bottom-0"
          width="300"
          height="80"
          viewBox="0 0 300 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curved horizontal line on bottom with upward curves */}
          <path
            d="M 20 40 
               Q 20 80, 60 80 
               H 240 
               Q 280 80, 280 40"
            stroke="#CCCCCC"
            strokeWidth="2"
            fill="none"
          />
  
          {/* Upward vertical lines from the horizontal line */}
          {[60, 100, 140, 180, 220].map((x, index) => (
            <line
              key={index}
              x1={x}
              y1={80}
              x2={x}
              y2={40}
              stroke="#CCCCCC"
              strokeWidth="2"
            />
          ))}
  
          {/* Center longer upward line */}
         
        </svg>
        <line
            x1={150}
            y1={80}
            x2={150}
            y2={40}
            stroke="#CCCCCC"
            strokeWidth="2"
          />
      </div>
    );
  };
  
  

  const socialMediaData: SocialMedia[] = [
    { icon: Facebook, color: 'text-blue-500', name: 'Facebook' },
    { icon: Instagram, color: 'text-pink-500', name: 'Instagram' },
    { icon: MessageCircle, color: 'text-green-500', name: 'WhatsApp' },
    { icon: Triangle, color: 'text-yellow-500', name: 'Google' },
    { icon: TrendingUp, color: 'text-purple-500', name: '99acres' }
  ];

  const automationTools: Tool[] = [
    { icon: Bot, name: 'AI Chat', color: 'text-blue-400' },
    { icon: Phone, name: 'AI Calling', color: 'text-green-400' },
    { icon: MessageCircle, name: 'Chatbot', color: 'text-purple-400' },
    { icon: MessageCircle, name: 'WhatsApp', color: 'text-green-500' },
    { icon: Mail, name: 'Email', color: 'text-red-400' }
  ];

  const nurtureDays: NurtureDay[] = [
    { day: 'Day 01', active: true },
    { day: 'Day 03', active: true },
    { day: 'Day 05', active: false },
    { day: 'Day 07', active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-2 sm:p-3 md:p-6 lg:p-8 relative overflow-hidden">
      {/* CSS for flow animation */}
      <style jsx>{`
        @keyframes flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        
        @keyframes dataFlow {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
      `}</style>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1      bg-white opacity-20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            <span className="text-green-400">5X</span> YOUR REVENUE
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300">
            with the Power of <span className="text-orange-400">AI</span> & <span className="text-green-400">WhatsApp</span>
          </p>
          <IconDiagram/>
          {/* Live Stats */}
          {/* <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-green-400 font-bold">{stats.leads}</span>
              <span className="text-white ml-2">Active Leads</span>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-blue-400 font-bold">{stats.won}</span>
              <span className="text-white ml-2">Conversions</span>
            </div>
          </div> */}
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Flowing Data Particles */}
          {flowingData.map(particle => (
            <FlowingParticle key={particle.id} particle={particle} />
          ))}

          {/* Stage 1: Social Media Sources */}
          <div className="flex justify-center mb-4">
            <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4">
                {socialMediaData.map((social, index) => (
                  <div key={index} className="flex flex-col items-center p-1 pt-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors relative">
                    <social.icon className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${social.color} mb-1 sm:mb-2`} />
                    <span className="text-[10px] xs:text-xs sm:text-sm text-gray-300">{social.name}</span>
                    {/* Individual connector lines from each source */}
                    {/* <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-500" /> */}
                  </div>
                ))}
              </div>
              {/* Convergence point */}
              {/* <div className="absolute -bottom-6  left-1/2 transform -translate-x-1/2">
                <div className="w-72 h-0.5 bg-gray-500" />
              </div> */}
              <CurvedConnectorBar/>
            </div>
          </div>

          {/* Main Pipeline Connector */}
          <PipelineConnector fromStage={1} toStage={2} />

          {/* Stage 2: Lead Capture */}
          <div className="flex justify-center mb-4">
            <div className="bg-purple-600/80 backdrop-blur-sm rounded-xl px-8 py-4 border border-purple-400 relative">
              <h3 className="text-white font-bold text-sm sm:text-base md:text-lg text-center">Lead Capture</h3>
              <div className="text-center text-purple-200 text-xs sm:text-sm mt-1">
                {stats.leads} leads captured
              </div>
            </div>
          </div>

          {/* Pipeline Connector */}
          <PipelineConnector fromStage={2} toStage={3} />

          {/* Stage 3: Wetroo Automation */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-gray-700 relative">
            <h3 className="text-white font-bold text-lg sm:text-xl text-center mb-3 sm:mb-4 md:mb-6">Wetroo Automation</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 xs:gap-3 sm:gap-4">
              {automationTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all hover:scale-105 relative">
                  <tool.icon className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${tool.color} mb-1 sm:mb-2 animate-pulse`} />
                  <span className="text-white text-[10px] xs:text-xs sm:text-sm font-medium">{tool.name}</span>
                  {/* Individual connector lines from each tool */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-500" />
                </div>
              ))}
            </div>
            {/* Convergence point */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-0.5 bg-gray-500" />
            </div>
          </div>

          {/* Pipeline Connector */}
          <PipelineConnector fromStage={3} toStage={4} />

          {/* Stage 4: Auto Qualify Lead */}
          <div className="flex justify-center mb-4">
            <div className="bg-green-600/80 backdrop-blur-sm rounded-xl px-8 py-4 border border-green-400">
              <h3 className="text-white font-bold text-sm sm:text-base md:text-lg text-center">Auto Qualify Lead</h3>
              <div className="text-center text-green-200 text-xs sm:text-sm mt-1">
                {stats.qualified} leads qualified
              </div>
            </div>
          </div>

          {/* Pipeline Connector with WhatsApp Icons */}
          <div className="flex justify-center my-6">
            <div className="relative">
              <div className="w-2 h-16 bg-gradient-to-b from-green-400 to-yellow-600 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-300 to-transparent h-8 w-full animate-pulse opacity-60" />
              </div>
              {/* WhatsApp icons on sides */}
              <div className="absolute -left-8 top-2">
                <MessageCircle className="w-6 h-6 text-green-400 animate-pulse" />
              </div>
              <div className="absolute -right-8 top-8">
                <MessageCircle className="w-6 h-6 text-green-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Stage 5: Auto Nurture Timeline */}
          <div className="flex justify-center mb-4">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 relative">
              <h3 className="text-white font-bold text-lg sm:text-xl text-center mb-2 sm:mb-3 md:mb-4">Auto Nurture</h3>
              <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4">
                {nurtureDays.map((item, index) => (
                  <div key={index} className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg ${item.active ? 'bg-yellow-600/80 text-white' : 'bg-gray-700/50 text-gray-400'} transition-all relative`}>
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                    {item.day}
                    {/* Individual connector lines */}
                    {index < 3 && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final Pipeline Split */}
          <div className="flex justify-center my-8">
            <div className="relative">
              {/* Main vertical line */}
              <div className="w-2 h-12 bg-gradient-to-b from-yellow-400 to-gray-600 rounded-full mx-auto mb-4" />
              
              {/* Split junction */}
              <div className="w-4 h-4 bg-gray-500 rounded-full mx-auto mb-4" />
              
              {/* Branch lines */}
              <div className="flex justify-center space-x-16">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-gray-600 to-green-500 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400 to-transparent h-8 w-full animate-pulse" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-gray-600 to-red-500 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-400 to-transparent h-8 w-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 6: Final Results */}
          <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
            {/* Positive Results */}
            <div className="flex-1 max-w-md">
              <div className="bg-green-600/80 backdrop-blur-sm rounded-xl p-6 border border-green-400 text-center relative">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mx-auto mb-2 sm:mb-3 md:mb-4" />
                <h4 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Positive</h4>
                <div className="text-green-200">
                  <div className="text-xl sm:text-2xl font-bold">{stats.positive}</div>
                  <div className="text-xs sm:text-sm">Interested Leads</div>
                </div>
                
                {/* Pipeline to Lead Won */}
                <div className="flex justify-center my-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-4 w-full animate-pulse opacity-60" />
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-500/60 rounded-lg">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mx-auto mb-1 sm:mb-2" />
                  <div className="text-white font-bold text-xs sm:text-sm md:text-base">Lead Won</div>
                  <div className="text-green-100 text-lg sm:text-xl font-bold">{stats.won}</div>
                </div>
              </div>
            </div>

            {/* Negative Results */}
            <div className="flex-1 max-w-md">
              <div className="bg-red-600/80 backdrop-blur-sm rounded-xl p-6 border border-red-400 text-center relative">
                <X className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mx-auto mb-2 sm:mb-3 md:mb-4" />
                <h4 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Negative</h4>
                <div className="text-red-200">
                  <div className="text-xl sm:text-2xl font-bold">{stats.negative}</div>
                  <div className="text-xs sm:text-sm">Not Interested</div>
                </div>
                
                {/* Pipeline to Long Nurture */}
                <div className="flex justify-center my-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-red-400 to-red-600 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-4 w-full animate-pulse opacity-60" />
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-500/60 rounded-lg">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mx-auto mb-1 sm:mb-2" />
                  <div className="text-white font-bold text-xs sm:text-sm md:text-base">Long Nurture</div>
                  <div className="text-red-100 text-xs sm:text-sm">Extended Follow-up</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to 5X Your Revenue?
            </h2>
            <p className="text-gray-200 mb-6">
              Join thousands of businesses already using AI-powered automation
            </p>
            <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RevenueFlowDiagram;



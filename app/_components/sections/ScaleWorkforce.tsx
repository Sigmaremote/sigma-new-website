'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function ScaleWorkforce() {
  const [expandedCard, setExpandedCard] = useState<string | null>('contractors');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const cards = [
    {
      id: 'contractors',
      title: 'Hire Contractors',
      description: 'Need talent fast? We\'ve got your back. Hire contractors in minutes using Sigma\'s rapid onboarding - with 1 click to send, we\'ll handle all the boring stuff behind the scenes, from background checks to generating W-8BEN forms.',
      linkText: 'Explore country hiring guides',
      linkUrl: '/country-guides'
    },
    {
      id: 'employees',
      title: 'Hire Employees',
      description: 'Expand your team internationally with Sigma\'s comprehensive Employer of Record (EOR) services. We handle the complexities of global hiring, from compliance to payments in +160 countries.'
    },
    {
      id: 'payroll',
      title: 'Run Payroll',
      description: 'Paying your global team shouldn\'t be a hassle. Our platform lets you manage payments in multiple currencies with just a few clicks. Pay via US ACH, and your team can choose how to receive their money-whether through direct withdrawal or saving it in their Sigma wallet.'
    },
    {
      id: 'retain',
      title: 'Retain your workers',
      description: 'Happy employees stick around. That\'s why we offer competitive local benefits packages that\'ll keep your international workers feeling valued and motivated.'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Main Green Box Container */}
        <div className="bg-lime rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Main Headline - Left Aligned */}
          <motion.div 
            className="text-left mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-near-black">
              Run payroll
            </h2>
          </motion.div>

          {/* Dashboard Image - Positioned in Lower Left */}
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 lg:-mb-12 lg:-ml-12">
            <Image
              src="/landing-page-images/Scale your workforce part/image4.avif"
              alt="Sigma App Dashboard - Scale your workforce"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
            {/* Left Column - Spacer for Image */}
            <div>
              {/* This space is reserved for the dashboard image */}
            </div>

            {/* Right Column - Expandable Cards */}
            <div>
              {/* Expandable Cards */}
              <div className="space-y-4">
                {cards.map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardVariants}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleCard(card.id)}
                    >
                      <h3 className="text-xl font-semibold text-near-black">
                        {card.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-deep-green flex items-center justify-center">
                        {expandedCard === card.id ? (
                          <span className="text-white text-lg font-bold">−</span>
                        ) : (
                          <span className="text-white text-lg font-bold">+</span>
                        )}
                      </div>
                    </div>
                    
                    {expandedCard === card.id && (
                      <motion.div 
                        className="mt-4 pt-4 border-t border-gray-100"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {card.description}
                          {card.linkText && card.linkUrl && (
                            <span className="block mt-2">
                              <a 
                                href={card.linkUrl} 
                                className="text-deep-green hover:text-deep-green/80 underline"
                              >
                                {card.linkText}
                              </a>
                            </span>
                          )}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

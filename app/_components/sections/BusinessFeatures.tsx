'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BusinessFeatures() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  const cards = [
    {
      image: "/landing-page-images/Sigma is designed for businesses part/image1.avif",
      alt: "Hire in Minutes - Onboard contractors and employees quickly via WhatsApp",
      title: "Hire in Minutes",
      description: "Onboard contractors and employees quickly via WhatsApp while staying compliant."
    },
    {
      image: "/landing-page-images/Sigma is designed for businesses part/image2.avif",
      alt: "Your Pay, Their Way - Run payroll via US ACH with flexible payment options",
      title: "Your Pay, Their Way",
      description: "Run payroll via US ACH as you're used to, while workers save in USD or send funds home as they choose. Crypto or bank transfer, it's their choice."
    },
    {
      image: "/landing-page-images/Sigma is designed for businesses part/image3.avif",
      alt: "Master IRS Compliance - Manage W-8BEN forms and ITIN requirements with AI",
      title: "Master IRS Compliance",
      description: "We manage W-8BEN forms for foreign contractors and use AI to check for US ITINs to handle W-7 requirements."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Main Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-near-black mb-4">
            Sigma is designed for businesses powered by<br />
            global emerging talent
          </h2>
        </motion.div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="flex flex-col text-center"
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="mb-6 h-[250px] flex items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain rounded-lg shadow-lg transition-transform hover:scale-105 duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-near-black mb-4">
                {card.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

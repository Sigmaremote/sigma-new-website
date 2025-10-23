'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroTitle, Subhead, Body } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { routes } from '@/lib/routes';
import AnnouncementBar from '@/components/AnnouncementBar';

export default function HeroCopy() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dynamic announcement bar */}
        <div>
          <AnnouncementBar darkSurface={false} showViewAll />
        </div>

        <div className="mx-auto max-w-4xl py-8 pb-2 text-center sm:py-10 sm:pb-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <HeroTitle id="hero-heading" className="text-black leading-[1.05] tracking-tight">
              Sigma helps you hire, pay
              <br className="hidden sm:block" /> and retain anyone
            </HeroTitle>
          </motion.div>

          <motion.div
            className="mx-auto mt-5 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Subhead className="leading-relaxed max-w-prose">
                Easily hire and pay your global workforce. We handle <a href="/glossary/w-8ben" className="text-deep-green hover:text-deep-green/80 underline">W-8BEN forms</a>, local
                payments, and provide USD Wallets &amp; health benefits for your staff.
              </Subhead>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Body className="mt-3 leading-relaxed max-w-prose">
                Make onboarding, payments, retention, and compliance painless with Sigma.
              </Body>
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                href={routes?.contact ?? '/contact'}
              >
                Get a Free Payroll Setup <span aria-hidden="true" className="ml-2">→</span>
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Button 
                variant="ghost" 
                size="lg" 
                href="/signup"
              >
                Create Account
              </Button>
            </motion.div>
          </motion.div>

          {/* Product Hunt badges */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Image
              src="/landing-page-images/ProductHuntBadge.svg"
              alt="Product Hunt Badge"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
            <Image
              src="/landing-page-images/producthuntbadge2.svg"
              alt="Product Hunt Badge 2"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
